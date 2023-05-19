<template>
  <div class="preloader"></div>
</template>

<script>
// компонент прелоадера,
// тут минимальный необходимый набор для его работы
// также выводится при users.length === 0
export default {
  name: "PreloaderComponent",
};
</script>

<style scoped>
.preloader {
  width: 20px;
  height: 20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
