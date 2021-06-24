export class Usuarios {
    id: number;
    alias: string;
    password: string;
    role: string;
    
    constructor(){
        this.id = 0;
        this.alias = "";
        this.password = "";
        this.role = "";
    }
}
