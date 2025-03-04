class User{
    user_name:string;
    user_last_name:string;
    user_age:number;
    constructor(user_name:string, user_last_name:string, user_age:number){
        this.user_age = user_age;
        this.user_name = user_name;
        this.user_last_name = user_last_name;
    }
    getFullName():string{
        return `${this.user_name} ${this.user_last_name}`;
    }
}

let user:User = new User("burak","eren",20);
console.log(user.getFullName())

class Customer{
    protected discountRate:number = 10;  
    protected userName:string;
    protected userLastName:string;
    protected userAge:number;

    constructor(userName:string, userLastName:string, userAge){
        this.userName = userName;
        this.userLastName = userLastName;
        this.userAge = userAge;
    }

    public getFullName():string{
        return `${this.userName} ${this.userLastName}`;
    }
    public getDiscountedPrice(price:number):number{
        return price - (price * (this.discountRate / 100));
    }
}

class SuperCustomer extends Customer{
    discountRate = 20;
    superCustomerID:number;
    constructor(userName:string, userLastName:string, userAge:number,superCustomerID){
        super(userName, userLastName, userAge);
        this.superCustomerID= superCustomerID;
    }
    public getFullName():string{
        return `${super.getFullName()} Super Customer ID: ${this.superCustomerID}`;
    }

}


let customer:Customer = new Customer("emre","efe",20)
let superCustomer:SuperCustomer = new SuperCustomer("ali","emre",30,12345);


console.log("customer "+customer.getFullName()+" price "+customer.getDiscountedPrice(500))
console.log("super customer "+superCustomer.getFullName()+" price "+superCustomer.getDiscountedPrice(500))