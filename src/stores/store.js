import { defineStore } from "pinia";

export const useStore = defineStore("app", {
    state: () => ({
        menu: {
            categories: [
                {
                    id: 1,
                    title: "Appetizers",
                    subTitle: "Start your meal right",
                },
                { id: 2, title: "Breakfast", subTitle: "Morning delights" },
                { id: 3, title: "Soups", subTitle: "Warm and comforting" },
                { id: 4, title: "Main Courses", subTitle: "Hearty meals" },
            ],
            tags: [
                {
                    id: 1,
                    title: "vegan",
                    icon: "leaf",
                    bgColor: "#4CAF5025",
                    textColor: "#4CAF50",
                },
                {
                    id: 2,
                    title: "spicy",
                    icon: "pepper-hot",
                    bgColor: "#FF572225",
                    textColor: "#FF5722",
                },
                {
                    id: 3,
                    title: "favorite",
                    icon: "star",
                    bgColor: "#FFD70025",
                    textColor: "#9B870C",
                },
            ],
            items: [
                {
                    categoryId: 1,
                    title: "Spring Rolls",
                    price: 5.99,
                    tagIds: [1, 2],
                    description: "Crispy spring rolls filled with vegetables.",
                    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?_gl=1*1kwbebz*_ga*MTU2NjMyMTU3MS4xNzU0MjMwMzg5*_ga_8JE65Q40S6*czE3NTQyMzAzODkkbzEkZzEkdDE3NTQyMzAzOTIkajU3JGwwJGgw",
                },
                {
                    categoryId: 2,
                    title: "Pancakes",
                    price: 7.99,
                    tagIds: [3],
                    description: "",
                    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                    categoryId: 3,
                    title: "Chicken Soup",
                    price: 4.99,
                    tagIds: [],
                    description: "Classic chicken soup with vegetables.",
                    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?_gl=1*1iq06oj*_ga*MTU2NjMyMTU3MS4xNzU0MjMwMzg5*_ga_8JE65Q40S6*czE3NTQyMzAzODkkbzEkZzEkdDE3NTQyMzA0MzYkajEzJGwwJGgw",
                },
                {
                    categoryId: 4,
                    title: "Grilled Salmon",
                    price: 15.99,
                    tagIds: [1, 2, 3],
                    description:
                        "Grilled salmon served with a side of vegetables.",
                    img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?_gl=1*1iq06oj*_ga*MTU2NjMyMTU3MS4xNzU0MjMwMzg5*_ga_8JE65Q40S6*czE3NTQyMzAzODkkbzEkZzEkdDE3NTQyMzA0MzYkajEzJGwwJGgw",
                },
            ],
        },
    }),
    getters: {
        getMenu: (state) => state.menu,
    },
    actions: {
        setMyValue(newVal) {
            this.myValue = newVal;
        },
    },
});
