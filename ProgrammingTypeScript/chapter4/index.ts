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