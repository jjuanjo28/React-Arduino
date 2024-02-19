import { LEVEL } from "./LEVEL.enum"

export class Task  {
    task= ""
    description=""
    level= LEVEL.NORMAL

    constructor (task,description,level){
        this.task = task
        this.description = description
        this.level = level
    }
}