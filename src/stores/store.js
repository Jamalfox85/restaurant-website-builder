import { defineStore } from "pinia";

export const useStore = defineStore("app", {
    state: () => ({
        myValue: "hello world",
    }),
    getters: {
        getMyValue: (state) => state.myValue,
    },
    actions: {
        setMyValue(newVal) {
            this.myValue = newVal;
        },
    },
});
