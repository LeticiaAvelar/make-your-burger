<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg" />
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="burger-table-rows" v-for="burger in burgers" :key="burger.id">
            <div class="burger-table-row">
                <div class="order-number">{{ burger.id}}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carne }}</div>
                <div>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="updateBurger($event, burger.id)">
                        <option value="">Selecione</option>
                        <option v-for="status in status" :key="status.id" :value="status.tipo" :selected="burger.status == status.tipo">{{ status.tipo }}</option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Message from './Message.vue'

const burgers = ref([]) // Lista de pedidos // antes era null, agora inicializado como array vazio
const burger_id = ref(null) // ID do pedido selecionado // null inicial, pode ser atualizado quando selecionar um pedido
const status = ref([]) // Status dos pedidos // array vazio para poder manipular depois

// null → nenhum valor selecionado ainda (1 item)
// [] → lista vazia (múltiplos itens)

const msg = ref(null)

async function getPedidos() {
    const req = await fetch('http://localhost:3000/burgers');

    const data = await req.json();

    burgers.value = data; // data é o array retornado pelo fetch

    // resgatar os status
    getStatus();
}

async function getStatus() {
    const req = await fetch('http://localhost:3000/status')

    const data = await req.json();

    status.value = data;
}

async function deleteBurger(id) {
    const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE"
    });

    const res = await req.json();

    // colocar uma mensagem no sistema
    msg.value = `Pedido N° ${res.id} removido com sucesso!`;

    // limpar mensagem
    setTimeout(() => (msg.value = ''), 5000)

    getPedidos();

}

async function updateBurger(e, id) {
    const option = e.target.value;

    const dataJson = JSON.stringify({ status: option });

    const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson
    })

    const res = await req.json();

    // colocar uma mensagem no sistema
    msg.value = `Pedido N° ${res.id} foi atualizado para ${res.status}!`;

    // limpar mensagem
    setTimeout(() => (msg.value = ''), 5000)
}

onMounted(() => {
    getPedidos()
})
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

.burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
    width: 5%;
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