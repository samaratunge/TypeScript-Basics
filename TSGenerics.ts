function createPair<T, S> (V1 : T, V2 : S) : [T, S]{
    return [V1, V2];
}
console.log(createPair<string, number>('hello', 42));
console.log(createPair<number, number>(10, 20));
console.log(createPair<boolean, boolean>(true, false));

interface Point{
    x : number;
    y : number;
}
let pointPart : Partial<Point> = {};
pointPart.y = 20;
console.log(pointPart);

