const express = require('express');

const app = express();


const projects = [];

let countReqsProject = 0;

//Middleware global, conta as requisições feitas no app
function checkCountReqsProject(req, res, next){ 
  
  countReqsProject++;

  console.log(`Foram feitas ${countReqsProject} no aplicativo.`);
      
    return next();
  }

  app.use(checkCountReqsProject);

  /**Middleware local, caso o projeto não exista haverá uma mensagem
  *caso exita algum, retornará o projeto
  *
  **/
function checkExistingProject(req, res, next){
  
  const { id } = req.params;
  const project = projects.find(changeCheckExistingProject => changeCheckExistingProject.id === id);

    if(!project) {

      return res.status(400).json( { error: 'Para essa função, deve se criar um projeto primeiramente.' } );
    }
      return next();
  }

//Middleware que Verifica a existencia do projeto no array por meio de sua ID
  function checkExistingProjectID(req, res, next){
  
    const { id } = req.body;
    const project = projects.find(changeIDCheckExistingProject => changeIDCheckExistingProject.id === id);
  
      if(!project) {
        req.project = project;
        return next();
      }
      return res.status(400).json( { error: `Esse projeto já existe com indentificação de id de número ${id}` } );
    }


app.use(express.json());

//Lista todos os projetos
app.get('/projects', (req, res) => {
  return res.json(projects);

});


//Cria informação de um novo projeto
app.post('/projects', checkExistingProjectID, (req,res) =>{

const { id, title} =req.body;  
  
const project = {
  id,
  title,
  task: []
};

 projects.push(project);

  return res.json(project);
});

//Edita título do projeto

app.put('/projects/:id',checkExistingProject, (req,res) =>{

  const{ id }   = req.params;
  const { title } = req.body;
 
    const project = projects.find(changeEditProjectTitle => changeEditProjectTitle.id === id);
    
    project.title = title;

  return res.json(project);
});

//Cria a task(tarefa) de um projeto

app.post('/projects/:id/tasks',checkExistingProject, (req, res) => {


  const{ id }   = req.params;
  const { title } = req.body;
 
    const project = projects.find(changeCreateProjectTask => changeCreateProjectTask.id === id);
    
    project.task.push(title);

  return res.json(project);

});

//Deleta projetos

app.delete('/projects/:id',checkExistingProject, (req,res) => {

  const{ id }   = req.params;
   
    const project = projects.forEach(changeDeleteProjectTitle => changeDeleteProjectTitle.id === id);
    

    projects.splice(project, 1);

  return res.send('Project deleted successfully!');

});

app.listen(3000);