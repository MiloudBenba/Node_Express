
interface IPatch {
    task: string,
    completed: boolean,
}

 class TodoModel {
    static forEach(arg0: (element: any) => void) {
        throw new Error("Method not implemented.");
    }

    id?:number
    task?: string
    completed?: boolean
    static count = 0;

    constructor(...data: any[]) {
        const [obj] = data
        if(typeof(obj) == "string"){
            this.id = TodoModel.count;
            this.task = obj;
            this.completed = false;
            TodoModel.count++        
        } else if(Object.keys(obj).length == 2){
            this.id = TodoModel.count;
            ({task: this.task, completed: this.completed} = obj)
            TodoModel.count++        
        } else if(Object.keys(obj).length == 3){
            this.id = TodoModel.count;
            ({id: this.id, task: this.task, completed: this.completed} = obj)
            TodoModel.count++        
        } else {
            throw "erreur lors de la mise à jour"
        }
    }

    patch = (data: Partial<IPatch>) =>{
        if(data.task) this.task = data.task
        if(data.completed) this.completed = data.completed
    }
}

export {IPatch, TodoModel}