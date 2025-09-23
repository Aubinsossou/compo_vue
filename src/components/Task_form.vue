<script setup>
import Typography from '@/components/Typography.vue'
import { ref } from 'vue'

const list = ref('')
const list_tache = ref([])
const terminer = ref(false)
const list_of_tach=ref({})
const get_storage = JSON.parse(localStorage.getItem('list_tache'))
const get_tache = () => {
  if (!get_storage) {
    localStorage.setItem('list_tache', JSON.stringify([]))
  }
  return JSON.parse(localStorage.getItem('list_tache'))
}

const add_list = () => {
  if (list.value === '') {
    alert('ecrivez une tache a ajouter')
  } else {
     list_of_tach.value = {
      id: list_tache.value.length + 1,
      tache: list.value,
      terminer: terminer,
    }
    list_tache.value.push(list_of_tach.value)
    //console.log(list_tache.value)
    localStorage.setItem('list_tache', JSON.stringify(list_tache.value))
    list.value = ''
  }
}            
get_tache()
</script>

<template>
  <div class="auth">
    <form class="form auth-form">
      <Typography tag="h1" text="Form TO-DO-LIST" />
      <div class="form_item">
        <label for="list">Tache à ajouter</label>
        <input v-model="list" type="text" name="list" />
      </div>

      <div class="form_item">
        <button
          @click.prevent="add_list()"
          :disabled="list.length === 0"
          :class="{ disable: list.length === 0 }"
        >
          Ajouter une tache
        </button>
      </div>
    </form>
    <Router-link to="tasklist" style="margin-left: 10px">Voir la liste de taches </Router-link>
  </div>
</template>
<style scoped>
input {
  width: 100%;
  height: 40px;
  border-radius: 6px;
  padding-left: 10px;
  border: none;
}

input:focus {
  outline: none;
}

/* login */
.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-form {
  width: 500px;
  background-color: #eee;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #0000004e;
}
.auth-form h2 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 2rem;
}
.form_item {
  margin-bottom: 20px;
}
.form_item label {
  margin-bottom: 3px;
}
.form_item:last-child {
  text-align: center;
  margin-top: 30px;
}
.form_item:last-child button {
  padding: 12px;
  background-color: blue;
  color: #fff;
  border: transparent;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.form_item:last-child button:hover {
  background-color: rgba(16, 16, 150, 0.861);
}
.disable {
  background-color: rgb(108, 112, 236) !important;
  color: white;
  cursor: default !important;
}
</style>
