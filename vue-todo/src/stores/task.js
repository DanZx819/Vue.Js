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
    showDialogDelete: false,
    showDialogTaskFields: false,
    taskSelecionada: 0,
  }),
  actions: {
    addTask() {
      if (this.titleTaskCreating !== "") {
        this.tasks.push({
          title: this.titleTaskCreating,
        });
        this.titleTaskCreating = "";
      } else {
        return console.log("Digita alguma coisa ai");
      }
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete;
      if (index != null) {
        this.taskSelecionada = index;
      }
    },
    deleteTask() {
      this.tasks.splice(this.taskSelecionada, 1);
      this.toggleDelete();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) {
        this.taskSelecionada = index;
      }
    },
  },
});
