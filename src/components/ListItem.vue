<template>
  <div>
      <h1 class="title">{{this.name}}</h1>
        <ul>
            <li class="post" v-for="item in listItems" :key=item.title>
                <div class="points">
                    {{ item.points }}
                </div>
                <div class="news-title">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </template>
                    <template v-else>
                        <router-link :to="`item/${item.id}`">                        
                            {{ item.title }}
                        </router-link>
                    </template>
                    
                    <small class="user-link">
                        {{item.time_ago}} 
                        by 
                        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                    </small>
                </div>                
            </li>
        </ul>
  </div>
</template>

<script>

export default {
    data(){
        return{
            name : this.$route.name
        }
    },

    computed:{
        listItems(){            
            return this.$store.state.list;
        },
    },

}
</script>

<style scoped>
.news-title{
    margin: 0;
}
.user-link{
    color: #2b855c;
}
ul{
    padding:0;
}
.title{
    border-bottom: 2px solid #2b855c;
}
.points{
    width: 150px;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#2b855c
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;

}
</style>