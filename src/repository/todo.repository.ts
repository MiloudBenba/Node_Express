import {IPatch, TodoModel} from "../model/todo.model";

export default class TodoRepository {
    private todos: TodoModel[] = [
        new TodoModel("Decuver"),
        new TodoModel("Aller bosser"),
        new TodoModel("Se reveiller"),
    ]

    getAll = (): TodoModel[] => {
        return this.todos;
    };


    deleteId = (id: number): void => {
        this.todos = this.todos.filter(item => item.id !=id);
    }
    
    createTodo = (item: TodoModel): void => {
        this.todos.push(item)
    }

    update =(item: TodoModel, index: number) :void => {
        this.todos[index] = item

    }

    patch = (index:number, item:Partial<IPatch>): TodoModel =>{
        this.todos[index].patch(item)
        return this.todos[index]
    }

    }

    
    
    
    
