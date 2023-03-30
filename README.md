# GreenAcesso

Olá, bem vindo ao meu teste técnico para a vaga de Desenvolvedor Front End.

Para rodar o projeto, siga os seguintes passos:

1 - Clone o repositório para a sua maquina.
Para isso abra o Git na pasta onde deseja baixar o repositório e insira o seguinte comando:
git clone git@github.com:viniciusgrp/GreenAcesso.git

2 - Abra a pasta do projeto que foi baixada na sua maquina.

3 - Instale as dependencias.
Para isso abra a pasta com o VS Code, vá na aba terminal e no terminal que abriu insira o comando:
npm install

4 - Inicie o servidor de desenvolvimento.
No mesmo terminal digite o comando:
yarn dev

5 - Aguarde o servidor iniciar e irá aparecer algo assim:
  VITE v4.2.1  ready in 993 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

6 - Segure o botão CTRL e clique com o botão esquerdo do mouse no http://127.0.0.1:5173/

7 - O projeto irá abrir no navegador.

============================ Informações sobre o projeto ============================

O projeto foi criado utilizando as seguintes tecnologias:

React / Styled-Components / Axios / react-router-dom / react-icons / react-query / date-fns / Redux / Context API / Vite / Vercel

É possível aplicar diversos filtros de busca dos personagens, desde nome até se está vivo ou não.
E o melhor: Os filtros são cumulativos! Ou seja, você pode buscar por personagens chamados Rick que estejam mortos.

No projeto utilizei tanto Redux quanto Context API para fins de demonstrar que sei utilizar ambos, mas
em um projeto real provavelmente iria utilizar apenas um, a minha preferencia pessoal é Context API.

No notion do teste consta o seguinte: 
"uma tela de detalhes que deve conter a maior quantidade possível de informações e uma opção para favoritar o personagem."
Como podem perceber eu instalei e comecei utilizando o react-router-dom para a criação e navegação entre as
páginas, mas por não ter tantas informações assim dos personagens eu optei por criar um modal com as informações
dos personagens com o botão de coração para favoritar o mesmo, pois na minha opinião fica mais legal para os usuários.
Também diz: "Opção para favoritar o personagem na página de listagem e detalhe", porém como eu optei pelo modal
acabei colocando o botão de favoritar apenas nele.

Ao clicar em favoritar a informação é armazenada no localstorage do navegador, fazendo com que mesmo que o usuário saia
da página, quando retornar os personagens ainda estarão favoritados.

Foi feita a paginação, tanto com os botões Página anterior e Próxima página quanto botões com os números das páginas mais próximas.