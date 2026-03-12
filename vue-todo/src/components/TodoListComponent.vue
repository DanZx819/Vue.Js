<template>
  <div>
    <v-text-field
      v-model="task.title"
      clearable
      label="Add Task"
      prepend-icon="mdi-folder-plus"
      @keyup.enter="addTask"
    ></v-text-field>
    <ListaComponent :tasks="tasks" />
  </div>
</template>

<script setup>
import ListaComponent from "./ListaComponent.vue";

import { ref } from "vue";
const tasks = ref([
  {
    title: "Estudar Vue",
    subtitle: "Estudar Vue com Vuetify",
  },
  {
    title: "Estudar Vuetify",
    subtitle: "Ler a documentação do Vuetify",
  },
]);

const task = ref({
  title: "",
  subtitle: "",
});

const addTask = () => {
  if (task.value.title !== "") {
    tasks.value.push({
      title: task.value.title,
    });
    task.value = {
      title: "",
    };
  } else {
    return console.log("Digita alguma coisa ai");
  }
};
</script>