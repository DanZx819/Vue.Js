<template>
  <div>
    <TodoListComponent />

    <v-list lines="three" select-strategy="leaf">
      <v-list-subheader>List</v-list-subheader>
      <v-list-item
        v-for="(task, index) in taskStore.tasks"
        :key="index"
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

        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="grey-ligten-1"
                v-bind="props"
                icon="mdi-dots-vertical"
              >
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                prepend-icon="$edit"
                value="1"
                @click="taskStore.toggleEdit(index)"
              >
                <v-list-item-title> Editar</v-list-item-title>
              </v-list-item>
              <v-list-item
                prepend-icon="mdi-delete"
                value="2"
                @click="taskStore.toggleDelete(index)"
              >
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskComponent
      :dialog="taskStore.showDialogTaskFields"
      @toggle="taskStore.toggleEdit"
      :task="taskStore.tasks[taskStore.taskSelecionada]"
    />
    <DialogDeleteComponent
      :dialog="taskStore.showDialogDelete"
      @toggle="taskStore.toggleDelete"
      @deleteTask="taskStore.deleteTask"
      :task="taskStore.tasks[taskStore.taskSelecionada]"

    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DialogTaskComponent from "./DialogTaskFieldComponent.vue";
import DialogDeleteComponent from "./DialogDeleteComponent.vue";
import {useTaskStore} from "@/stores/task.js";

const taskStore = useTaskStore();











</script>