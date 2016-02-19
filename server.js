var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) { 
	res.send('Todo API root');
});

app.get('/todos', function(req, res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id);
	var result = '';
	// if(typeof todoId === 'Number'){
		todos.forEach(function(todo){
			if(todo.id === todoId){
				result = todo;
			}
		});

		if(result !== ''){
			res.json(result);
		}
		else{
			res.status(404).send();
		}
	// }
	// else{
		// res.send('Invalid data id! Type given is ' + typeof todoId);
	// }
});

app.post('/todos', function(req,res){
	var body = req.body;
	
	body. id = todoNextId++;
	todos.push(body);

	res.json(body);
});

app.listen(PORT, function(){
	console.log('Express listening on port at ' + PORT + '!');
});