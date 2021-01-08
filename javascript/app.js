import Product from "./product.js";

const products = [
    {
        "id": "1",
            "productName": "MacBook",
            "price": "3990000",
            "brand": "Apple",
            "img": "./sources/apple-iphone11-3.jpg",
            "props": [
                {
                "Name": "RAM",
                "Value": "16GB"
                },
                {
                "Name": "CPU",
                "Value": "M1"
                },
                {
                "Name": "Display",
                "Value": "Retina"
                }
            ]
    },
    {
            "id": "2",
                "productName": "AJ 11",
                "brand": "Nike",
                "img": "./sources/sport-adidas.jpg",
                "props":  [
                    {
                        "Name": "Size",
                        "Value": "38"
                        },
                        {
                        "Name": "Color",
                        "Value": "Red"
                    }
                ],
                "defaultPrice": "12314",
                "pricing": [
                {
                    "condition": [{
                        "Name": "Size",
                        "Value": "40"
                        },
                        {
                        "Name": "Color",
                        "Value": "Red"
                        }],
                        "price":"23423"
                },
                {
                    "condition": [{
                        "Name": "Size",
                        "Value": "38"
                        },
                        {
                        "Name": "Color",
                        "Value": "Red"
                        }],
                        "price":"12345"
                }
                ]
    }
];
    
    for (const product of products){

        const prod = new Product(product.id, product.productName, product.price, product.img, product.brand, product.props)

        document.getElementById("baraaOruulah").insertAdjacentHTML("afterbegin", prod.render());

    }   


product.test();