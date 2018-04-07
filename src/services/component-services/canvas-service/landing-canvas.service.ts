import { Injectable } from '@angular/core';

@Injectable()
export class LandingCanvasService {

  constructor() { }

  public initCanvas = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const cxt = <CanvasRenderingContext2D>canvas.getContext("2d");
    const img = new Image();

    img.height = canvas.height;
    img.width = canvas.width;
    img.src = "../../../../assets/navigation-controller/photographs/straw_dark_01.jpg";

    img.addEventListener("load", () => {
      cxt.drawImage(img, 0,0, canvas.width, canvas.height);
    }, false);

    // cxt.canvas.style.filter = 'blur(5px) opacity(0.6)';

  };

}
