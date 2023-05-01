<template>
  <li>
    <h1>{{ request.email }}</h1>
    <p>{{ request.message }}</p>
  </li>
</template>
  <script>
export default {
  props: ["request"],
};
</script>
  <style>
</style>