import "express-async-errors";
import express, { Application } from "express";
import { moviesRouter } from "./routes/movies.router";
import { handleErrors } from "./errors";
import cors from "cors";

export const app: Application = express();

//se quizer restringir o uso da api por domínio, ou métodos, ou cabeçalhos, é só colocar essa variável dentro do parâmetro da função cors()
// const corsOptions = {
//   origin: 'https://www.exemplo.com',
//   methods: 'GET,POST',
//   allowedHeaders: 'Content-Type,Authorization',
// };

app.use(cors());

app.use(express.json());

app.use("/movies", moviesRouter);

app.use(handleErrors);

export default app;
