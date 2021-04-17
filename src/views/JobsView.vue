<template>
    <div>
        <!-- <div v-bind:key="job.title" v-for="job in this.$store.state.jobs">{{job.title}}</div> -->
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListMixin from '../mixins/ListMixin.js'
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'

export default {
    components:{
        ListItem
    },
    mixins: [ListMixin],
    // mounted(){
    //     bus.$emit("end:spinner")
    // }
}
</script>

<style>

</style>