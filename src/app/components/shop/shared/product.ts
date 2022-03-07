export class Product {
    productId: string;
    productName: string;
    productPrice: number;
    contactName: string;
    contactEmail: string;

    constructor() {
        this.productId = null;
        this.productName = null;
        this.productPrice = null;
        this.contactName = null;
        this.contactEmail = null;
    }

    static get getProducts(): Product[] {
        const products = [
            {
                productId: '1',
                productName: "iPhone 11 Pro Max ",
                productPrice: 1099.99,
                contactName:"Samantha Cooks ",
                contactEmail:"s_cooks@gmail.com"
             },
             {
                productId: '2',
                productName: "Galaxy Note10+ 5G ",
                productPrice: 1299.99,
                contactName:"Kamichael Nooks ",
                contactEmail:"k_nooks@gmail.com"
             },  
             {
                productId: '3',
                productName: "Galaxy Note10+ ",
                productPrice: 1099.99,
                contactName:"Evelyn Chapman ",
                contactEmail:"e_chapman@gmail.com"
             },
             {
                productId: '4',
                productName: "Galaxy S10e ",
                productPrice: 749.99,
                contactName:"Halima Candy Anderson",
                contactEmail:"hc_anderson@gmail.com"
             },
             {
               productId: '6',
               productName: "iPhone 11 Pro ",
               productPrice: 999.99,
               contactName:"Samantha Cooks ",
               contactEmail:"s_cooks@gmail.com"
            },
             {
                productId: '6',
                productName: "iPhone 11 ",
                productPrice: 699.99,
                contactName:"Samantha Cooks ",
                contactEmail:"s_cooks@gmail.com"
             },
             {
                productId: '7',
                productName: "Xiaomi Black Shark 4S Pro ",
                productPrice: 720.37,
                contactName:"Samantha Cooks ",
                contactEmail:"s_cooks@gmail.com"
             },
             {
                productId: '8',
                productName: "Xiaomi Black Shark 4S ",
                productPrice: 387.89,
                contactName:"Samantha Cooks ",
                contactEmail:"s_cooks@gmail.com"
             }
        ] as Product[];
        return products;
    }
}
