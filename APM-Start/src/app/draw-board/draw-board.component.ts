import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing-board',
  template: `
    <canvas #canvas
            style="position: absolute;
                   top: 0;
                   left: 0;
                   width: 100%;
                   height: 100%;
                   background-color: white;
                   border: 1px solid black;
                   z-index: 1">
    </canvas>
  `
})
export class DrawingBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private lastX!: number;
  private lastY!: number;
  private drawing = false;

  constructor() {}

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.canvas.addEventListener('mousedown', (event: MouseEvent) => {
      this.drawing = true;
      this.lastX = event.clientX - this.canvas.offsetLeft;
      this.lastY = event.clientY - this.canvas.offsetTop;
    });

    this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
      if (this.drawing) {
        const currentX = event.clientX - this.canvas.offsetLeft;
        const currentY = event.clientY - this.canvas.offsetTop;
        this.draw(this.lastX, this.lastY, currentX, currentY);
        this.lastX = currentX;
        this.lastY = currentY;
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      this.drawing = false;
    });
  }

  draw(x1: number, y1: number, x2: number, y2: number) {
    this.context.beginPath();
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 1;
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }
}
