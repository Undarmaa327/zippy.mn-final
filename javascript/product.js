export default class Product{
    constructor(id, productName, price, img, brand, props, category){
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.img = img;
        this.brand = brand;
        this.props = props;
        this.category = category;
    }
    renderProps(props){
        let retValue="";
        for (const prop of props)
            retValue+= `<div><span style="font-weight:bold;">${prop.Name}</span> : <span>${prop.Value}</span>`;

        return retValue;
    }
    SetPrice(newPrice){
        document.getElementById(this.id)
        document.querySelector('#'+this.id+'.price').innerHTML = changePrice();

    }
    render(){
        return `<div class="product" id="${this.id}">
        <p class="category-type">ГОО САЙХАН</p>
        <img src="${this.img}" alt="beauty-perfume-hugo">
        <h4 class="product-name">${this.productName}</h4>
        <p class="price">${this.price}₮</p>
            ${this.renderProps(this.props)}
        </div>`

    }
}
//static method
// properties dynamic js object

//<div class="product">
//<p id="category-type">ГОО САЙХАН</p>
//<img src="/sources/beauty-perfume-hugo.jpg" alt="beauty-perfume-hugo">
//<h4 id="product-name">HUGO BOSS</h4>
//<p id="price">419,000₮</p>
//</div>