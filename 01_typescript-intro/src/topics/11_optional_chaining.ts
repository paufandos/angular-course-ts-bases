export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Pau Fandos'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number => {
    const noChildren = 0
    const { name, children } = passenger
    const howManyChildren = children?.length || noChildren;
    console.log(name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1)
returnChildrenNumber(passenger2)