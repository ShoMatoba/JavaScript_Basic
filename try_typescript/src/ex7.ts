/*
type Animal = {
	species?: string,
    age?: number
}
type Human = {
	name: string;
}
type User = Animal | Human
// Animal型のデータをUser型に代入できる
const tama: User = {
	species : "cat"
}
// Human型のデータもUser型に代入できる
const mike: User = {
	name: "Mike"
}
// Animal型でもHuman型でもないデータを代入しようとするとエラーとなる
const bob: User = {
	age: 33
}
*/
type Animal = {
	species: string;
}
type Human = {
	name: string;
}
type Age = {
    age: number;
}
type User = Animal | Human | Age
// Animal型のデータをUser型に代入できる
const tama: User = {
	species : "cat"
}
// Human型のデータもUser型に代入できる
const mike: User = {
	name: "Mike"
}
// Animal型でもHuman型でもないデータを代入しようとするとエラーとなる
const bob: User = {
	age: 33
}
