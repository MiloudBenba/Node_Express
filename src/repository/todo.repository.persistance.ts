import axios from "axios"
import "dotenv/config"
import TodoPersistance from "../model/todo.model.persistance";

export default class TodoRepositoryPersistance {

    #URL = process.env.JSONSERVER

    getAll = async(): Promise<TodoPersistance[]> => {
        return axios.get(`${this.#URL}`).then(res => res.data);
    }

    getById = async(id: number): Promise<TodoPersistance> => {
        return axios.get(`${this.#URL}/${id}`).then(res => res.data).catch(err => "id introuvable")
    }

    create = async(item: TodoPersistance): Promise<TodoPersistance> => {
        return axios.post(`${this.#URL}`, item).then(res => res.data)
    }

    update = async(item: TodoPersistance): Promise<TodoPersistance> => {
        return axios.put(`${this.#URL}/${item.id}`, item).then(res => res.data)
    }

    delete = (id: number): Promise<any> => {
        return axios.delete(`${this.#URL}/${id}`)
    }

    patch = async(id:number, item: TodoPersistance): Promise<TodoPersistance> => {
        return axios.patch(`${this.#URL}/${id}`, item).then(res => res.data)
    }
}
