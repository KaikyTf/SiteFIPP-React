# ⚛️ SiteFIPP-React: Website Institucional

Este repositório contém o código-fonte de um website institucional desenvolvido com **React** e **TypeScript**.

O projeto foi criado como trabalho prático durante o curso de Introdução ao React no **INFOESTE 2024**.

---

## 🎯 Objetivo do Projeto

O objetivo principal foi aplicar os conceitos fundamentais do React (como componentes funcionais, props e estado) para construir um site moderno, utilizando uma *stack* de desenvolvimento atualizada com ênfase em tipagem para maior segurança e escalabilidade.

---

## ⚙️ Tecnologias Utilizadas

O projeto é configurado usando o **Vite** para um ambiente de desenvolvimento rápido e eficiente.

| Categoria | Tecnologia | Uso Principal |
| :--- | :--- | :--- |
| **Framework** | React | Construção da interface de usuário. |
| **Linguagem** | TypeScript | Tipagem estática para todo o código JavaScript. |
| **Tooling** | Vite | Servidor de desenvolvimento e empacotamento (`bundling`) para produção. |
| **Estilo** | CSS / HTML | Estrutura e estilização básica do site. |
| **Qualidade** | ESLint | Análise estática de código para padrões e *bugs*. |

## 📁 Estrutura do Repositório

O código segue a organização de projetos iniciados com Vite e React:
├── public/                 # Arquivos estáticos (imagens, favicons, etc.)
├── src/                    # Código-fonte da aplicação (Componentes, lógica, estilos)
├── index.html              # Ponto de entrada da aplicação
├── package.json            # Lista de dependências e scripts de execução
├── tsconfig.*.json         # Arquivos de configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
└── ...

---

## 🚀 Como Executar Localmente

Siga estas instruções para configurar e rodar o projeto no seu ambiente.

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm (ou yarn/pnpm)

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/KaikyTf/SiteFIPP-React.git](https://github.com/KaikyTf/SiteFIPP-React.git)
    cd SiteFIPP-React
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```

O website estará acessível no seu navegador no endereço: `http://localhost:5173/` (verifique a porta exata no console).

### 📦 Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com *Hot Reload*. |
| `npm run build` | Compila o projeto para produção (gera a pasta `dist`). |
| `npm run lint` | Executa o ESLint para verificar problemas no código. |
