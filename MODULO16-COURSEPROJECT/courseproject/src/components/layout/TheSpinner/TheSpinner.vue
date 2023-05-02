<template>
  <div class="loader-wrapper">
    <span class="loader"></span>
  </div>
</template>
<script>
export default {
  created() {
    console.log("CREATED DOS GURI");
  },
};
</script>
<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
}
.loader {
  width: 48px;
  margin-top: 2rem;
  height: 48px;
  border: 5px solid rgb(103, 26, 181);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>