<template>
  <div id="app">
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

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus: false,
    }
  },
  methods:{
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