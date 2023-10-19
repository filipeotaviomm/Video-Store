import "express-async-errors";
import express, { Application } from "express";
import { moviesRouter } from "./movies.router";
import { handleErrors } from "./errors";

export const app: Application = express();

app.use(express.json());

app.use("/movies", moviesRouter);

app.use(handleErrors);
