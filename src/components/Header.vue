<template>
   <header id="header">
      <h1 id="logo" @click="changeLogo">{{ logo }}</h1>
   </header>
</template>

<script>
import { bus } from '../main';

export default {
   props:{
      logo:{
         type: String
      }
   },
   data(){
      return {
         // logo: 'Logo Vue'
      }
   },
   methods: {
      changeLogo: function(){
         // this.$emit('changeLogo', 'Logo Changed')
         this.logo = 'Logo Changed';
         bus.$emit('logoChanged', 'Logo Changed');
      }
   }
}
</script>

<style scoped>
#logo{
   color: #e28080;
   text-align:center;
   text-transform: uppercase;   
}
</style>