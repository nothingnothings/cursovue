import axios from 'axios';

export default {
  // login(context, userData) {},

  async signup(context, userData) {
    const formData = {
      ...userData,
      returnSecureToken: true,
    };

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
        context.commit('signup', null);
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to Authenticate.');
    }
  },
};
