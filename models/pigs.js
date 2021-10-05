

module.exports = class Pig {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        
    }
    save() {
        console.log(`id is ${this.id} name is ${this.name} description is ${this.description}`);
    }
}