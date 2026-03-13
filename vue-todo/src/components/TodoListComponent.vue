<template>
  <div>
    <v-text-field
      v-model="taskStore.titleTaskCreating"
      clearable
      label="Add Task"
      prepend-icon="mdi-folder-plus"
      @keyup.enter="taskStore.addTask"
    ></v-text-field>
    <ListaComponent :tasks="taskStore.tasks" />
  </div>
</template>

<script setup>
import ListaComponent from "./ListaComponent.vue";
import { useTaskStore } from "@/stores/task.js";
import { ref } from "vue";

const taskStore = useTaskStore();


</script>