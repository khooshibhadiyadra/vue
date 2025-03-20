import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ToDoItem from './components/ToDoItem.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'
import CompThree from './components/CompThree.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const app = createApp(App)
app.component('todo-item', ToDoItem)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.component('comp-three', CompThree)
// app.component('animal-collection',AnimalCollection)
// app.component('food-items',FoodItems)

//using router:
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});
app.use(router);
app.mount('#app')
                  