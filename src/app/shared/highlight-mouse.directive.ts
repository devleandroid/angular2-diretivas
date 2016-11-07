import { Directive, HostListener, HostBinding, 
		 ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
/*
  	this._render.setElementStyle(
  		this._elementRef.nativeElement,
  		'background-color',
  		'blue')*/
  		this.backgroundcolor = 'yellow';
  }
 

  @HostListener('mouseleave') onMouseLeave(){
/*
  	this._render.setElementStyle(
  		this._elementRef.nativeElement,
  		'background-color',
  		'white')*/
  		this.backgroundcolor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundcolor: string; 

  @HostBinding('style.backgroundColor') get setColor(){

  	return this.backgroundcolor;
  }

  private backgroundcolor: string;

  constructor(//private _elementRef: ElementRef,
  			  //private _render: Renderer
  			  ) { }

}
