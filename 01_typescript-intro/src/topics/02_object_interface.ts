//Objects and interfaces
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const skills: string[] = ['Bash', 'Counted', 'Healing'];
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: skills
}
strider.hometown = 'Rivendell'
console.table(strider);


export { };