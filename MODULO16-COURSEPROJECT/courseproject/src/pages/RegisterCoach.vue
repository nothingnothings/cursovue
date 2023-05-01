<template>
  <base-card>
    <section>
      <h2>Register as a coach now!</h2>
      <CoachForm></CoachForm>
    </section>
  </base-card>
</template>
<script>
import CoachForm from "@/components/CoachForm/CoachForm";
export default {
  components: {
    CoachForm,
  },
};
</script>
<style></style>