<template>
  <div>
    <UserProfile :info="fetchedUser"></UserProfile>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserProfile from '../components/UserProfile.vue'
export default {
  components:{
    UserProfile,
  },
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