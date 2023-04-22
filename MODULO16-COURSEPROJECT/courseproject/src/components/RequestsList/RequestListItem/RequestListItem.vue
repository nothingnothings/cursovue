<template>
  <li>
    <h1>{{ request.text }}</h1>
    <p>{{ request.email }}</p>
  </li>
</template>
  <script>
export default {
  props: ["request"],
};
</script>
  <style>
</style>