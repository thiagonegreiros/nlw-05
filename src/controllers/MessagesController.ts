import { request, Request, response, Response } from "express";
import { MessagesService } from "../services/MessagesService";


export class MessagesController {
  async create(req: Request, res: Response) {
    const { admin_id, text, user_id } = req.body;
    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id
    })

    return res.status(200).json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}