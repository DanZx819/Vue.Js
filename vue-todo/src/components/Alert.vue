<template>
  <div class="alert-notification">
    <v-alert
      closable
      :title="useAlert.title"
      type="success"
      variant="tonal"
      class="sucesso animate__animated animate__fadeInLeft "
    ></v-alert>
  </div>
</template>

<script setup>
import {useAlertStore } from "@/stores/alert.js";
import 'animate.css';
const useAlert = useAlertStore();



</script>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 50px;
  padding: 0 35% 0 35%;
}
.sucesso{
    background-color: rgba(0, 255, 140, 0.2);
}

</style>