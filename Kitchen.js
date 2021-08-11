class Kitchen {
    constructor(chefName) {
        this.chefName = chefName;
        this.list = {};
    }

    intro() {
        console.log(`Sveiki atvyke i ${this.chefName} virtuve!`);
    }

    nupirkta(productName, amount) {
        if (productName in this.list) {
            this.list[productName] += amount;
        } else {
            this.list[productName] = amount;
        }
    }

    turimiProduktai() {
        let number = 0;
        for (const productName in this.list) {
            console.log(`${++number}) ${this.formatName(productName)}: ${this.list[productName]}`);
        }
    }

    sunaudota(productName, amount) {
        this.list[productName] -= amount;
        if (this.list[productName] < 0) {
            this.list[productName] = 0;
        }
    }

    sugedesProduktas(productName) {
        delete this.list[productName];
    }

    formatName(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
}

module.exports = Kitchen;