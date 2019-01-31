<template>
   <main id="contents">
      <ul>
         <li v-for="i in arr" 
             @click="i.show =!i.show">
            <h4>{{ i.name }}</h4>
            <p v-show="i.show">{{ i.position }}</p>
         </li>
      </ul>

      <button @click="deleteBox">Button</button>
   </main>
</template>

<script>
export default {
   props: {
      arr: {
         type: Array,
         require: true
      }
   },
   data(){
      return {

      }
   },
   methods: {
      deleteBox: function(){
         this.arr.pop();
      }
   },
   beforeCreate(){
      console.log('beforeCreate');
   },
   created(){
      console.log('created');
   },
   beforeMount(){
      console.log('beforeMount');      
   },
   mounted(){
      console.log('mounted');
   },
   beforeUpdate(){
      console.log('beforeUpdate')
   },
   updated(){
      console.log('updated')
   }
}
</script>

<style scoped>
#contents{
   width:1200px;
   margin:auto;
   text-align:center
}
#contents ul{
   display:flex;
   padding:0;
   margin:0;
   list-style-type: none;
   padding:0 50px;
   flex-wrap: wrap;
}
#contents ul li{
   width: 33.333%;
   padding:10px;
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
#contents ul li:nth-last-of-type(n+4){
   border-bottom:1px solid #333  
}
#contents ul li h4{
   font-size:20px;
}
</style>