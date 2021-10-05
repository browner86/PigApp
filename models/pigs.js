piglist =[];

module.exports = class Pig {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        
    }
    save() {
        piglist.push(this)
        console.log(piglist);
    }
}