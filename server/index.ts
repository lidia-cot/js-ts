import express, { request, response } from 'express';

//define server port
const PORT: number = 8080;

//create server
const server: express.Application = express();

//configure server
server.use(express.json());
server.use(express.urlencoded());


server.post('/sum',(request: express.Request, response: express.Response) => {
    response.send(`Your result after summing is: ${+request.body.param1 + +request.body.param2}`);
});

server.post('/subtract',(request: express.Request, response: express.Response) => {
    response.send(`Your result after subtracting is: ${+request.body.param1 - +request.body.param2}`);
});

server.post('/multiply',(request: express.Request, response: express.Response) => {
    response.send(`Your result after multiplying is: ${+request.body.param1 * +request.body.param2}`);
});

server.post('/divide',(request: express.Request, response: express.Response) => {
    response.send(`Your result after dividing is: ${+request.body.param1 / +request.body.param2}`);
});

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}!`)
});