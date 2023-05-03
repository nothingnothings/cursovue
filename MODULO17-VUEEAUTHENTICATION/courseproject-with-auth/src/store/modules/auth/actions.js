import axios from 'axios';

export default {
  async login(context, userData) {
    const formData = {
      ...userData,
    };

    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEYHhs8x2KOQfZ0FszTuNC4SymwlN1xc4',
        formData
      );

      const stateData = {
        userId: response.data.localId,
        token: response.data.idToken,
        tokenExpiration: response.data.expiresIn,
      };

      if (response.data) {
        context.commit('setUser', stateData);
      } else {
        context.state.authError = 'Failed to Authenticate.';
      }
    } catch (error) {
      // throw new Error(error.message || 'Failed to Authenticate.');
      context.state.authError =
        error.response.data.error.message || 'Failed to Authenticate.';
    }
  },

  async signup(context, userData) {
    const formData = {
      ...userData,
      returnSecureToken: true,
    };

    context.state.isLoading = true;

    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEYHhs8x2KOQfZ0FszTuNC4SymwlN1xc4',
        formData
      );

      const stateData = {
        userId: response.data.localId,
        token: response.data.idToken,
        tokenExpiration: response.data.expiresIn,
      };

      if (response.data) {
        context.commit('setUser', stateData);
      } else {
        context.commit('setUser', null);
      }
    } catch (error) {
      // throw new Error(error.message || 'Failed to Authenticate.');
      context.state.authError = error.response.data.error.message || 'Failed to Authenticate.';
      context.commit('setUser', null);
    }
  },

  clearAuthError(context) {
    console.log('ENTERED');
    context.commit('clearAuthError');
  },
};
