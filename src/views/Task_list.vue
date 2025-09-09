<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'
import { useRouter } from 'vue-router'

const router=useRouter()

//import { add_list } from './Task_form.vue'
    //const list = ref('')
const get_storage= ref(JSON.parse(localStorage.getItem("list_tache")))

const supp_tache=(id)=>{
     get_storage.value=get_storage.value.filter(t=>t.id !== id)
    localStorage.setItem("list_tache",JSON.stringify(get_storage.value))
    
}


</script>

<template>
    <Typography tag="h2" text="Liste des taches"/>
    <div v-if="get_storage.length===0">Aucune tache disponible</div>
    <ul>
        <li v-for="tache in get_storage">{{tache.tache}} <Router-link to="" style="margin-left: 10px;" @click="supp_tache(tache.id)">Supprimer une tache</Router-link></li>
    </ul>
</template>
<style scoped>
</style>