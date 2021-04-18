<template>
  <div id="app">
    <!-- <div class="async_practice">
      <button @click="loginUser">login</button>
      <li v-for="item in items" :key=item >{{item}}</li>
    </div> -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition> 
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'
// import handleException from './utils/handler.js'
// import axios from 'axios';

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus: false,
      items: [],
    }
  },
  methods:{
    //async 연습
    // async loginUser(){
    //   try {
    //     var response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    //       if(response.data.id === 1){
    //         console.log()
    //         var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //         this.items = list.data;
    //       }
    //   } catch (error) {
    //     handleException(error)
    //     console.log(error);
    //   }
      
    // },
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', () => this.startSpinner())
    bus.$on('end:spinner', () => this.endSpinner())
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
a{
    text-decoration: none;
    color:black;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  color: #2b855c;
  background-color: #75e7b4;
}
  .body{
    margin: 0px;
  }
  .page-enter-active {
    transition: opacity .5s;
  }
  .page-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>