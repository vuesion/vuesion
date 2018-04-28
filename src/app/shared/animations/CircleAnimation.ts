import { random, randomInt } from '../utils/misc';

class Circle {
  private opacity: number = random(0.05, 0.9);
  private counter: number = 0;
  private direction: number = 0;

  constructor(private context: CanvasRenderingContext2D | any,
              private radius: number,
              private speed: number,
              private width: number,
              private xPos: number,
              private yPos: number) {

    this.direction = randomInt(0, 1) === 1 ? -1 : 1;
  }

  public update(): void {
    this.counter += this.direction * this.speed;

    const opacityDirection: number = randomInt(0, 1) === 1 ? -1 : 1;
    this.opacity += opacityDirection * (randomInt(0, 999) / 50000);

    this.context.beginPath();

    this.context.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
      this.yPos + Math.sin(this.counter / 100) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false);

    this.context.closePath();

    this.context.fillStyle = 'rgba(255, 255, 255,' + this.opacity + ')';
    this.context.fill();

    if (this.opacity <= 0) {
      this.counter = 0;
      this.opacity = random(0.05, 0.9);
      this.width = randomInt(2, 10);
      this.speed = random(0.1, 1);
    }
  }
}

const getCircles = (circleCount: number, canvas: HTMLCanvasElement | any, context: CanvasRenderingContext2D | any): Circle[] => {
  const localCircles: any[] = [];

  for (let i = 0; i < circleCount; i++) {
    localCircles.push(new Circle(
      context,
      randomInt(50, 350),
      random(0.1, 1),
      random(2, 10),
      randomInt(0, canvas.width),
      randomInt(0, canvas.height),
    ));
  }

  return localCircles;
};

const draw = (canvas: HTMLCanvasElement | any, context: CanvasRenderingContext2D | any, circles: Circle[]): void => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle: Circle) => {
    circle.update();
  });

  /* istanbul ignore next */
  (window as any).requestAnimationFrame(() => {
    draw(canvas, context, circles);
  });
};

export const CircleAnimation = (canvas: HTMLCanvasElement | any): any => {
  const context: CanvasRenderingContext2D | any = canvas.getContext('2d');
  const circleCount: number = 50;
  const circles: Circle[] = getCircles(circleCount, canvas, context);

  if (context) {
    draw(canvas, context, circles);
  }

  return {
    draw,
    circles,
  };
};
