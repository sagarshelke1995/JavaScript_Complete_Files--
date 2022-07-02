class Mobile{

    constructor(brand , color , ramCapacity , price){
        this._brand = brand;
        this._color = color;
        this._ramCapacity = ramCapacity;
        this._price = price;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get ramCapacity() {
        return this._ramCapacity;
    }

    set ramCapacity(value) {
        this._ramCapacity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    // access the mobile
    fetchMobile(){
        let output = `BRAND : ${this.brand}
             COLOR : ${this.color}
             RAM : ${this.ramCapacity}
             PRICE : ${this.price}`;
        return output;
    }
}

// Object Creation
let mobile_1 = new Mobile('Apple' , 'silver' , '6GB' , 35000);
console.log(mobile_1.fetchMobile());
mobile_1.price = 45000; // change the value
console.log(mobile_1.fetchMobile());


