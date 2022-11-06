<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(FAVORITE)' : '' }}</h2>
    <button @click="toggleFavoriteCorrectVersion">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>


</template>

<script>
export default {

  // props: [ ////É ASSIM QUE PASSAMOS O 'BARE MINIMUM' DE INFO SOBRE OS NOSSOS PROPS; NO CASO, PASSAMOS APENAS __ _o NAME _ DOS PROPS a serem recebidos por esse child component (É CLARO QUE, EM APPS MAIORES, VAMOS PASSAR MAIS INFORMAÇÕES, VAMOS 'TYPAR' OS NOSSOS PROPS, PARA QUE COISAS INCORRETAS NÃO SEJAM RECEBIDAS POR NOSSOS CHILD COMPONENTS)...
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],

  props : { ///MANEIRA MAIS ELABORADA DE ESPECIFICAR OS PROPS A SEREM RECEBIDOS.. --> CADA PROPS SERÁ UMA key nesse seu object...

    // name: String,  ///essa já é uma maneira mais elaborada de dizer o que vamos receber com esse prop.... mas há uma maneira mais detalhada ainda, vista logo abaixo desta linha:
    name: { ///assim conseguimos definir a maior quantidade de detalhes possível sobre esse prop que será recebido...
      
      type: String, ///será o TYPE desse negócio, desse prop...
      required: false ////DEFINE SE _ ESSE PROP __ DEVE SER OBRIGATORIAMENTE PASSADO A ESSE NOSSO COMPONENT, OU NÃO...


    },


    // phoneNumber: String,
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: String,

    ///exemplo de prop que é definido como 'OPCIONAL'

    // isFavorite: {
    //   type: String,
    //   required: false ///será opcional
    // }


    isFavorite: {
      type: String,
      required: false, ///será opcional o pass desse prop
      default: '0', //será o VALUE USADO POR ESSE PROP nesse nosso component, se ESSE PROP ESPECÍFICO não for passado pelo PARENT COMPONENT...
      // default: function() { ///TAMBÉM PODEMOS RODAR FUNCTIONS PARA DERIVAR O 'default', se assim desejarmos...
      //   return 'VALORDEFAULT';
      // }
   

      validator: function(valueProvidedByTheProp) { //////PODEMOS TAMBÉM TER A KEY DE 'validator', que SEMPRE SERÁ UMA FUNCTION QUE __ VAI RETORNAR __ TRUE OU FALSE...


      //O VALIDATOR SEMPRE VAI RETORNAR OU 'TRUE' OU 'FALSE' 
      ///e sempre vai receber, como parâmetro, o value PROVIDENCIADO/PASSADO no nosso prop...
      ///dentro do validator podemos ter QUALQUER VALIDATION LOGIC DE NOSSA ESCOLHA, para determinar se o value recebido como esse prop é válido ou não....

      ////APENAS ESSES 2 VALUES DEVERÃO SER PERMITIDOS POR NOSSO PROP.... é isso que esses checks fazem..
      if( valueProvidedByTheProp === '1' || valueProvidedByTheProp === '0') {

        return true;
      } else {
        ////todos outros values, para esse prop, serão NEGADOS...
        return false;
      }
   
    }}
      },


  data() {
    return {
      friendIsFavorite: this.isFavorite,
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavoriteCorrectVersion() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    }


  }
};
</script>