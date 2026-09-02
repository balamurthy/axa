import {test,expect } from '@playwright/test';

import { add, subtract } from '../calculator';

test('test calculator add', async () => {

    const result = await add(2, 3);
    expect(result).toBe(5);

});

test ('test calculator subtract', async () => {
    const result = await subtract(5, 3);
    expect(result).toBe(2);
});

