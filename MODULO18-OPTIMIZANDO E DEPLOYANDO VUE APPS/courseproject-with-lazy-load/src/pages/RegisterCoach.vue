<template>
  <base-card>
    <section>
      <h2>Register as a coach now!</h2>
      <CoachForm
        @submit-form="
          (formData) => {
            registerCoach(formData);
          }
        "
      ></CoachForm>
    </section>
  </base-card>
</template>
<script>
import CoachForm from "@/components/CoachForm/CoachForm";
// import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  components: {
    CoachForm,
  },

  methods: {
    // ...mapActions(['registerCoach'])

    registerCoach(formData) {
      this.$store.dispatch("registerCoach", formData).then(() => {
        this.$router.replace("/coaches"); //não queremos poder 'VOLTAR' à form, depois de ela ter sido submittada( que é o que acontece, com 'router.push()')
      });
    },
  },
};
</script>
<style></style>