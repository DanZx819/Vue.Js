import {defineStore} from 'pinia';

export const useAlertStore = defineStore('alert',{
    state: () => ({
        title: "",
        showAlert: false
    }),
    actions: {
        notifyAlert(title){
            this.title = title;
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        }
    }
})