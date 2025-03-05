class GenericClass<T>{
    private _input:T;
    constructor(input:T) {
        this._input = input;
    }
    showGeneric():T {
        return this._input
    }
}

let myGenericClass = new GenericClass<string>("Hello World");
console.log(myGenericClass.showGeneric());

let myGenericClass2 = new GenericClass<number>(123);
console.log(myGenericClass2.showGeneric());