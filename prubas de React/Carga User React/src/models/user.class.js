export class User {
    name = ""
    email = ""
    password = ""
    estado = true

    constructor(name,email,password, estado){
        this.name = name;
        this.email = email;
        this.password = password
        this.estado = estado;

    }
}