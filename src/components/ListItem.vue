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
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            name : this.$route.name
        }
    },

    computed:{
        listItems(){            
            if(this.name === "news"){
                return this.$store.state.news
            }
            else if(this.name === "ask"){
                return this.$store.state.ask
            }
            return null;
        },
        ...mapGetters({
            fetchedNews : "fetchedNews",
            fechedAsk: 'fechedAsk',
        })
    },
    created(){
        console.log(this.name);
        let dispatchflag = "123";
        if(this.name === "news"){
            dispatchflag="FETCH_NEWS";
        }
        else if(this.name === "ask"){
            dispatchflag="FETCH_ASK";
        }
        console.log(dispatchflag);
        this.$store.dispatch(dispatchflag);

    }
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