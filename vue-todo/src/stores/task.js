// Utilities
import { defineStore } from "pinia";
import {useAlertStore} from "@/stores/alert.js"

const useAlert = useAlertStore();
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
      if (this.titleTaskCreating.length >= 5) {
        this.tasks.push({
          title: this.titleTaskCreating,  
          done: false
          
        });
        useAlert.notifyAlert("Task created");
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
      useAlert.notifyAlert("Task Deleted");
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
    },
    toggleDoneTask(index){
      this.tasks[index].done = !this.tasks[index].done;
      this.salvarNavegador();
    }
  },
});
