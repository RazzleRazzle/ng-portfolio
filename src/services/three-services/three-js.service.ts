import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class ThreeJsService {
  private element:any;
  private scene:any;
  private camera:any;
  private renderer:any;
  private geometry:any;
  private canvas:any;
  private context:any;

  constructor() { }

  public init = () => {
    this.setElement();
    this.createContexts();
    this.element.appendChild(this.renderer.domElement);
  }

  private setElement = () => {
    this.element = document.getElementById('three-element');
  }

  private createContexts = () => {
    this.scene = new THREE.Scene();
    this.scene.backgound = new THREE.Color(0xffffff);

    this.camera = new THREE.PerspectiveCamera( 60, (window.innerWidth/2) / (window.innerHeight/2), 1, 10000 );
    this.camera.position.z = 200;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    //--------find better constraint
    this.renderer.setSize(500, 500);

    this.canvas = document.createElement('canvas');
    this.element.innnerHTML = this.canvas;
    this.canvas.width = 500;
    this.canvas.height = 500;

    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = 'rgb(' + Math.floor( Math.random() * 256 ) + ',' + Math.floor( Math.random() * 256 ) + ',' + Math.floor( Math.random() * 256 ) + ')';
    this.context.fillRect( 0, 0, 256, 256 );
  }

  private createImage = () => {
    this.context.fillStyle = 'rgb(' + Math.floor( Math.random() * 256 ) + ',' + Math.floor( Math.random() * 256 ) + ',' + Math.floor( Math.random() * 256 ) + ')';
    this.context.fillRect( 0, 0, 256, 256 );
  }


  public animate = () => {
    requestAnimationFrame(this.animate);
    this.createImage();
    this.render();
  }

  private render = () => {
    var geometry = new THREE.SphereBufferGeometry( 50, Math.random() * 64, Math.random() * 32 );
    // var texture = new THREE.CanvasTexture( this.createImage() );
    var material = new THREE.MeshNormalMaterial();
    // new THREE.MeshBasicMaterial( { map: texture, wireframe: true } );
    var mesh = new THREE.Mesh( geometry, material );
    this.scene.add( mesh );
    this.renderer.render( this.scene, this.camera );
    this.scene.remove( mesh );
    // clean up
    geometry.dispose();
    material.dispose();
    // texture.dispose();
  }
}
