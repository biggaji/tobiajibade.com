import { Request, Response } from "express";

export const index = async (req:Request, res:Response) => {
  res.render("pages/index", { page_name: "Tobi Ajibade - Software Engineer" });
};

export const renderHirePage  = async (req:Request, res:Response) => {
  res.render("pages/hire_me", { page_name: "Hire me to work with you..."});
};