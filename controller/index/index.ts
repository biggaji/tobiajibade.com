import { Request, Response } from "express";

export const index = async (req:Request, res:Response) => {
  res.render("pages/index", { page_name: "Tobi Ajibade - Software Engineer" });
};
