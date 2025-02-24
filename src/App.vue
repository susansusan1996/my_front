<template>
  <div class="container" v-if="dataOk">
    <NavBar @refresh="onRefresh" />
    <!--      <keep-alive>-->
    <router-view></router-view>
    <!--      </keep-alive>-->
  </div>
  <!--  <app-footer></app-footer>-->
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import appFooter from "./components/app-footer.vue";
import { ref } from "vue";

let dataOk = ref(true);

function onRefresh() {
  dataOk.value = false;
  setTimeout(() => {
    dataOk.value = true;
  }, 20);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
