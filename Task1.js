let CEO = null;

class CEO_Company {
    constructor(name, age, address) {
        if (CEO == null) {
            this.name = name;
            this.age = age;
            this.address = address;
            CEO = this;
        } else {
            return CEO;
        }
    }

    Print_CEO() {
        console.log(`CEO Details: name: ${this.name} ,age : ${this.age} , address: ${this.address}`)
    }

}


// login compo
const Company_CEO = new CEO_Company("Raheem", 24, "Alexandria , Tahrir-Square")
console.log(Company_CEO);

const Company_Employee = new CEO_Company("Amer", 40, "Cairo ,Tahrir-Square")
console.log(Company_Employee);
