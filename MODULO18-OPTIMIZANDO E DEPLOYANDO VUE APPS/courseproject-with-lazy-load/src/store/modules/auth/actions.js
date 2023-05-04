import axios from 'axios';

let timer;

export default {
  async login(context, userData) {
    return context.dispatch('auth', {
      isLoginMode: true,
      formData: {
        ...userData,
        returnSecureToken: true,
      },
    });
  },

  async signup(context, userData) {
    return context.dispatch('auth', {
      isLoginMode: false,
      formData: {
        ...userData,
        returnSecureToken: true,
      },
    });
  },

  clearAuthError(context) {
    console.log('ENTERED');
    context.commit('clearAuthError');
  },

  logout(context) {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    clearTimeout(timer);
    context.commit('setUser'); //setUser sem parâmetros é o equivalente a 'LOG USER OUT'...
  },

  async auth(context, authData) {
    // usado para EVITAR A PERDA DE AUTHENTICATION AO RECARREGARMOS O APP (localStorage, etc)...

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEYHhs8x2KOQfZ0FszTuNC4SymwlN1xc4';

    if (!authData.isLoginMode) {
      //signup url
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEYHhs8x2KOQfZ0FszTuNC4SymwlN1xc4';
    }

    try {
      const response = await axios.post(url, authData.formData);

      if (response.data) {
        ///armazena a data no LOCAL STORAGE...

        //usado para CRIAR 1 key de 'expirationTime', que será usada para EXPIRAR a token, depois de transcorrida 1 hora...
        const expiresIn = +response.data.expiresIn * 1000; //3600 * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);

        timer = setTimeout(() => {
          context.dispatch('autoLogout');  //usamos isso conjuntamente com um WATCHER LÁ EM 'App.vue'...
        }, expiresIn);

        const stateData = {
          userId: response.data.localId,
          token: response.data.idToken,
          // expirationDate: expirationDate /// essa data é necessária apenas no localStorage, pq vai importar APENAS QUANDO RECARREGAMOS A PAGE...
        };

        context.commit('setUser', stateData);
      } else {
        context.state.authError = 'Failed to Authenticate.';
      }
    } catch (error) {
      context.state.authError =
        error.response.data.error.message || 'Failed to Authenticate.';
    }
  },

  tryAutoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const expirationDate = localStorage.getItem('expirationDate'); //tempo restante da token do user...
    const expirationTime = +expirationDate - new Date.getTime();

    if (expirationTime < 0) {
      // se o tempo restante FOR MENOR DO QUE 0, nem mesmo vamos querer continuar com a authentication do user...
      return;
    }

    timer = setTimeout(
      () => {
        context.dispatch('autoLogout');
      },

      expirationTime // se ainda existir tempo até essa token ser expirada, vamos definir sua expiration no futuro, automática, por meio desse timeout...
    );

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null, //isso logo mudará...
      });
    }
  },

  autoLogout(context) {
    context.dispatch('logout'); //dispara a action de 'logout', vista acima...
    context.commit('didAutoLogout'); //dispara a MUTATION de 'didLogout', vista em 'mutations'...
  },
};
