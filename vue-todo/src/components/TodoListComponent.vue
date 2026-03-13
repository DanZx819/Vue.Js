<template>
  <div>
    <v-text-field
      v-model="taskStore.titleTaskCreating"
      clearable
      label="Add Task"
      prepend-icon="mdi-folder-plus"
      @keyup.enter="taskStore.addTask"
    ></v-text-field>
    <ListaComponent/>
  </div>
</template>

<script setup>
import ListaComponent from "./ListaComponent.vue";
import { useTaskStore } from "@/stores/task.js";
import { onMounted } from "vue";

const taskStore = useTaskStore();
onMounted(() =>{
  taskStore.getTasks();
})

</script>