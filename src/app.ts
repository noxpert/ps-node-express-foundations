import express, { Request, Response } from "express";

const server = express();

function requestCallback(request: Request, response: Response) {
  response.status(200).send('Request success!');
}

server.get("/", requestCallback);

server.listen(5050);
