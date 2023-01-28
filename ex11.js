class MyClass {
	constructor(size, age){
		this.size = size;
		this.age = age;
	}
	print_size(){
		console.log(this.size);
	}
	add_age(x){
		this.age += x;
	}
}
my_obj = new MyClass(160, 53);
my_obj.print_size()
my_obj.add_age(3)

let my_class = {
age: 53,
size: 160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}
my_class.add_age(4);
my_class.age;