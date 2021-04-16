<template>
  <div>
        <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <div>
              <!-- User name: {{ info.id }} -->
              <slot name= "username">

              </slot>                    
            </div>  


            <div class="time">
              <!-- Time: {{ info.created }} -->
              <slot name="time">
                
              </slot>    
              <slot name="karma">
                
              </slot>                        
            </div>

        </div>
      </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
    props:{
        info: Object
    },
    computed:{
        ...mapGetters({
            fetchedUser:'fetchedUser'
        })
    },
    created(){
        const userName = this.$route.params.id
        this.$store.dispatch("FETCH_USER", userName)
    }
}
</script>

<style>
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