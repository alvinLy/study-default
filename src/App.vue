<template>
   <div class="container">
      <!-- <app-header v-bind:logo="logo" v-on:changeLogo="updateLogo($event)" />
      <app-main v-bind:arr="arr" />
      <app-footer v-bind:logo="logo" /> -->

      <!-- ......................................................................... -->

      <!-- <FormHelper>
         <div slot="row-email">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" placeholder="Email" required>
         </div>

         <div slot="row-password">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password">            
         </div>

         <div slot="row-input">
            <label for="exampleInputFile">File input</label>
            <input type="file" >
            <p class="help-block">Example block-level help text here.</p>
         </div>

         <div slot="checkbox">
            <label>
               <input type="checkbox"> Check me out
            </label>
         </div>
      </FormHelper> -->

      <!-- ......................................................................... -->

      <!-- <keep-alive>
         <component v-bind:is="component" />
      </keep-alive>

      <button class="btn btn-primary" @click="component = 'FormTwo'">Button Two</button>
      <button class="btn btn-primary" @click="component = 'FormOne'">Button One</button> -->

      <!-- ......................................................................... -->

      <!-- <addBlog /> -->

      <!-- ......................................................................... -->

      <showBlog />

      <!-- ......................................................................... -->
   </div>
</template>

<script>
import './assets/css/bootstrap.min.css'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Main from './components/Main.vue'
// import FormHelper from './components/formHelper.vue'
// import FormOne from './components/FormOne.vue'
// import FormTwo from './components/FormTwo.vue'
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'

export default {
   components: {
      // 'app-header': Header,
      // 'app-footer': Footer,
      // 'app-main': Main

      // FormHelper

      // FormOne,
      // FormTwo

      addBlog,
      showBlog
   },
   data(){
      return{         
         // arr: [
         //    {name: 'Anny', position: 'Staff', show: false},
         //    {name: 'Amy', position: 'Leader', show: false},
         //    {name: 'Jenny', position: 'Acountant', show: false},
         //    {name: 'Jame', position: 'Director', show: false},
         //    {name: 'Joke', position: 'IT', show: false},
         //    {name: 'Vicky', position: 'Manager', show: false}
         // ],

         // logo: 'Logo Vue'

         // title: 'Title Slot'

         // component:'FormOne'
      }
   },
   methods: {
      // updateLogo: function(updateLogo) {
      //    this.logo = updateLogo;
      // }
   }
}
</script>