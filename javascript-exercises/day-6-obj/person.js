function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
var jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

sonny.greet(jordan);
jordan.greet(sonny);

console.log(sonny.name, "| Email:", sonny.email, "| Phone:", sonny.phone);
console.log(jordan.name, "| Email:", jordan.email, "| Phone:", jordan.phone);
