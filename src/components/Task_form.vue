<script setup>
import Typography from '@/components/Typography.vue'

import { ref } from 'vue'

const list = ref('')
const list_tache = ref([])

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
    const list_of_tach = {
      id: list_tache.value.length + 1,
      tache: list.value,
    }
    list_tache.value.push(list_of_tach)
    console.log(list_tache.value)
    localStorage.setItem('list_tache', JSON.stringify(list_tache.value))
    list.value = ''
  }
}
get_tache()
</script>

<template>
  <div class="auth">
    <form class="form auth-form">
      <Typography tag="h2" text="Form TO-DO-LIST" />
      <div class="form_item">
        <label for="list">Tache à ajouter</label>
        <input v-model="list" type="text" name="list" />
      </div>

      <div class="form_item">
        <button @click.prevent="add_list()">Ajouter une tache</button>
      </div>
    </form>
  </div>

  <!-- <ul>
    <li v-for="tache in list_tache">{{tache.tache}}</li>
  </ul> -->
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
</style>
