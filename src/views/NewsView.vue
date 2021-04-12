<template>
    <div>
        <h1>News</h1>
        <div v-bind:key="user.title" v-for="user in users">{{user.title}}</div>
    </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'

export default {
    data(){
        return {
            users: []
        }
    },
    created(){
        fetchNewsList()
        .then(response => this.users = response.data)
        .catch(error => console.log(error))
    }

}
</script>

<style>

</style>