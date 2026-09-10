import { test, expect } from '@playwright/test';
import { Car } from '../utils/car';

const myCar = new Car();
  
test('car drives at the given speed', async () => {
  const result = myCar.drive(60);

  expect(result).toBe(60);
});

test('car applies the break and stops', async () => {
  myCar.drive(70);

  const breakResult = myCar.applyBreak();
  expect(breakResult).toBe(0);
});
