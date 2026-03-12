<template>
  <div>
    <TodoListComponent/>

    <v-list lines="three" select-strategy="leaf">
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="(task, index) in props.tasks"
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
              <v-list-item prepend-icon="$edit" value="1">
                <v-list-item-title @click="toggle">Edit</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-delete" value="2">
                <v-list-item-title> Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskComponent :dialog="showDialogTaskFields" @toggle="toggle"/>
  </div>
</template>

<script setup>

import { defineProps, ref } from 'vue';
import DialogTaskComponent from './DialogTaskFieldComponent.vue';


const props = defineProps({
  tasks: Array
});

const showDialogTaskFields = ref(false);
const toggle = () =>{
  showDialogTaskFields.value = !showDialogTaskFields.value;
};
</script>