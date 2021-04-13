<template>
  <div>
      <h1>User</h1>
      <p>name: {{ this.$store.state.user.id }}</p>
      <p>karma: {{ fetchedUser.karma }}</p>
      <p>created: {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters({
      fetchedUser:'fetchedUser'
    })
    // userInfo(){
    //   return this.$store.state.user;
    // }
  },
  created(){
    
    const userName = this.$route.params.id
    this.$store.dispatch("FETCH_USER", userName)
  }
}
</script>

<style>

</style>