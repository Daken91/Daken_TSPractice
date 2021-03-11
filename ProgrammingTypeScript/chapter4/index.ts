type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
    //...
}

/*type Reserve = {
    (from: Date, destination: string, to?: Date): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, destination: string, to?: Date) => {
    //...
}*/

type createElement = {
    (tag: "a"): HTMLAnchorElement
    (tag: "canvas"): HTMLCanvasElement
    (tag: "table"): HTMLTableElement
    (tag: string): HTMLElement
}

/*let createElement: CreateElement = (tag: string): HTMLElement => {
    //...
}*/
/*let createElement: CreateElement = (tag: "a"): HTMLAnchorElement => {
    //...
}*/
function createElement (tag: string): HTMLElement {
    //...
}

/*type Map = {
    <T>(array: T[], f: (item: T) => T): T[]
}*/
type Map = {
    <T,U>(array: T[], f: (item: T) => U): U[]
}

//Practice

//4.3
/*type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        //宿泊旅行を予約する
    } else if (typeof toOrDestination === "string") {
        //日帰り旅行を予約する
    }
}
↓ */
type Reservation = unknown

type Reserve = {
    (fromOrDestination: Date, to: Date, destination: string): Reservation
    (fromOrDestination: Date, destination: string): Reservation
    (fromOrDestination: string): Reservation
}

let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
    if (toOrDestination instanceof Date && destination !== undefined) {  //→if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
        //宿泊旅行を予約する
    } else if (typeof toOrDestination === "string") {  //→if (fromOrDestination instanceof Date && typeof toOrDestination === "string") {
        //日帰り旅行を予約する
    } else if (typeof fromOrDestination === "string") {
        //すぐ出発する旅行を予約する
    }
}


//4.4
/*function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}
↓ */

function call<T extends string[], R>(  //function call<T extends [unknown, string, ...unknown[]], R>(  //「2番目の引数」の解釈が違った
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

//4.5
//最後以外はいけるやつ
function is<T> (a: T, b: T){
    return a === b;
}

//最後も含めて行けるやつ
function is<T> (a: T, ...b: T[]){  //function is<T> (a: T, ...b: [T, ...T[]]){
    return b.every(x => x === a);
}