import { Request, Response } from "express";
import { UsersService } from "../services/UserService";

export class UsersController{
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const usersService = new UsersService();

    try {
      const users = await usersService.create(email);
      return response.status(300).json(users);
    } catch (e) {
      return response.status(400).json({ message: e.message })
    }
  }
}