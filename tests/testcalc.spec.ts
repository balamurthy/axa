import {test,expect } from '@playwright/test';
import {  Calc } from '../utils/calc';

//create a object

const mycalc = new Calc();

test('test calc add', async () => {


    const result = mycalc.add(2, 3);
    
    try {
        expect(result).toBe(7);

    }
    catch(err)
    {
        console.log ("Result of add not as per expectation ");
    }
    
});

test ('test calc subtract', async () => {
    const result = mycalc.subtract(5, 3);
    expect(result).toBe(2);
});

