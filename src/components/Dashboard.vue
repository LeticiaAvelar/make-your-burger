<template>
  <div id="burger-table">
    <Message :msg="msg" v-show="msg" />
    
    <!-- Cabeçalho da tabela -->
    <div id="burger-table-heading">
      <div class="order-id">#:</div>
      <div>Cliente:</div>
      <div>Pão:</div>
      <div>Carne:</div>
      <div>Opcionais:</div>
      <div>Ações:</div>
    </div>

    <!-- Linhas de pedidos -->
    <div id="burger-table-rows" v-for="burger in burgers" :key="burger.id">
      <div class="burger-table-row">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
          </ul>
        </div>
        <div>
          <select class="status" @change="updateBurger($event, burger.id)">
            <option value="">Selecione</option>
            <option v-for="s in statusList" :key="s.id" :value="s.tipo" :selected="burger.status === s.tipo">
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Message from './Message.vue'

// -------------------
// Mock global
// -------------------
import { burgers, status as statusList } from '@/mock/burgers.js'

const msg = ref(null)

// -------------------
// Funções
// -------------------
function updateBurger(e, id) {
  const novoStatus = e.target.value
  const burger = burgers.value.find(b => b.id === id)
  if (burger) {
    burger.status = novoStatus
    msg.value = `Pedido N° ${burger.id} atualizado para "${novoStatus}"!`
    setTimeout(() => (msg.value = ''), 5000)
  }
}

function deleteBurger(id) {
  burgers.value = burgers.value.filter(b => b.id !== id)
  msg.value = `Pedido N° ${id} removido com sucesso!`
  setTimeout(() => (msg.value = ''), 5000)
}
</script>

<style scoped>
#burger-table {
  width: 100%;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
