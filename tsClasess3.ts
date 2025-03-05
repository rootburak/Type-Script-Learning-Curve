class Product {
    private productName: string;
    private productPrice: number;

    constructor(productName: string, productPrice: number){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    get product() {
        return this.product
    }
    set product(productName:string){
        this.productName = productName
    }
    get price() {
        return this.productPrice
    }
    set price(productPrice: number){
        this.productPrice = productPrice
    }



}


let newProduct = new Product("laptop",2000)

console.log(newProduct.product)
newProduct.product="computer"
console.log(newProduct.product)