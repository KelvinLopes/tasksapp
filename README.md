# App task 🚀🎓


Um app em Node e Express para guardar e organizar projetos. Foi meu primeiro desafio realizado na goStack 9  Bootcamp Rocketseat.

Abaixo estão sugestões de rotas que poderão ser usadas no Insomnia.

Para testar precisará rodar o comando yarn dentro do diretório para instalar as dependências, no terminal acesse o diretório do app e execute o comando yarn dev, carregará o projeto no localhost na porta configurada, precisará do Insomnia para ver o funcionamento, pode se usar as configurações listadas abaixo:

**Método GET** - Nome da requisição: Lista Tasks

Url da requisição: http://localhost:3000

Use estrutura JSON no Insomnia, utilize a confiração de url abaixo ou outra porta, não esqueça de troca no script também. 


**Método POST** - Nome da requisição: Cria um novo projeto

Url da requisição: http://localhost:3000/projects 


*No corpo da requisição use:

{

"id": "1",

"title":"Desenvolver um novo projeto"

}

Use estrutura JSON no Insomnia 

**Método PUT** - Nome da requisição: Edita o nome do projeto

Url da requisição: http://localhost:3000/projects/1


*No corpo da requisição use:

{

"title":"Desenvolver um novo projeto em React"

}

Use estrutura JSON no Insomnia 

**Método POST** - Nome da requisição: Cria uma nova tarefa no projeto


Url da requisição: http://localhost:3000/projects/1/tasks


*No corpo da requisição use:

{

"title":"Projeto React"

}

Use estrutura JSON no (No Body) in Insomnia 

**Método DEL** - Nome da requisição: Deleta o projeto

Url da requisição: http://localhost:3000/projects/1


*Após os dois pontos pode se testar com outras informações, não esqueça de inseri lás entre aspas duplas {"title":"exemplo"}.

*Para editar alguma informação troque o número na url. Exemplo crio dois projetos e quer editar o projeto de id 2 então ficará assim: PUT ➡️ http://localhost:3000/projects/**2**
