import {test,expect } from '@playwright/test';
import {  Calc } from '../utils/calc';

//create a object

const mycalc = new Calc();

test('test calc add', async () => {


    const result = mycalc.add(2, 3);
    
    expect(result).toBe(5);

});

test ('test calc subtract', async () => {
    const result = mycalc.subtract(5, 3);
    expect(result).toBe(2);
});

