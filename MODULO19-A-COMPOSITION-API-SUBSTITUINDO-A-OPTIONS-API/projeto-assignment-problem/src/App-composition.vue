<template>
  <div>
    <h2>My Course Goal</h2>
    <h3>OUTPUT COURSE GOAL</h3>
    <div>
      <h4 v-if="showGoal">{{ goalText1 }}</h4>
      <button @click="toggleGoal">Toggle Goal</button>
    </div>
    <div>
      <h4 v-if="showGoal2">{{ goalText2 }}</h4>
      <button @click="toggleGoal2">Toggle Goal</button>
    </div>
    <div>
      <h4 v-if="showGoal3">{{ goalText3 }}</h4>
      <button @click="toggleGoal3">Toggle Goal</button>
    </div>
  </div>
</template>

  
  <script>
export default {
  data() {
    return {
      showGoal: false,
      showGoal2: false,
      showGoal3: false,
      goalText1: 'I have a goal.',
      goalText2: 'I have a goal 2.',
      goalText3: 'I have a goal 3.',
    };
  },

  methods: {
    toggleGoal() {
      this.showGoal = !this.showGoal;
    },

    toggleGoal2() {
      this.showGoal2 = !this.showGoal2;
    },

    toggleGoal3() {
      this.showGoal3 = !this.showGoal3;
    },
  },

  //   setup() {
  //     const toggleGoal = () => {
  //       showGoal.value = !showGoal.value;
  //       if (!showGoal.value) {
  //         goalText.value = '';
  //       } else {
  //         goalText.value = 'I have a goal.';
  //       }
  //     };

  //     const toggleGoal2 = () => {
  //       goalObject.value.showGoal2 = !goalObject.value.showGoal2;
  //       if (!goalObject.value.showGoal2) {
  //         goalObject.value.goalText2 = '';
  //       } else {
  //         goalObject.value.goalText2 = 'I have a goal 2.';
  //       }
  //     };

  //     const toggleGoal3 = () => {
  //       goalObject2.showGoal3 = !goalObject2.showGoal3;
  //       if (!goalObject2.showGoal3) {
  //         goalObject2.goalText3 = '';
  //       } else {
  //         goalObject2.goalText3 = 'I have a goal 3.';
  //       }
  //     };

  //     const showGoal = ref(false);
  //     const goalText = ref('I have a goal.');

  //     const goalObject = ref({
  //       goalText2: 'I have a goal 2.',
  //       showGoal2: false,
  //       toggleGoal2: toggleGoal2,
  //     });

  //     const goalObject2 = reactive({
  //       goalText3: 'I have a goal 3.',
  //       showGoal3: false,
  //       toggleGoal3: toggleGoal2,
  //     });

  //     return {
  //       //normal composition api usage  (  ref(primitive-value))
  //       showGoal,
  //       toggleGoal,
  //       goalText,
  //       //composition api usage with ref(object)
  //       goalObject,
  //       toggleGoal2,
  //       //composition api usage with reactive(object)
  //       goalObject2,
  //       toggleGoal3,
  //     };
  //   },
};
</script>
  
  <style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>