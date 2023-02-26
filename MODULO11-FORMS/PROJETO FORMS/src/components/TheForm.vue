<template>
  <form @submit.prevent="onFormSubmitHandler($event)">
    <div class="form-control">
      <label
        for="user-name"
        :class="{ invalid: userNameValidity === 'invalid' }"
        >Your Name</label
      >
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model="enteredUser"
        @blur="validateInput()"
      />
      <p v-if="userNameValidity === 'invalid'">
        Please enter a valid username!
      </p>
    </div>

    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="enteredAge" />
      <!--  o fato do input ser de type 'age' faz com que TODAS AS COISAS INPUTTADAS NELE (como strings) SEJAM AUTOMATICAMENTE CONVERTIDAS EM NUMBERS, pelo vue -->

      <!-- TAMBÉM PODEMOS FORÇAR ESSA CONVERSÃO COM OUTROS TYPES DE INPUT FIELD, botando o modifier '.number' em 'v-model', TIPO <input type="text" v-model.number="enteredAge"></input> -->
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="enteredReferrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <!-- ESSA PROPRIEDADE DE 'value' É ESSENCIAL  para DIFERENCIAR 1 INPUT (de type 'checkbox' ou 'radio') EM RELAÇÃO A OUTRO ... -->
        <input
          id="interest-news"
          name="interest"
          value="news"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          value="tutorials"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          value="nothing"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          value="video"
          type="radio"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          value="blogs"
          type="radio"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          value="other"
          type="radio"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>

    <div class="form-control">
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirmTerms"
      />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div class="form-control">
    <!-- EXEMPLO DA UTILIZAÇÃO DE 'V-MODEL' com CUSTOM COMPONENTS (Em vez de input fields clássicos)-->
      <rating-control v-model="rating"></rating-control>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from '../components/RatingControl';
export default {
  components: {
    RatingControl,
  },

  data() {
    return {
      enteredUser: '',
      enteredAge: null, ///VALUES DE NUMBER EXTRAÍDOS de 'inputs'  DE TYPE NUMBER COM 'v-model' SEMPRE SÃO __ NUMBER__... --> ELES SÃO CONVERTIDOS PARA TYPE 'NUMBER' MANUALMENTE... (pq serão inicialmente strings, apesar de ser TEORICAMENTE apenas possível inputtar numbers nesse input field....)
      enteredReferrer: 'google',
      // interest: null,  //// VERSÃO ERRADA (os 3 checkboxes vão se habilitar/desabilitar CONJUNTAMENTE, se fizermos assim)...
      interest: [], //VERSÃO CERTA. (os 3 checkboxes serão independentes) --> SE VC TEM MÚLTIPLOS CHECKBOXES COMPARTILHANDO O MESMO 'NAME', SEUS VALUES PASSAM A FAZER PARTE DESSE ARRAY, QUANDO MARCADOS/CHECADOS...
      how: null,
      confirmTerms: false, //// JÁ SE O CHECKBOX É __ÚNICO, SÓ ELE EXISTE (só ele com aquele 'name' attribute), AÍ __ ELE VAI ALTERNAR ENTRE 'false' e 'true', quando marcado...
      userNameValidity: 'pending',
      rating: null ////USADO  PARA DEMONSTRAR O FUNCIONAMENTO DE 'V-MODEL' COM CUSTOM COMPONENTS (em vez de input fields clássicos)...



      // versão FEITA POR MIM, antiga, ruim...
      // checkedNews: false,
      // checkedTutorials: false,
      // checkedNothing: false,
      // checkedVideo: false,
      // checkedBlogs: false,
      // checkedOther: false,
    };
  },

  methods: {
    onFormSubmitHandler() {
      // event.preventDefault;

      console.log(this.enteredUser);
      console.log(this.enteredAge);
      console.log(this.enteredReferrer);
      console.log(this.interest);
      console.log(this.how);
      console.log(this.rating);
      // console.log(this.checkedNews);
      // console.log(this.checkedTutorials);
      // console.log(this.checkedNothing);
      // console.log(this.checkedVideo);
      // console.log(this.checkedBlogs);
      // console.log(this.checkedOther);

      //ISTO REINICIA OS INPUTS para 'empty values'..
      this.enteredUser = '';
      this.enteredAge = null;
      this.enteredReferrer = '';
      this.interest = [];
      this.how = null;
      this.rating = null;
      // this.checkedNews = '';
      // this.checkedTutorials = '';
      // this.checkedNothing = '';
      // this.checkedVideo = '';
      // this.checkedBlogs = '';
      // this.checkedOther = '';

      console.log(
        this.enteredUser,
        this.enteredAge,
        this.enteredReferrer,
        this.interest,
        this.how
        // this.checkedNews,
        // this.checkedTutorials
      );
    },

    validateInput() {
      if (this.enteredUser.trim() === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>

<!-- 'v-model.number="" ' 










-->

<!-- 

ISSO _ VAI CONVERTEr__ AUTOMATICAMENTE __ 



O VALUE INPUTTADO NESSE INPUT FIELD, PELO USER,



EM 


1 _ _ VALUE __ DE TYPE NUMBER..





 -->

<!-- 
 TEMOS MODIFIERS COMO 




 'v-model.lazy'...









esse modifier te deixa modificar  -->

<!-- 'COMO O VUE __ UPDATA__ A __ BOUND PROPERTY'',  se ele faz isso -->

<!-- PARA CADA KEYSTROKE,


 OU SE, PARA ALGUNS INPUTS,


 ELE __ FAZ/DEVE FAZER ISSO COM 1 FREQUÊNCIA MELHOR...






 -->

<!-- 
JÁ 'v-model.trim="" -->

<!-- 
 QUER DIZER QUE _ ELE _ DEVE __ REMOVER __ EXCESS WHITE SPACE 



 AO INÍCIO E FINAL __ DO TEXTO QUE FOI INPUTTADO...



 (

  é a mesma coisa que 


  escrever 

  o method '.trim()' no final de 


  'this.enteredUser',


  por exemplo...
 ) -->
