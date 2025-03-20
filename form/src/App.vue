<template>
  <h1>Radio Buttons in Vue</h1>
  <form @submit.prevent="registerAnswer">
    <p>Gender?</p>
    <label>
      <input type="radio" name="name" v-model="inpVal" value="male"> male
    </label>
    <label>
      <input type="radio" name="name" v-model="inpVal" value="female"> female
    </label>
    <label>
      <input type="radio" name="name" v-model="inpVal" value="other"> other
    </label>
        <button type="submit">Submit</button>
  </form>

  <form @submit.prevent="registerAnswer2">
    <p>What kinds of food do you like?</p>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Pizza"> Pizza
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Rice"> Rice
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Fish"> Fish
    </label>
    <label>
      <input type="checkbox" v-model="likeFoods" value="Salad"> Salad
    </label>
    <button type="submit">Submit</button>
  </form>

  <form @submit.prevent="registerAnswer3">
    <label for="country">Choose a country:</label>
    <select  v-model="countrySelected" id="country">
      <option disabled value="">Please select one</option>
      <option>India</option>
      <option>UK</option>
      <option>USA</option>
    </select>
    <br><br>
    <input type="submit" value="Submit">
  </form>

  <form @submit.prevent="registerAnswer4">
    <label for="college">Choose one or more college:</label><br>
    <select  v-model="collegeSelected" id="college" multiple>
      <option>GEC</option>
      <option>LD</option>
      <option>GLS</option>
    </select>
    <button type="submit">Submit</button>
  </form>

  <form @submit.prevent="registerAnswer5">
    <label>How tall are you?<br>
      <input v-model="heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
    </label>
    <button type="submit">Submit</button>
  </form>

  <form @submit.prevent="registerAnswer6">
    <label>Choose a color: 
      <input v-model="colorInp" type="color">
    </label>
    <button type="submit">Submit</button>
  </form>

  <div>
    <h3>Submitted choice:</h3>
    <p id="pAnswer">{{ inpValSubmitted }}</p>
  </div>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer2">{{ inpValSubmitted2 }}</p>
  </div>
<div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer3">{{ inpValSubmitted3 }}</p>
  </div>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer4">{{ inpValSubmitted4 }}</p>
  </div>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer5">{{ inpValSubmitted5 }}</p>
  </div>
  <div>
    <h3>Submitted answer:</h3>
    <p id="pAnswer6">{{ inpValSubmitted6 }}</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      inpVal: '',
      likeFoods: [],
      countrySelected: '',
      collegeSelected: [],
      heightInp: null,
      colorInp: null,
      inpValSubmitted: 'gender not selected',
      inpValSubmitted2: 'food not selected',
      inpValSubmitted3: 'country not selected',
      inpValSubmitted4: 'college not selected',
      inpValSubmitted5: 'height not selected',
      inpValSubmitted6: 'color not selected',

    }
  },
  methods: {
    registerAnswer() {
      if(this.inpVal) {
        this.inpValSubmitted = this.inpVal;
      }
    },
    registerAnswer2() {
      this.inpValSubmitted2 = this.likeFoods;
    },
    registerAnswer3() {
      if(this.countrySelected) {
        this.inpValSubmitted3 = this.countrySelected;
      }},
    registerAnswer4(){
      if(this.collegeSelected) {
        this.inpValSubmitted4 = this.collegeSelected;
      }
    },
    registerAnswer5(){
      if(this.heightInp) {
        this.inpValSubmitted5 = this.heightInp + ' cm';
      }
    },
    registerAnswer6(){
      if(this.colorInp) {
        this.inpValSubmitted6 = this.colorInp;
      }
    }
    }
  }

</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
  }
  button {
    margin: 10px;
  }
  label {
    display: block;
    width: 80px;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
    background-color: rgb(211, 244, 211);
    border-radius: 5px;
  }
  #pAnswer {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer2 {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer3 {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer4 {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer5 {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer6 {
    background-color: lightgreen;
    padding: 5px;
  }
  #pAnswer {
    background-color: lightgreen;
    padding: 5px;
  }
</style>                  