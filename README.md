# 🍔 Make Your Burger

Aplicação web para criação e gerenciamento de pedidos de hambúrgueres, desenvolvida com **Vue 3**.  
O projeto foi inspirado e baseado no curso de Vue do **Matheus Battisti (Hora de Codar)**, porém com um desafio adicional: **converter toda a base originalmente em Vue 3 Option API para Vue 3 Composition API**, utilizando a *Composition API* e mantendo o código atualizado, funcional e organizado.

🔗 **Aplicação online:**  
https://leticiaavelar.github.io/make-your-burger/

ATENÇÃO: Este projeto utiliza dados simulados para criar uma simulação de backend, com foco na lógica de frontend e na interação do usuário.

---

## 📌 Sobre o projeto

O **Make Your Burger** permite que o usuário:

- Crie pedidos de hambúrguer escolhendo:
  - Cliente
  - Tipo de pão
  - Tipo de carne
  - Ingredientes opcionais
- Visualize todos os pedidos em um **Dashboard**
- Atualize o **status do pedido** (Solicitado, Em produção, Finalizado)
- **Cancele (delete)** pedidos
- Receba **mensagens de feedback** ao criar, atualizar ou remover pedidos

Toda a persistência de dados é feita via **json-server**, simulando uma API REST.

---

## 🧠 Desafio técnico

Apesar do curso original utilizar **Vue 3 (Options API)**, este projeto foi inteiramente adaptado para:

- **Vue 3 - Composition API**
- Uso de `script setup`
- `ref`, `onMounted`
- Melhor separação de responsabilidades
- Código mais moderno e alinhado com boas práticas atuais

Ou seja: não é apenas uma cópia do curso, mas uma **evolução técnica do conteúdo proposto**.

---

## 🛠️ Tecnologias utilizadas

- **Vue 3**
- **Vue Router**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **json-server** (backend fake)
- **Fetch API**

---

## ▶️ Como executar o projeto localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/LeticiaAvelar/make-your-burger.git
```
```
cd make-your-burger
```

2️⃣ Instalar as dependências
```
npm install
```
3️⃣ Rodar o backend (json-server)
```
npm run backend
```
O backend ficará disponível em:
```
http://localhost:3000
```
4️⃣ Rodar o frontend
```
npm run serve
```
A aplicação estará disponível em:
```
http://localhost:8080
```
5️⃣ Build para produção (opcional)
```
npm run build
```
---

📂 Estrutura geral do projeto

src/components

- Navbar

- Footer

- Message

src/views

- Home

- Dashboard (CRUD dos pedidos)

db.json

- Base de dados usada pelo json-server

---

📚 Referência

Curso base utilizado como inspiração:

[Playlist Vue.js – Matheus Battisti](https://www.youtube.com/watch?v=wsAQQioPIJs&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL)

---

✨ Considerações finais

Este projeto foi essencial para:

- Consolidar conceitos de Vue

- Entender na prática as diferenças entre Option API e Composition API

- Trabalhar com CRUD completo

- Simular consumo de API REST

- Organizar código de forma mais profissional

Qualquer feedback é bem-vindo 🚀

Feito com dedicação por Letícia Avelar 💛