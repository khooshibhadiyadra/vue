<template>
    <p >this is comp1</p>
    <p id="prResult">{{ text }}</p>
    <p ref="pEl" id="pEl">We try to access this text from the 'beforeMount' hook.</p>
    <form @submit.prevent>
		<label>
			<p>
				Name: <br>
				<input type="text" ref="inpName">
			</p>
		</label>
		<label>
			<p>
				Age: <br>
				<input type="number">
			</p>
		</label>
		<button>Submit</button>
	</form>
    <p>this form only for mount not actually stores</p>
    <p>When this component is removed from the DOM tree, the unmounted() function is called and we can add code to that function. In this example we create an alert popup box when this component is removed.</p>
    <button @click="generateError">Generate Error</button>

    <p>This is a component.</p>
  <button @click="counter++">Add One</button>
  <p>{{ counter }}</p>
  <p>Below is a log with every time the 'mounted' or 'activated' hooks run.</p>
  <ol ref="olEl"></ol>
  <p>You can also see when these hooks run in the console.</p>
    </template>

<script>
export default{
    methods: {
    generateError() {
      this.$refs.objEl.innerHTML = "hi";
    },
    logHook(hookName) {
      console.log(hookName);
      const liEl = document.createElement("li");
      liEl.innerHTML = hookName;
      this.$refs.olEl.appendChild(liEl);
    }
  },
    data(){
        return{
            text:'...',
            counter: 0
        }
    },
beforeCreate(){
    this.text="initial text";
    console.log("beforecreate:component is not created yet");
},
created(){
    this.text="created";
    console.log("created:it is created");
},
beforeMount(){
    console.log("beforemount:calls before executing html component in DOM");
    // this.$refs.pEl.innerHTML = "Hello World!";
    
},
mounted(){
    // this.$refs.inpName.focus();
    console.log("mounted");
    const liEl = document.createElement("li");
    liEl.innerHTML = "mounted";
    this.$refs.olEl.appendChild(liEl);
},
beforeUpdate(){
    console.log("The component is updated!");
},
beforeUnmount(){
        // alert("beforeUnmount:before remove data from DOM"+this.$refs.pEl.innerHTML);
        this.logHook("unmounted");
},
unmounted(){
    alert("The component is removed (unmounted)!");
},
// renderTracked(evt) {
//     console.log("renderTracked: ",evt);
//     alert("renderTracked");
//   },
  renderTriggered(evt) {
    console.log("renderTriggered: ",evt)
    alert("renderTriggered");
  },
  activated() {
    // console.log("activated");
    // const liEl = document.createElement("li");
    // liEl.innerHTML = "activated";
    // this.$refs.olEl.appendChild(liEl);

    this.logHook("activated");
  },
  deactivated() {
    this.logHook("deactivated");
  },
}
</script>

<style>
  li {
    background-color: lightcoral;
    width: 5em;
  }
</style>                  
