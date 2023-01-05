import { isKeyObject } from "util/types";

interface ITodo {
    [task: string]: any
}

export default class TodoPersistance implements ITodo {
    id!: number
    task!: string
    completed!: boolean

    constructor(...data: any[]) {
        const [obj] = data
        for(let key in obj) {
            console.log(key);
            console.log(obj[key]);
            // this[key] = obj[key]
            
            
        }
    }
    
}
