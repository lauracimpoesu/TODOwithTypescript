const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let lista = [];

app.get('/', (request, response) => {
    response.send( `GET Lista: /lista`)
})

app.get('/lista', (request, response) => {
    response.json(lista);
})

 app.get('/lista/:id', (request, response) => {
    const id = request.params.id;
    lista.forEach((user) => {
        if(user.id === +id) {
            response.json(user);
            return;
        }
    })
}) 
app.post('/lista', (request, response) => {
    const user = request.body;
    user.id = lista.length+1;
    lista.push(user);
    response.json('Add User!!!');
})

app.delete('/lista/:id', (request, response) => {
    const id = request.params.id;
    lista = lista.filter(user => user.id !== +id);
    response.json('Remove User!!!');
})


app.listen(3000, () => console.log('Server attivo sulla porta 3000')); 



