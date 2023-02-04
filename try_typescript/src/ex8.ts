type Data<T> = {
	dataType: T
}
const strData:Data<string> = {dataType:"文字列"}
const numData:Data<number> = {dataType:123}
function makeArray<T>(param1: T, param2: T): T[]{
	return [param1, param2]
}
// function add<T>(param1: T, param2: T): T{
// 	return param1+param2
// }
console.log(makeArray<string>("abc", "xyz"))
console.log(makeArray<number>(123, 456))
