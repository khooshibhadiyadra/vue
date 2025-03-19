<!-- <script>

</script>

<template>
 <h1>Food</h1>
  <p>The user can now change the favorite status of the food items with the use of a new data property initialized by the 'is-favorite' prop value.</p>
  <div id="wrapper">
    <food-item 
      food-name="Apples" 
      food-desc="Apples are a type of fruit that grow on trees."
      v-bind:is-favorite="true"/>
    <food-item 
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false"/>
    <food-item 
      food-name="Rice"
      food-desc="Rice is a type of grain that people like to eat."
      v-bind:is-favorite="false"/>
  </div>
</template>

<style  >
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  } 
</style> -->


<template>
<h1>lifecycle</h1>
<button @click="this.activeComp = !this.activeComp">add/remove</button>
<div>
  <comp-one v-if="activeComp"></comp-one>
</div>
<div>{{ text }}</div>
<!-- <div> -->
    <!-- <comp-one></comp-one> -->
  <!-- </div> -->
  <KeepAlive>
      <comp-one v-if="activeComp"></comp-one>
    </KeepAlive>
</template>

<style>
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
#pResult {
  background-color: lightcoral;
  display: inline-block;
}
#pEl {
  background-color: lightcoral;
  display: inline-block;
}
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}

</style>

<script>
export default{
  data(){
    return {
      activeComp:false,
      text:"hello,"
    }
  },
  computed: {
    btnText() {
      if(this.activeComp) {
        return 'Remove component'
      }
      else {
        return 'Add component'
      }
    },
  updated(){
    this.text +="hi,"
  },
  errorCaptured() {
    alert("An error occurred");
  },
  btnText() {
      if(this.activeComp) {
        return 'Remove component'
      }
      else {
        return 'Add component'
      }
    }
  
}}
</script>