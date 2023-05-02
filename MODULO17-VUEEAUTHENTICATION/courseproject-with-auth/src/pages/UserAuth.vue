<template>
  <base-card>
    <form @submit.prevent="submitForm()">
      <div class="form-control">
        <label for="email" :class="{ invalid: !email.isValid }">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
      </div>
      <div class="form-control">
        <label for="password" :class="{ invalid: !password.isValid }"
          >Password</label
        >
        <input
          type="password"
          id="password"
          v-model.trim="password.val"
          @blur="clearValidity('password')"
        />
      </div>
      <p
        v-if="
          !loginFormIsValid &&
          this.email.val.length > 0 &&
          this.password.val.length > 0
        "
      >
        Please enter a valid email and password (password must be at least 6
        characters long).
      </p>
      <p v-if="!signupFormIsValid">Please enter a valid xxxx</p>
      <base-button> {{ submitButtonCaption }}</base-button>
      <base-button @click="switchAuth" mode="flat" :link="false"
        >{{ authLinkCaption }} instead</base-button
      >
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      loginFormIsValid: true,
      signupFormIsValid: true,
      isLogin: true,
    };
  },

  methods: {
    submitForm() {
      if (this.isLogin) {
        this.validateForm("login");
        if (!this.loginFormIsValid) {
          return;
        }
        // const loginFormData = {
        //   email: this.email.val,
        //   password: this.password.val,
        // };
      } else {
        this.validateForm("signup");
        if (!this.signupFormIsValid) {
          return;
        }

        // const signupFormData = {
        //   email: this.email.val,
        //   message: this.password.val,
        // };
      }
    },

    switchAuth() {
      this.isLogin = !this.isLogin;
    },

    validateForm(mode) {
      this.formIsValid = true;
      if (mode === "login") {
        if (this.email.val === "" || !this.email.val.includes("@")) {
          this.email.isValid = false;
          this.loginFormIsValid = false;
        }

        if (this.password.val === "" || this.password.val.length < 6) {
          this.password.isValid = false;
          this.loginFormIsValid = false;
        }
      } else {
        if (this.email.val === "" || !this.email.val.includes("@")) {
          this.email.isValid = false;
          this.loginFormIsValid = false;
        }

        if (this.password.val === "") {
          this.password.isValid = false;
          this.loginFormIsValid = false;
        }
      }
    },

    clearValidity(input) {
      this[input].isValid = true;
    },
  },

  computed: {
    authLinkCaption() {
      if (this.isLogin) {
        return "Sign Up";
      } else {
        return "Log In";
      }
    },

    submitButtonCaption() {
      if (this.isLogin) {
        return "Login";
      } else {
        return "Sign Up";
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>