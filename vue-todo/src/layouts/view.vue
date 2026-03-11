<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="/public/download.jfif"
          title="Daniel de Oliveira Zanchetta"
        >
          <template v-slot:append>
           
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <router-link :to="item.to" v-for="(item, i) in items" :key="i" :value="item">
        <v-list-item color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title :textContent="item.text"></v-list-item-title>
        </v-list-item>
      </router-link>
      <v-list :lines="false" density="compact" nav> </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To do List</v-app-bar-title>
    </v-app-bar>

    <v-main> 

        <slot/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const items = [
  { text: "Home", icon: "mdi-folder", to: "home" },
  { text: "About", icon: "mdi-account-multiple", to: "about" },
];
</script>

<style lang="sss" scoped>

</style>
