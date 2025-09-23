<script setup>
import { ref } from 'vue'
import Typography from '@/components/Typography.vue'
const get_storage = ref(JSON.parse(localStorage.getItem('list_tache') || []))

const supp_tache = (id) => {
  get_storage.value = get_storage.value.filter((t) => t.id !== id)
  localStorage.setItem('list_tache', JSON.stringify(get_storage.value))
  console.log('je suis dans delete')
}
const tache_termine = (id) => {
  const tache = get_storage.value.find((t) => t.id === id)
  const newValue = get_storage.value.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        terminer: !t.terminer,
      }
    }
    return t
  })
  console.log('newV', newValue)

    if (tache) {
    const tache = get_storage.value.find((t) => t.id === id)

    tache.terminer = !tache.terminer
     localStorage.setItem('list_tache', JSON.stringify(newValue))
    get_storage.value = newValue.toSorted((a, b) => (a.terminer > b.terminer ? 1 : -1))
    //console.log('Tâche mise à jour :', tache.terminer) 
    } 
}
</script>

<template>
  <div class="container">
    <Typography tag="h1" text="Liste des taches" />
    <div v-if="get_storage.length === 0">Aucune tache disponible</div>
    <ol >
      <li v-for="(tache) in get_storage" :class="{ terminer: tache.terminer == true }" :key="tache.id">
        <input
          type="checkbox"
          @click="tache_termine(tache.id)"
          :checked="tache.terminer === true ? true : false"
          :id="tache.tache"
        />
        <label :for="tache.tache">
          {{ tache.tache + ' '+ tache.terminer }}
        </label>
       <button style="margin-left: 10px" @click="supp_tache(tache.id)">Supprimer une tache</button>
      </li>
    </ol>
    <p>Il reste {{ get_storage.filter((t)=> !t.terminer).length }} tache à terminer</p>
   <progress :value="get_storage.filter((t)=> t.terminer).length" :max="get_storage.length" ></progress>
  </div>
  <Router-link to="/" style="margin-left: 10px">retour pour ajouter une tache </Router-link>
</template>
<style>
input{
  width: 30px;
  height: 30px;
  border-radius: 50%;
 
}
li{
  line-height: 20px;
  margin: 20px;
}
a {
  text-decoration: none;
}
.terminer {
  opacity: 0.5;
  text-decoration: line-through;
  transition: all 1s ease;
}
progress{
  width: 100%;
}
.container {
  max-width: 1074px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
