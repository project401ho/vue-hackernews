<template>
  <div>
    <section>
      <UserProfile :info="fetchedItem">
        <div slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{fetchedItem.user}}
          
          </router-link>
        </div>
        <template slot="time">
          {{'Posted ' + fetchedItem.time_ago}}
        </template>

      </UserProfile>


    </section>
    <section>
       <h1>{{ fetchedItem.title }}</h1>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components:{
    UserProfile
  },

  computed:{
    ...mapGetters({
      fetchedItem: "fetchedItem"
    })
  },
  created(){
    const itemId = this.$route.params.id
    this.$store.dispatch("FETCH_ITEM", itemId)
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding:0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding: 5px 8px;
}
.time{
  font-size: 0.7rem;
}
</style>