<template>
  <div class="text-center pa-4">
    <v-dialog v-model="props.dialog" max-width="400" persistent>
      <v-card title="Delete task ?" text="Do you want delete this task ?">
        <v-card-text>{{ task.title }}</v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="$emit('toggle')"> No </v-btn>

          <v-btn @click="$emit('deleteTask')"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  dialog: Boolean,
  task: Object,
});

</script>