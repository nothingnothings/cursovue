<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3>OUTPUT COURSE GOAL</h3>
    <div>
      <h4 v-if="showGoal">{{ goalText }}</h4>
      <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
      <button @click="toggleGoal">Toggle Goal</button>
    </div>
    <div>
      <h4 v-if="goalObject.showGoal2">{{ goalObject.goalText2 }}</h4>
      <button @click="toggleGoal2">Toggle Goal</button>
    </div>
    <div>
      <h4 v-if="goalObject2.showGoal3">{{ goalObject2.goalText3 }}</h4>
      <button @click="toggleGoal3">Toggle Goal</button>
    </div>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const toggleGoal = () => {
      showGoal.value = !showGoal.value;
      if (!showGoal.value) {
        goalText.value = '';
      } else {
        goalText.value = 'I have a goal.';
      }
    };

    const toggleGoal2 = () => {
      goalObject.value.showGoal2 = !goalObject.value.showGoal2;
      if (!goalObject.value.showGoal2) {
        goalObject.value.goalText2 = '';
      } else {
        goalObject.value.goalText2 = 'I have a goal 2.';
      }
    };

    const toggleGoal3 = () => {
      goalObject2.showGoal3 = !goalObject2.showGoal3;
      if (!goalObject2.showGoal3) {
        goalObject2.goalText3 = '';
      } else {
        goalObject2.goalText3 = 'I have a goal 3.';
      }
    };

    const showGoal = ref(false);
    const goalText = ref('I have a goal.');

    const goalObject = ref({
      goalText2: 'I have a goal 2.',
      showGoal2: false,
      toggleGoal2: toggleGoal2,
    });

    const goalObject2 = reactive({
      goalText3: 'I have a goal 3.',
      showGoal3: false,
      toggleGoal3: toggleGoal2,
    });

    return {
      //normal composition api usage  (  ref(primitive-value))
      showGoal,
      toggleGoal,
      goalText,
      //composition api usage with ref(object)
      goalObject,
      toggleGoal2,
      //composition api usage with reactive(object)
      goalObject2,
      toggleGoal3,
    };
  },
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