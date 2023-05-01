<template>
  <base-card>
    <section>
      <base-card>
        <h1>{{ fullName }}</h1>
        <p>{{ hourlyRate }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button :link="true" :to="contactCoachLink"
            >Contact Coach</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :type="area" :key="area">{{ area }}</base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </base-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["id"], ///ESSE PROP É OBTIDO LÁ DO VUE-ROUTER, como visto em 'router.js', na route  de 'CoachDetail' (props: true)...
  data() {
    // return {
    //   selectedCoach: null,
    // };
  },

  created() {
    ///isso vai DEFINIR NOSSO LOCAL STATE DE ACORDO COM O STATE DO VUEX...
    this.loadCoach(this.id);
  },

  methods: {
    ...mapActions(["loadCoach"]),
  },

  mounted() {
    // this.loadCoach(this.loadedCoach.id);
    // this.loadCoach(this.id); ////usamos esse PROP, que é recebido/passado através de 'props: true', lá na nossa route...
  },
  computed: {
    ...mapGetters(["loadedCoach"]),

    contactCoachLink() {
      return {
        name: "contact-coach",
        params: {
          id: this.id,
        },
      };
    },

    fullName() {
      console.log(this.loadedCoach.firstName + this.loadedCoach.lastName);
      return this.loadedCoach.firstName + " " + this.loadedCoach.lastName;
    },

    areas() {
      console.log(this.loadedCoach.areas);
      return this.loadedCoach.areas;
    },

    rate() {
      return this.loadedCoach.hourlyRate;
    },

    description() {
      return this.loadedCoach.description;
    },
  },
};
</script>
<style>
</style>