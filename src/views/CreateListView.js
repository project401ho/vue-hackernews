import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function createListVie(name){

    return{
        // reusing components options
        name: name,
        created(){
            bus.$emit("start:spinner");
            setTimeout(() => {
                this.$store.dispatch("FETCH_LIST",this.$route.name)
                .then(()=>{
                    console.log('fetched');
                    bus.$emit("end:spinner")
                })
                .catch(error => console.log(error));
            }, 3000);
        },
        render(createElement){
            return createElement(ListView)
        }
    }
}