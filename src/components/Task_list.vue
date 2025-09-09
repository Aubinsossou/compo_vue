<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'


const get_storage = ref(JSON.parse(localStorage.getItem('list_tache')))

const supp_tache = (id) => {
  get_storage.value = get_storage.value.filter((t) => t.id !== id)
  localStorage.setItem('list_tache', JSON.stringify(get_storage.value))
  console.log("je suis dans delete")
}
const tache_termine = (id)=>{
  const souligner = ref(get_storage.value.filter((t) => t.id === id))
  
  //souligner.value.terminer.value=true
  //console.log('souligner.value: ', souligner.value[0].terminer=true);
  //localStorage.setItem('list_tache', JSON.stringify(souligner.value))

  console.log(id)
}
</script>

<template>
  <Typography tag="h2" text="Liste des taches" />
  <div v-if="get_storage.length === 0">Aucune tache disponible</div>
  <ol>
    <li v-for="tache in get_storage" >
    <input type="checkbox"  @click="tache_termine(tache.id)" >
      {{ tache.tache }}
      <Router-link to="" style="margin-left: 10px" @click="supp_tache(tache.id)"
        >Supprimer une tache</Router-link
      >
    </li>
  </ol>
  <p>Il reste {{ get_storage.length }} tache</p>
</template>
<style scoped>
  .terminer{
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>
