<template>
    <div>
        <ListItem></ListItem>

    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
    components:{
        ListItem,
    },
    mixins: [ListMixin],
    // mounted(){
    //     bus.$emit("end:spinner")
    // },
}
</script>

<style scoped>

</style>