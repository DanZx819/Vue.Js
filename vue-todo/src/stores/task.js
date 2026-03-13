// Utilities
import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [
      
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
        this.salvarNavegador();
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
      this.salvarNavegador();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) {
        this.taskSelecionada = index;
        
      }
      this.salvarNavegador();
    },
    salvarNavegador(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    getTasks(){
        let items =  localStorage.getItem('tasks');
        if(items){
            this.tasks = JSON.parse(items);
        }
    }
  },
});
