import { isKeyObject } from "util/types";

interface ITodo {
    [task: string]: any
}

export default class TodoPersistance implements ITodo {
    id!: number
    [task: string]: any
     item!: number
    completed?: boolean

    constructor(...data: any[]) {
        const [obj] = data
        for(let key in obj) {
            this[key] = obj[key]
            
            
        }
    }
    
}
