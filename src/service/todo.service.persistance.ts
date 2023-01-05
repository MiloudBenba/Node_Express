import TodoPersistance from "../model/todo.model.persistance";
import TodoRepositoryPersistance from "../repository/todo.repository.persistance";

export default class TodoServicePersistance {
    // createTodo(task: any) {
    //     throw new Error("Method not implemented.");
    // }
    // updateTodo(body: any, arg1: number) {
    //     throw new Error("Method not implemented.");
    // }
    patch(arg0: number, body: any) {
        throw new Error("Method not implemented.");
    }

    #repo : TodoRepositoryPersistance

    constructor(repo: TodoRepositoryPersistance) {
        this.#repo = repo
    }

    getAll = (): Promise<TodoPersistance[]> => {
        return this.#repo.getAll()
    }

    getById = (id: number): Promise<TodoPersistance> => {
        return this.#repo.getById(id)
    }

    deleteById = (id: number): Promise<any> => {
        return this.#repo.delete(id)
    }

    createTodo = (item: string): Promise<TodoPersistance> => {
        const data = new TodoPersistance(item)
        return this.#repo.create(data)
    }

    updateTodo = (item: TodoPersistance, id: number): Promise<TodoPersistance> => {
        if(item.id != id) throw "objet corrompu"
        return this.#repo.update(item)
        .catch(err => err);
    }
}
