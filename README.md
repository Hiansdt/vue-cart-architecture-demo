# 🛒 Cart Architecture Playground

Este projeto é uma exploração prática de **conceitos de arquitetura frontend** aplicados em um app Vue 3, com foco em entender:

- Design Orientado a Domínio (DDD)
- Separação clara de responsabilidades
- Arquitetura em camadas (controller, service, repository, store, lógica pura)
- Princípios da programação funcional (funções puras, sem efeitos colaterais)
- Estrutura de projeto escalável e sustentável

---

## 🧱 Stack

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- Vite
- LocalStorage (simulando persistência por enquanto)

---

## 📁 Estrutura do Projeto

Este app é organizado por **domínio**, com cada feature encapsulada na sua própria pasta:

/src  
└── /domains  
  └── /cart  
    ├── /components     # Componentes de UI (CartItem, CartList, etc.)  
    ├── /pages          # CartPage.vue  
    ├── /controller     # Entrada da lógica vinda da interface  
    ├── /service        # Coordena lógica e chamadas ao repositório  
    ├── /store          # Estado reativo com Pinia  
    ├── /repository     # Camada de dados (localStorage ou API)  
    ├── /logic          # Funções puras (calculateTotal, etc.)  
    └── /types          # Tipagens, se necessário  

/shared  
 ├── /components          # Componentes reutilizáveis (Button, Layout, etc.)  
 ├── /logic               # Utilitários como formatadores de moeda  
 └── /infra               # Axios, helpers de storage, etc.

---

## 🎯 Objetivos

- Construir um sistema de carrinho simples com adicionar/remover/total
- Entender **onde cada parte da lógica deve estar**
- Praticar código limpo, testável e previsível
- Explorar como essa arquitetura pode escalar com mais features/domínios

---

## 💡 Por que esse projeto existe?

Esse repositório surgiu de um momento *"click"* — percebendo o quanto o código frontend pode se tornar caótico quando as responsabilidades ficam misturadas. A ideia aqui é experimentar, clarear conceitos e documentar padrões de arquitetura frontend escalável.

---

## 🚀 Rodando localmente

npm install  
npm run dev

---

## 👀 Em progresso

Este repositório é um playground em constante evolução — não espere perfeição, espere aprendizado.
