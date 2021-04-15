<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition> 
    
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar,
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