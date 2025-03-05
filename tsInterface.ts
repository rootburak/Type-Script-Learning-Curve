interface IUser{
    id: number;
    name: string;
    new_user():IUser;
}

class baseUser implements IUser{
    constructor(public id: number, public name: string){
        this.id = id;
        this.name = name;
    }
    new_user(): baseUser{
        return new baseUser(this.id, this.name);
    }
    display(): void{
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

let newUser:baseUser = new baseUser(1,"burak");
newUser.display();