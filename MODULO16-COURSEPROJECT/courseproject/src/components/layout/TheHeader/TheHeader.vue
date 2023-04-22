<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          path: "/coaches",
          name: "Coaches",
        },
        {
          path: "/requests",
          name: "Requests",
        },
      ],
    };
  },
};
</script>
<style>
</style>