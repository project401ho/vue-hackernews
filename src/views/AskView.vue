<template>
    <div>
        <h1>Ask</h1>
        <p v-bind:key="item.title" v-for="item in fechedAsk">
            <a :href="item.url">{{ item.title }} </a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    created(){
        this.$store.dispatch("FETCH_ASK");
    },
    computed:{
        ...mapGetters({
            fechedAsk: 'fechedAsk'
        })
    }
}
</script>

<style>

</style>