<template>
  <div>
    <Message :msg="msg" v-show="msg" />

    <form id="burger-form" @submit="createBurger">
      <!-- Nome do cliente -->
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input
          type="text"
          id="nome"
          v-model="nome"
          placeholder="Digite o seu nome"
        />
      </div>

      <!-- Pão -->
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="p in paes" :key="p.id" :value="p.tipo">{{ p.tipo }}</option>
        </select>
      </div>

      <!-- Carne -->
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select id="carne" v-model="carne">
          <option value="">Selecione a carne</option>
          <option v-for="c in carnes" :key="c.id" :value="c.tipo">{{ c.tipo }}</option>
        </select>
      </div>

      <!-- Opcionais -->
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title">Opcionais:</label>
        <div class="checkbox-container" v-for="o in opcionaisdata" :key="o.id">
          <input type="checkbox" :value="o.tipo" v-model="opcionais" />
          <span>{{ o.tipo }}</span>
        </div>
      </div>

      <!-- Botão -->
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Message from './Message.vue'

// --------------------
// Mock
// --------------------
import { burgers } from '@/mock/burgers.js'

// --------------------
// Reatividade
// --------------------
const nome = ref('')
const pao = ref('')
const carne = ref('')
const opcionais = ref([])
const msg = ref(null)

const paes = ref([])
const carnes = ref([])
const opcionaisdata = ref([])

// --------------------
// Funções
// --------------------
function createBurger(e) {
  e.preventDefault()

  // novo pedido
  const newBurger = {
    id: burgers.value.length + 1,
    nome: nome.value,
    pao: pao.value,
    carne: carne.value,
    opcionais: Array.from(opcionais.value),
    status: 'Solicitado'
  }

  // adiciona ao array mock
  burgers.value.push(newBurger)

  // mensagem de sucesso
  msg.value = `Pedido N° ${newBurger.id} realizado com sucesso!`
  setTimeout(() => (msg.value = ''), 5000)

  // limpar campos
  nome.value = ''
  pao.value = ''
  carne.value = ''
  opcionais.value = []
}

// --------------------
// Ciclo de vida
// --------------------
onMounted(() => {
  // dados de mock de ingredientes
  paes.value = [
    { id: 1, tipo: 'Italiano Branco' },
    { id: 2, tipo: '3 Queijos' },
    { id: 2, tipo: 'Parmesão e Orégano' },
    { id: 3, tipo: 'Integral' }
  ]
  carnes.value = [
    { id: 1, tipo: 'Maminha' },
    { id: 2, tipo: 'Alcatra' },
    { id: 3, tipo: 'Picanha' },
    { id: 3, tipo: 'Veggie Burger' }
  ]
  opcionaisdata.value = [
    { id: 1, tipo: 'Cheddar' },
    { id: 2, tipo: 'Salame' },
    { id: 3, tipo: 'Tomate' },
    { id: 4, tipo: 'Cebola Roxa' },
    { id: 4, tipo: 'Pepino' }
  ]
})
</script>

<style scoped>
#burger-form {
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
}

input,
select {
    padding: 5px 10px;
    width: 100%;
}

#opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
}

#opcionais-title {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
}

.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn {
    background: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
}

.submit-btn:hover {
    background: #FCBA03;
    color: #222;
    border: 2px solid #FCBA03;
}
</style>