<template>
  <div>
    <v-text-field
      v-model="taskStore.titleTaskCreating"
      clearable
      label="Add Task"
      prepend-icon="mdi-folder-plus"
      @keyup.enter="taskStore.addTask"
      :rules="rules"
    ></v-text-field>
    <ListaComponent/>
  </div>
</template>

<script setup>

const rules = [
    value => {
      if (!value || value.length >= 5) return true
      return 'Campo obrigatório (minímo de 5 caracteres)'
    },
  ]
import ListaComponent from "./ListaComponent.vue";
import { useTaskStore } from "@/stores/task.js";
import { onMounted } from "vue";

const taskStore = useTaskStore();
onMounted(() =>{
  taskStore.getTasks();
})

</script>