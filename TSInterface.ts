interface Rectangle{
    height : number,
    width : number
}
interface Circle{
    radius : number
}
//Interfaces allows extending multiple interfaces
interface AllShapes extends Rectangle, Circle{
    color : string
}
const allShapes : AllShapes = {
    height : 20,
    width : 10,
    radius : 14,
    color : 'red'
}
console.log(allShapes);