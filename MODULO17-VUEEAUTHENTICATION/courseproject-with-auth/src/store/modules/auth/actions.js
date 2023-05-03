import axios from 'axios';

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

      const stateData = {
        userId: response.data.localId,
        token: response.data.idToken,
        tokenExpiration: response.data.expiresIn,
      };

      if (response.data) {
        ///armazena a data no LOCAL STORAGE...
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('token', response.data.idToken);
        // localStorage.expiration(
        //   'tokenExpiration',
        //   response.data.tokenExpiration
        // );
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

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null, //isso logo mudará...
      });
    }
  },
};
