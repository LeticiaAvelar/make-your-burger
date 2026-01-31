<template>
    <Message :msg="msg" v-show="msg" />
    <div>
        <form id="burger-form" method="POST" @submit="createBurger">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome" />
            </div>

            <div class="input-container">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                </select>
            </div>

            <div class="input-container">
                <label for="carne">Escolha a carne do seu Burger:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione o tipo de carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                </select>
            </div>

            <div id="opcionais-container" class="input-container">
                <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                <div class="checkbox-container" v-for="o in opcionaisdata" :key="o.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="o.tipo" />
                    <span>{{ o.tipo }}</span>
                </div>
            </div>

            <div class="input-container">
                <input class="submit-btn" type="submit" value="Criar meu Burger!" />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Message from './Message.vue' // 

// ------------------
// VARIÁVEIS REATIVAS
// ------------------
const paes = ref([])
const carnes = ref([])
const opcionaisdata = ref([])

const nome = ref('')
const pao = ref('')
const carne = ref('')
const opcionais = ref([])

const msg = ref(null)

// ------------------
// FUNÇÕES
// ------------------
async function getIngredientes() {
    const req = await fetch('http://localhost:3000/ingredientes')
    const data = await req.json()

    paes.value = data.paes
    carnes.value = data.carnes
    opcionaisdata.value = data.opcionais
}

async function createBurger(e) {
    e.preventDefault()

    const data = {
        nome: nome.value,
        carne: carne.value,
        pao: pao.value,
        opcionais: Array.from(opcionais.value),
        status: 'Solicitado'
    }

    const dataJson = JSON.stringify(data)

    const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
    })

    const res = await req.json()
    console.log(res)
    
    // colocar uma mensagem no sistema
    msg.value = `Pedido n° ${res.id} realizado com sucesso!`;

    // limpar mensagem
    setTimeout(() => (msg.value = ''), 5000)

    // limpar campos
    nome.value = ''
    carne.value = ''
    pao.value = ''
    opcionais.value = []
}

// ------------------
// CICLO DE VIDA
// ------------------
onMounted(() => {
    getIngredientes()
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