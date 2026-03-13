// Utilities
import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [
      {
        title: "Estudar Vue",
        subtitle: "Estudar Vue com Vuetify",
      },
      {
        title: "Estudar Vuetify",
        subtitle: "Ler a documentação do Vuetify",
      },
    ],
    titleTaskCreating: "",

  }),
  actions: {
    addTask () {
        if (this.titleTaskCreating !== "") {
            this.tasks.push({
            title: this.titleTaskCreating,
            
            });
            this.titleTaskCreating = "";
        } else {
            return console.log("Digita alguma coisa ai");
        }
    }
  }
})
