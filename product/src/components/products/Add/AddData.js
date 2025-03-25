export default {  
  props: {
    showModal: Boolean,
  },
  data() {
    return {
      product:{
        title:'',
        price:'',
        image:'',
        category:'',
      },
    };
  },
  methods:{
handleFileUpload(event){
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () =>{
   this.product.image = reader.result;
    console.log(this.product.image);
     };
    reader.readAsDataURL(file);
  }
},

submitProduct(){
  this.$emit('add-product', {...this.product});
  this.product={
  title:'',
  price:'',
  image:'',
  category:'',
  };
  this.$emit('close');
    },
  },
};