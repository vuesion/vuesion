export const CircleAnimation = (canvas: HTMLCanvasElement | any): any => {
  /**
   * context 2D information
   */
  const canvasWidth: number = canvas.width;
  const canvasHeight: number = canvas.height;
  const context: CanvasRenderingContext2D | any = canvas.getContext('2d');

  /**
   * utils
   */
  const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const random = (min: number, max: number): number => {
    return min + Math.random() * max;
  };

  /**
   * circle class
   */
  class Circle {
    private opacity: number = random(0.05, 0.9);
    private counter: number = 0;
    private direction: number = 0;

    constructor(private radius: number,
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

      context.beginPath();

      context.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
        this.yPos + Math.sin(this.counter / 100) * this.radius,
        this.width,
        0,
        Math.PI * 2,
        false);

      context.closePath();

      context.fillStyle = 'rgba(255, 255, 255,' + this.opacity + ')';
      context.fill();

      if (this.opacity <= 0) {
        this.counter = 0;
        this.opacity = random(0.05, 0.9);
        this.width = randomInt(2, 10);
        this.speed = random(0.1, 0.8);
      }
    }
  }

  /**
   * initial set of circles
   */
  const circleCount: number = 50;
  const getCircles = (): Circle[] => {
    const localCircles: any[] = [];

    for (let i = 0; i < circleCount; i++) {
      localCircles.push(new Circle(
        randomInt(50, 150),
        random(0.1, 0.8),
        random(2, 10),
        randomInt(0, canvasWidth),
        randomInt(0, canvasHeight),
      ));
    }

    return localCircles;
  };
  const circles: Circle[] = getCircles();

  /**
   * draw and update function
   */
  const draw = (): void => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    circles.forEach((circle: Circle) => {
      circle.update();
    });

    (window as any).requestAnimationFrame(draw);
  };

  if (context) {
    draw();
  }

  return {
    draw,
    circles,
  };
};
