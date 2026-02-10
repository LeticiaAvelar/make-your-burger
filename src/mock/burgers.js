// src/mock/burgers.js
import { ref } from 'vue'

export const burgers = ref([]) // todos os pedidos ficam aqui

export const status = ref([
  { id: 1, tipo: 'Solicitado' },
  { id: 2, tipo: 'Em preparo' },
  { id: 3, tipo: 'Pronto' },
  { id: 4, tipo: 'Entregue' },
])
