function Mom (first, last, eyes, hair) {
    this.first = first;
    this.last = last;
    this.eyes = eyes;
    this.hair = hair;
}

Mom.prototype.showInfo = function() {
    console.log(this.first, this.last, "| Eyes:", this.eyes, "| Hair:", this.hair);
};

function Daughter(first, last, eyes, hair) {
    Mom.call(this, first, last, eyes, hair);
    this.first = first;
    this.hair = hair;
}

Daughter.prototype = new Mom();

Daughter.prototype.showInfo = function() {
    console.log(this.first, this.last, "| Eyes:", this.eyes, "| Hair:", this.hair);
};

// var mom = new Mom("Alice", "Wong", "brown", "black");
// var daughter = new Daughter("Eileen", "Wong", "brown", "brown");
// mom.showInfo();
// daughter.showInfo();


class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }

    addFriend(friend) {
        this.friends.push(friend);
    }

    createGreeting(other) {
        return "Yo " + other.name + "! from " + this.name + ".";
    }

    greet(other) {
        console.log(this.createGreeting(other));
    }

    lazyGreet(other) {
        let result = this.createGreeting(other);
        setTimeout(function(){console.log(result)}, 2000);
    }

    createGreetingsForFriends() {
        let that = this;
        return this.friends.map(function(e) {
            return that.createGreeting(e);
        });
    }

};


// hermione = new Person("Hermione");
// ron = new Person("Ron");
// harry = new Person("Harry");
// hermione.addFriend(ron);
// hermione.addFriend(harry);
// hermione.greet(harry);
// hermione.lazyGreet(ron);
// console.log(hermione.createGreetingsForFriends());

