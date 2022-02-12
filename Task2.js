// Strategy
class Attack {
    action() {
        return "Attack Mode Activated";
    }
}
class Medium {
    action() {
        return "Balanced Mode Activated";
    }
}
class Defence {
    action() {
        return "Defence Mode Activated";
    }
}

class ChooseMode {
    setMode(mode) {
        this.mode = mode;
    }
    action() {
        return this.mode.action();
    }
}

const MyMode = new ChooseMode();

const mode_one = new Attack();
MyMode.setMode(mode_one);
console.log(MyMode.action());
console.log("------------------------------------");

const mode_two = new Medium();
MyMode.setMode(mode_two);
console.log(MyMode.action());
console.log("------------------------------------");

const mode_three = new Defence();
MyMode.setMode(mode_three);
console.log(MyMode.action());
console.log("------------------------------------");