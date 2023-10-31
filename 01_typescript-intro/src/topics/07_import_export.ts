// Import export
import { Product, taxCalculator } from "./06_function_destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculator({ products: shoppingCart, tax: 0.15 });

console.log('Total', total);
console.log('Tax', tax);

export { };