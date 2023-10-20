import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { AppError } from "../errors";

export const isMovieNameUnique = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const nameQuery = await movieRepo.findOneBy({ name: req.body.name });

  if (nameQuery?.name === req.body.name) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};
