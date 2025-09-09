<script setup>
//import { add_list } from './Task_form.vue'
    //const list = ref('')
const get_storage= JSON.parse(localStorage.getItem("list_tache"))

const delete_tache=()=>{

}

</script>

<template>
    <h1>Liste des taches</h1>
    <ul>
        <li v-for="tache in get_storage">{{tache.tache}} </li>
    </ul>
</template>
<style scoped>
</style>