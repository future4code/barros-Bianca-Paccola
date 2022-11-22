import { Request, Response } from "express";
import selectAllUsers from "../functions/functions";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let name = req.query.name as string;
    let type = req.params.type as string;
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let page = Number(req.query.page);

    if (!name) {
      name = "%";
    }
    if (!type) {
      type = "%";
    }
    if (!sort) {
      sort = "email";
    }
    if (!order) {
      order = "ASC";
    }
    if (!page) {
      page = 1;
    }

    let offset = 5 * (page - 1);

    const users = await selectAllUsers(name, type, sort, order, offset);

    if (!users.length) {
      statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
