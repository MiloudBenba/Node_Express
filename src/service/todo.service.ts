import  { IPatch, TodoModel} from "../model/todo.model"
import TodoRepository from "../repository/todo.repository"

export default class TodoService {

    repo: TodoRepository

    constructor(repo: TodoRepository) {

        this.repo = repo
        
    }

    getAll = (): TodoModel[] => {
        return this.repo.getAll()
    }

    getId = (id: number) => {
        let result;
        this.repo.getAll().forEach(element => {
            if (element.id === id) {
               result = element;
             }
            
        })

        if(!result){
            throw new Error("Function not implemented. C'est de la merde")
        }
        return result;
}

// Méthode FIND
getId2 = (id: number): TodoModel => {
    const resu = this.repo.getAll().find(item => item.id == id)
    if(!resu) throw new Error("Erreur");
    return resu
    
}

// Méthode FILTER

getId3 = (id: number): TodoModel => {
    let resul = this.repo.getAll().filter(item => item.id == id)[0]
    if(!resul) throw new Error("Erreur");
    return resul;
    
}

// Méthode DELETE

deleteId = (id: number): void => {
    this.repo.getAll().slice(id)
}

createTodo = (task: string): TodoModel => {

    if(!task) throw"Paramétre manquant !"
    const newTodo = new TodoModel(task)
    this.repo.createTodo(newTodo)
    return newTodo
}

updateTodo = (item: TodoModel, id: number): TodoModel => {
    if(item.id != id) throw "incorrect"
    const exist = this.getAll().find(data => data.id == item.id)
    if(!exist){
        const todo = new TodoModel(item.task, item.completed);
        this.repo.createTodo(todo)
        return todo
    } else {
        const todo = new TodoModel(item);
        const index = this.getAll().findIndex(data => data.id == todo.id)

        this.repo.update(todo, index)
        return todo
    }
}

patch = (id: number, item:Partial<IPatch>) =>{
    const index = this.getAll().findIndex(data => data.id == id)
    if(index == -1) throw "id ou index inconnu"
    const data = this.repo.patch(index, item)
    return data
}




}






