import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate{
  admin_id?: string;
  text: string;
  user_id: string;
}

export class MessagesService {

  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, text, user_id}: IMessageCreate) {

    const message = this.messageRepository.create({
      admin_id,
      text,
      user_id
    });

    await this.messageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {

    const list = await this.messageRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }
}