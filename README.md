<div align="center">
    <img alt="Smartfit Challenge" src="./public/logo.svg" width="250px">
</div>

## 📖 Introdução
Este projeto consiste na criação de uma interface para consulta da disponibilidade das academias da Smartfit durante o período da pandemia. O código foi desenvolvido com base no projeto apresentado pela Fernanda Kipper em seu vídeo no YouTube.

Agora, um ponto importante: este foi meu primeiro contato com Angular! Então, se você olhar o código e pensar "hmm, isso poderia estar melhor", é porque provavelmente poderia mesmo 😆. Mas o objetivo aqui não foi escrever o código mais limpo e manutenível, e sim explorar as possibilidades do Angular na prática. Basicamente, este projeto é uma prova de conceito para eu entender melhor o framework.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Versão 19.1.4
- **Git**
- **GitHub Pages** (para deploy)


## 💻 Como Executar o Projeto Localmente

> 🛈 Necessário ter o Angular CLI instalado na sua máquina. [Saiba mais](https://angular.dev/installation).

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabriel-mns/smartfit-challenge.git
   cd smartfit-challenge
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Rode o servidor local:
   ```bash
   ng serve
   ```

4. Acesse a aplicação no navegador:
    ```
    http://localhost:4200
    ```

    A aplicação também está hospedada no [Github Pages](https://gabriel-mns.github.io/smartfit-challenge/).
   
## 📋 Funcionalidades

- Requisição HTTP para um endpoint que retorna um JSON com dados das unidades Smartfit.
- Filtros aplicados diretamente no frontend:
  - Filtro por status (aberto/fechado).
  - Filtro por horário de funcionamento.
- Exibição dos resultados com base nos filtros selecionados.

## ⚙️ Como funciona

### O código
A aplicação é dividida em 4 componentes visuais principais:

- **Cabeçalho (Header)**: Contém a logo, título e introdução.

- **Formulário**: Onde o usuário seleciona o período que deseja treinar.

- **Lista de Academias**: Exibe as unidades disponíveis após a filtragem.

- **Cartão das Academias**: Mostra os detalhes de cada unidade, como nome, status, restrições e horários.

Para gerenciar a lógica de consulta e filtro, foram criados dois services:

- Um service responsável por buscar os dados das academias a partir do endpoint.

- Outro service para filtrar e compartilhar esses dados com os componentes que precisam deles, garantindo que tudo fique sincronizado.

### A aplicação
Para usar a aplicação, é bem simples:

- Selecione o período que deseja treinar: "Manhã", "Tarde" ou "Noite".

- Caso deseje ver as unidaes fechadas, selecione "Exibir unidades fechadas"

- Clique em "Encontrar unidades".

A aplicação vai filtrar e exibir as academias que estão abertas no período selecionado, considerando o dia da semana em que a consulta está sendo feita.


## 🧠 Aprendizados e Dificuldades

### Aprendizados

1. **Angular**: 
   Já tinha visto códigos em Angular, mas nunca havia codado nada com o framework. Esse projeto me deu um overview de como ele funciona, e agora sinto que será muito mais fácil iniciar um curso e aprofundar meus conhecimentos.
   
2. **Typescript**: 
    Embora já tivesse feito algumas coisinhas em TypeScript, foi a primeira vez que usei a linguagem em um projeto mais estruturado. A tipagem foi o que mais me chamou a atenção, e como tenho familiaridade com Java, consegui me adaptar bem.

3. **Github Pages**: 
    Já havia hospedado APIs e outras aplicações em outros serviços de hospedagem mas nunca uma aplicação angular para o Github Pages. Deu pra aprender como faz e com certeza vai ser mais fácil de fazer deploy nas próximas vezes.

4. **Responsividade**: 
    Esse foi meu primeiro projeto front-end responsivo. Nunca havia utilizado o `@media` do CSS para criar interfaces responsivas.

### Dificuldades Encontradas
1. **Compartilhamento De Dados Entre Componentes**: 
    O uso do ```BehaviorSubject``` junto com o ```Observable``` foi um ponto de dificuldade. Entender seu funcionamento e propósito levou um tempo, mas agora tenho uma base para estudar mais a fundo em projetos futuros.
   
2. **Imports de Módulos/Componentes**: 
    Como estava usando uma versão diferente do Angular (com componentes standalone), tive problemas com imports de módulos como `CommonModule` e `ReactiveFormsModule`. No vídeo da Fernanda, ela fazia esses imports `no app.module.ts`, que não existia no meu projeto. Tive que pesquisar bastante para descobrir como resolver isso. 😅
   
3. **Deploy para o Github Pages**: 
    Fazer o deploy de uma aplicação Angular no GitHub Pages foi um desafio. No começo, só aparecia ou o README, ou uma tela branca ou um erro 404. Além disso, queria que a URL ficasse limpa (`/smartfit-challenge`), mas inicialmente ficava algo como `smartfit-challenge/browser/smartfit-challenge/index.html`. Depois de fazer alguns ajustes nas configurações, tudo funcionou direitinho.

## ✅ Pontos de Melhoria
- **Componentização**: 
    Acredito que dividir os componentes atuais em componentes menores seria uma boa ideia, especialmente se a aplicação crescer. Por exemplo, o título "Reabertura Smart Fit" no header poderia ser um componente reutilizável em outras páginas.

- **Responsabilidades dos Serviços**:
    A organização dos serviços não ficou tão clara quanto eu gostaria. A lógica poderia estar melhor agrupada, e a nomenclatura dos serviços também ficou um pouco estranha. Isso seria um ponto de atenção em uma futura refatoração.

- **UI/UX**:
    O design foi baseado nas imagens do repositório do desafio, mas acredito que a experiência do usuário poderia ser melhorada. Por exemplo, adicionar ícones de carregamento, mensagens como "Nenhum resultado encontrado" e outros feedbacks visuais seria um ótimo upgrade.

- **Responsividade**:
    Como foi meu primeiro projeto responsivo, a estilização dos diferentes tamanhos de tela foi mais baseada no que eu via na minha tela do que em padrões de dispositivos reais. Em projetos futuros, pretendo me aprofundar mais em boas práticas de responsividade.

## 🔗 Links

- **Vídeo de Referência**: [RESOLVENDO DESAFIO FRONTEND - PROJETO ANGULAR COMPLETO](https://www.youtube.com/watch?v=ozZXMkp8MnQ)
- **Endpoint Utilizado**: [Dados das Unidades Smartfit](https://test-frontend-developer.s3.amazonaws.com/data/locations.json)
- **Projeto Hospedado no GitHub Pages**: [Smartfit Challenge - Gabriel Martins](https://gabriel-mns.github.io/smartfit-challenge/)
