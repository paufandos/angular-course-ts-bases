// TypeScript basic types -> strict types
const name: string = "Pau Fandos";
let hpPoints: number | "FULL" = 95;
const isAlive: boolean = true;


hpPoints = "FULL"
console.log({
    name, hpPoints, isAlive
});


export { };