

export class Task {
    tarea = ""
    prioridad = ""
    estado = false

    constructor (tarea,prioridad,estado){
        this.tarea = tarea
        this.prioridad = prioridad
        this.estado = estado
    }
}