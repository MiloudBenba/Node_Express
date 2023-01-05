import { Request, Response } from "express";
import TodoService from "../service/todo.service";
import TodoServicePersistance from "../service/todo.service.persistance";

export default class TodoController {

    service: TodoServicePersistance

    constructor(service: TodoServicePersistance) {
        this.service = service
        
    }

    getAll = async(req: Request, res: Response): Promise<void> => {
        const data = await this.service.getAll()
        res.send(data)
    }

    getById = async(req: Request, res: Response): Promise<void> => {
        const id = req.params.id
        const data = await this.service.getById(+ id)
        res.send(data)
    }

    deleteById = (req:Request, res: Response): void => {
        const id = req.params.id;
        this.service.deleteById(+id)
        .then(data => {res.sendStatus(200)})
        .catch(err => res.send("suppression impossible"))
    }


    create = async(req: Request, res: Response): Promise<void> => {
        const task = req.body.task
        const todo = await this.service.createTodo(task)
        res.send(todo)
    }

    update = async(req: Request, res: Response): Promise<void> => {
        const body = req.body
        const id = req.params.id
        try {
            const data = await this.service.updateTodo(body, +id)
            res.send(data)

        } catch (err) {
            res.send(err);
            
        }
    }

    patch = async(req: Request, res: Response): Promise<void> => {
        const id = req.params.id
        const body = req.body
        const data = this.service.patch(+id, body)
        res.send(data)
    
    }
    
}