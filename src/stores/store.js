import { defineStore } from "pinia";

export const useStore = defineStore("app", {
    state: () => ({
        menu: {
            categories: [
                {
                    id: 1,
                    title: "Appetizers",
                    subTitle: "",
                },
                {
                    id: 2,
                    title: "Salads",
                    subTitle:
                        "Add Chicken $8 (160 cal), Add Avocado $2 (80 cal)",
                },
                {
                    id: 3,
                    title: "Pasta",
                    subTitle: "Gluten-free pasta available for substitution",
                },
                { id: 4, title: "Seafood", subTitle: "" },
                { id: 5, title: "Chicken", subTitle: "" },
                { id: 6, title: "Sides", subTitle: "" },
            ],
            tags: [
                {
                    id: 1,
                    title: "vegetarian",
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
                    title: "Zucchini Fritté",
                    price: 17.5,
                    tagIds: [1],
                    description: "",
                    img: "https://images.pexels.com/photos/364657/pexels-photo-364657.jpeg",
                },
                {
                    categoryId: 1,
                    title: "Crispy Mozzarella",
                    price: 15.0,
                    tagIds: [],
                    description: "",
                    img: "https://images.pexels.com/photos/33434019/pexels-photo-33434019.jpeg",
                },
                {
                    categoryId: 3,
                    title: "Penne alla Vodka",
                    price: 22.0,
                    tagIds: [1],
                    description: "Penne pasta in a creamy vodka sauce",
                },
                {
                    categoryId: 4,
                    title: "Grilled Salmon",
                    price: 28.0,
                    tagIds: [2],
                    description: "Fresh salmon grilled to perfection",
                    img: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg",
                },
                {
                    categoryId: 5,
                    title: "Roasted Chicken",
                    price: 24.0,
                    tagIds: [3],
                    description: "Herb-marinated roasted chicken",
                    img: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
                },
                {
                    categoryId: 6,
                    title: "Garlic Mashed Potatoes",
                    price: 8.0,
                    tagIds: [],
                    description: "Creamy mashed potatoes with garlic",
                },
                {
                    categoryId: 6,
                    title: "Steamed Broccoli",
                    price: 6.0,
                    tagIds: [1],
                    description: "Fresh steamed broccoli with lemon",
                    img: "https://images.pexels.com/photos/6875725/pexels-photo-6875725.jpeg",
                },
                {
                    categoryId: 2,
                    title: "Caesar Salad",
                    price: 12.0,
                    tagIds: [],
                    description:
                        "Classic Caesar salad with croutons and parmesan",
                },
                {
                    categoryId: 2,
                    title: "Greek Salad",
                    price: 14.0,
                    tagIds: [1],
                    description: "Mixed greens with feta, olives, and tomatoes",
                    img: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
                },
                {
                    categoryId: 2,
                    title: "Caprese Salad",
                    price: 13.0,
                    tagIds: [1],
                    description: "Fresh mozzarella, tomatoes, and basil",
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
