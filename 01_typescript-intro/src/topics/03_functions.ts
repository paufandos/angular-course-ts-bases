//Functions
function addNumbers(a: number, b: number): number {
    return a + b;
};
const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiply(firstNumber: number, base: number = 2): number {
    return firstNumber * base
};

const result: number = addNumbers(1, 2)
const arrowResult: string = addNumbersArrow(1, 2)
const multiplyResult: number = multiply(5)
console.log({ result, arrowResult, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void
};
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
};

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Health points: ${this.hp}`);

    }
};

healCharacter(strider, 10);
strider.showHp();

export { };