<!-- <template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <pre v-if="data">{{ data }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("file.txt");
      this.data = response;
    }
  }
};
</script>              -->

<!-- <template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <pre v-if="data">{{ data }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("bigLandMammals.json");
      this.data = await response.json();
    }
  }
};
</script>                   -->


<!-- <template>
  <h1>Example</h1>
  <p>Click the button to fetch data with an HTTP request.</p>
  <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
  <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
  <button @click="fetchData">Fetch data</button>
  <div v-if="data" id="dataDiv">
    <img :src="data.data.avatar" alt="avatar">
    <pre>{{ data.data.first_name + " " + data.data.last_name }}</pre>
    <p>"{{ data.data.employment.title }}"</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {      
        this.data = await axios.get("https://random-data-api.com/api/v2/users");
      }
    }
  };

</script>

<style>
#dataDiv {
  width: 240px;
  background-color: aquamarine;
  border: solid black 1px;
  margin-top: 10px;
  padding: 10px;
}
#dataDiv > img {
  width: 100%;
}
pre {
  font-size: larger;
  font-weight: bold;
}
</style>                   -->

<!-- <script setup>
import {ref,watch} from 'vue'
const question=ref('')
const answer=ref('questions must contain question mark')
const loading=ref(false)

watch(question,async(newQuestion,oldQuestion)=>{
  if(newQuestion.includes('?')){
    loading.value=true
    answer.value='thinking...'

    try{
      const res=await fetch('https://yesno.wtf/api')
      answer.value=(await res.json()).answer
    }catch(error){
      answer.value='error'+error
    } finally {
      loading.value=false
    }
  }
})


</script>

<template>
  <p>
    ask a yes/no question:
    <input v-model="question":disabled="loading"/>
    </p>
    <p>{{ answer }}</p>
  </template>

<style>
</style> -->


<!-- <template>
  <h3>Todo List</h3>
  <p>In this example, the style attribute falls through from App.vue into the li element which is the components root element.</p>
  <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>
  <input placeholder="Add things to do here" v-model="newItem" @keydown.enter="addItem">
  <button @click="addItem">Add</button>
</template>

<script>
export default {
  data() { 
    return {
      newItem: '',
      items: ['Buy apples','Make pizza','Mow the lawn']
    };
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
}
</script>

<style>
  ul {
    width: 150px;
  }
</style>                   -->


<!-- <template>
  <h1>Dynamic Components</h1>
  <p>With &lt;KeepAlive :max="2"&gt; only the last two visited components will remember the user input.</p>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-one'"> One</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-two'"> Two</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-three'"> Three</label>
  <KeepAlive :max="2">
    <component :is="compName"></component>
  </KeepAlive>
</template>

<script>
  export default {
    data () {
      return {
        compName: 'comp-one'
      }
    }
  }
</script>

<style>
  #app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
  }
  h2 {
    text-decoration: underline;
  }
  label {
    display: inline-block;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
  }
</style>    -->


<!-- <template>
  <p>Choose what part of this page you want to see:</p> -->
  <!-- <button @click="activeComp = 'animal-collection'">Animals</button>
  <button @click="activeComp = 'food-items'">Food</button><br> -->

  <!-- if router -->
   <!-- <router-link to="/animals">Animals</router-link>
  <router-link to="/food">Food</router-link><br>
  <div>
    <component :is="activeComp"></component>
  </div> 

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeComp: ''
      }
    }
}
</script>

<style scoped>
 a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
  button {
    padding: 5px;
    margin: 10px;
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>                   -->

<!-- 
<template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>New products are given animations using the &lt;TransitionGroup&gt; component.</p>
  <button @click="addDie">Roll</button>
  <button @click="removeDie">Remove random</button><br>
  <TransitionGroup>
    <div v-for="x in dice" :key="x" class="diceDiv" :style="{ backgroundColor: 'hsl('+x*40+',85%,85%)' }">
      {{ x }}
    </div>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        dice: [],
        inpName: ''
      }
    },
    methods: {
      addDie() {
        const newDie = Math.ceil(Math.random()*6);
        this.dice.push(newDie);
      },
      removeDie() {
        if(this.dice.length>0){
          this.dice.splice(Math.floor(Math.random()*this.dice.length), 1);
        }
      }
    },
    mounted() {
      this.addDie();
      this.addDie();
      this.addDie();
    }
  }
</script>

<style>
.v-enter-from {
  opacity: 0;
  translate: 200px 0;
  rotate: 360deg;
}
.v-enter-to {
  opacity: 1;
  translate: 0 0;
  rotate: 0deg;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s;
}
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }
.diceDiv {
  margin: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border: solid black 1px;
  border-radius: 5px;
  display: inline-block;
}
</style>                   -->


 <!-- <template>
  <h2>Example $nextTick() Method</h2>
  <p>Using "await $nextTick()", the next lines of code will also wait until the 'next tick' happens.
  </p>
  <div>
    <p ref="messageEl">{{ message }}</p>
    <button v-on:click.once="updateMsg">Update Message</button>
    <ol>
      <li v-for="x in results">{{ x }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Initial Message",
      results: []
    };
  },
  methods: {
    async updateMsg() {
      this.message = "Hello! This message is now updated.";
      this.results.push(this.$refs.messageEl.textContent);
      await this.$nextTick();
      this.results.push(this.$refs.messageEl.textContent + ' (after await $nextTick())');
    }
  }
};
</script>

<style scoped>
div {
  border: solid black 1px;
  padding: 10px;
}
</style>               -->


<!-- $watch method -->
<!-- <template>
  <h2>example</h2>
  <p>drag slidder</p>
  <div>
    <p><input type="range" min="0" max="20" v-model="value">current: {{ value }}</p>
    <ol>
      <li v-for="x in results">{{ x }}</li>
    </ol>
  </div>
  </template>

  <script>

export default{
  data(){
    return {
      value: 0,
      results:[]
    };
  },
  mounted(){
    this.$watch('value',function(newVal,oldVal){
      this.results.push('old value '+oldVal+', new value '+newVal)
    })
  }
};
  </script>

  <style scoped>
  div {
  border: solid black 1px;
  padding: 10px;
}

  </style>


 <!-- <style>
body {
  padding: 1%;
  background-color: #abca
}

h2, h4 {
  font-family: 'Nunito', sans-serif;
}


#shopping-list-table{
  table-layout: fixed;
  width: 50%;
  vertical-align: middle;
}

button {
  margin-left: 2%;
}
 </style>
 
 shopping list:
<template>
<form id="shopping-list">
  <h2>Shopping List</h2>
<table id="shopping-list-table" class="table table-condensed table-hover">
  <thead>
     <tr>
       <th>Quantity</th>
       <th>Item</th>
       <th>Actions</th>
     </tr>
  </thead>
  <tr v-for="(item, index) in itemsList">
    <td>
      <span v-show="!item.inEditMode">{{ item.quantity }}</span>
      <input type="number" v-bind:placeholder="item.quantity" v-show="item.inEditMode" v-model="item.quantity" /> 
    </td>
    <td>
      <span v-show="!item.inEditMode">{{ item.itemName }}</span>
      <input v-bind:placeholder="item.itemName" v-show="item.inEditMode" v-model="item.itemName" />
    </td>
    <td>
      <button type="button" class="btn btn-success" v-show="item.inEditMode" @click="editItemComplete(item)"><i class="fa fa-save"></i> Save  </button>
      <button type="button" class="btn btn-info" v-show="!item.inEditMode" @click="editItem(item)"  ><i class="fa fa-edit"></i> Edit  </button>
      <button type="button" class="btn btn-danger" @click="removeItem(index)"><i class="fa fa-remove"></i> Delete  </button>
    </td>
  </tr>
</table>
  <h4>Add new item</h4>
<div class="row col-md-6">
              <div class="col-md-6 form-group">
                Quantity
                <input type="number" v-model="quantity" class="checkbox" autofocus>
              </div>
              <div class="col-md-6 form-group">
                Name
                <input type="text" v-model="itemName" class="checkbox">
              </div>
  
              <button type="button" @click="addItem" class="btn btn-primary" ><i class="fa fa-plus"></i> Add  </button>
              </div>
</form>
  </template>
  <script>
  var vm = new Vue({
              el: '#shopping-list',
              data: {
                  quantity: '',
                  itemName: '',
                  itemsList: [ 
                    {
                      quantity: 3,
                      itemName: "Apples",
                      inEditMode: false
                    },
                    {
                      quantity: 6,
                      itemName: "Pears",
                      inEditMode: false
                      
                    }],
                  inEditMode: false
              },
              methods: {
                  addItem: function (){
                      var quantityIN = this.quantity;
                      var itemNameIN = this.itemName.trim();
                      this.itemsList.push({ 
                        quantity: quantityIN,
                        itemName: itemNameIN,
                        inEditMode: false
                      });
                      this.clearAll();
                  },
                  clearQuantity: function () {
                      this.quantity = '';
                  },
                  clearItemName: function () {
                      this.itemName = '';
                  },
                  clearAll: function () {
                    this.clearQuantity();
                    this.clearItemName();
                  },
                  removeItem: function (index){
                      this.itemsList.splice(index, 1); //delete 1 element from the array at the position index
                  },
                  editItem:function (item){
                      item.inEditMode = true;
                  },
                  editItemComplete: function (item) {
                      item.inEditMode = false;
                  }
              }
          });
  </script> -->

  <!-- sample   crud -->
  <!-- <script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<template>
  <div><input v-model="prefix" placeholder="Filter prefix"></div>

  <select size="5" v-model="selected">
    <option v-for="name in filteredNames" :key="name">{{ name }}</option>
  </select>

  <label>Name: <input v-model="first"></label>
  <label>Surname: <input v-model="last"></label>

  <div class="buttons">
    <button @click="create">Create</button>
    <button @click="update">Update</button>
    <button @click="del">Delete</button>
  </div>
</template>

<style>
* {
  font-size: inherit;
}

input {
  display: block;
  margin-bottom: 10px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style> -->

<!-- todo using mvc -->
 <script setup>
import {ref,computed,watchEffect} from 'vue'
const STORAGE_KEY='VUE-TODOMVC'
const filters={
  all: (todos) =>todos,
  active: (todos)=>todos.filter((todo)=> !todo.completed),
  completed: (todos)=>todos.filter((todo)=> !todo.active)
}

const todos= ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const visibility=ref('all')
const editedTodo=ref()

const filteredTodos = computed(() => filters[visibility.value](todos.value))
const remaining = computed(() => filters.active(todos.value).length)
window.addEventListener('hashchange', onHashChange)
onHashChange()
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
})
function toggleAll(e) {
  todos.value.forEach((todo) => (todo.completed = e.target.checked))
}

function addTodo(e) {
  const value = e.target.value.trim()
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false
    })
    e.target.value = ''
  }
}
function removeTodo(todo) {
  todos.value.splice(todos.value.indexOf(todo), 1)
}

let beforeEditCache = ''
function editTodo(todo) {
  beforeEditCache = todo.title
  editedTodo.value = todo
}

function cancelEdit(todo) {
  editedTodo.value = null
  todo.title = beforeEditCache
}

function doneEdit(todo) {
  if (editedTodo.value) {
    editedTodo.value = null
    todo.title = todo.title.trim()
    if (!todo.title) removeTodo(todo)
  }
}

function removeCompleted() {
  todos.value = filters.active(todos.value)
}

function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, '')
  if (filters[route]) {
    visibility.value = route
  } else {
    window.location.hash = ''
    visibility.value = 'all'
  }
}
</script>
<template>
   <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input
        class="new-todo"
        autofocus
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      >
    </header>
    <section class="main" v-show="todos.length">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="remaining === 0"
        @change="toggleAll"
      >
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo === editedTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            v-if="todo === editedTodo"
            class="edit"
            type="text"
            v-model="todo.title"
            @vue:mounted="({ el }) => el.focus()"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit(todo)"
          >
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility === 'active' }">Active</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: visibility === 'completed' }">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
  </section>
  </template>
  <style>
  @import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
  </style>