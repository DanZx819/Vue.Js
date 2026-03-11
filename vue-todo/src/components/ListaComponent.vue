<template>
  <div>
    <v-text-field
      clearable
      label="Add Task"
      prepend-icon="mdi-folder-plus"
      @keyup="addTask()"
    ></v-text-field>
    <v-list v-model="settingsSelection" lines="three" select-strategy="leaf">
      <v-list-subheader>General</v-list-subheader>
      <v-list-item v-for="task, index in tasks" :key="index"
        :title="task.title"
        :subtitle="task.subtitle"
        >
        <template v-slot:prepend="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="isSelected"
              @update:model-value="select"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from "vue";



const tasks = ref([
    {
        title: "Estudar Vue",
        subtitle: "Estudar Vue com Vuetify"
    },
    {
        title: "Estudar Vuetify",
        subtitle: "Ler a documentação do Vuetify"
    }
]);

const task = {
    title: "",
    subtitle: "",
}

const addTask = () =>{
    tasks.value.push(task)
}


</script>