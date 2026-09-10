export class Car {
  private speed: number = 0;

  drive(speed: number): number {
    this.speed = speed;
    return this.speed;
  }

  applyBreak(): number {
    this.speed = 0;
    return this.speed;
  }

  
}
