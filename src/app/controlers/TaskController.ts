import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Task from "../models/Task";

class TaskController {
  async list(req: Request, res: Response) {
    const repository = getRepository(Task);
    const allDashboards = await repository.find();
    return res.json(allDashboards);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {  description,status } = req.body;
    const repository = getRepository(Task);
    const allTask = await repository.findOne({ where: { id: id } });
     await repository.save({ ...allTask, description:description,status:status});
    return res.json({ ...allTask, description:description,status:status });
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const repository = getRepository(Task);
    const deleteTask = await repository.delete({ id: id });
    return res.json(deleteTask);
  }
 
  async store(req: Request, res: Response) {
    const repository = getRepository(Task);
    const { description,status} = req.body;
    const tasks = repository.create({
      description,status
    });
    !description && res.status(400).json({error:true, message:'description is required'})

    await repository.save(tasks);
    return res.json(tasks);
  }
}

export default new TaskController();
