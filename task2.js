class Senior {
    constructor(senior) {
        this.senior = senior;
    }

    getRole() {
        return this.senior;
    }
}

class Junior {
    constructor(junior) {
        this.junior = junior;
    }

    getRole() {
        return this.junior;
    }
}

const reuse = [new Senior("senior").getRole(), new Junior("junior").getRole()];

const person1 = {
    role: 'sd'
}

reuse.forEach(e => {

})