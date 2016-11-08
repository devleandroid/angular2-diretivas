import { Directive, HostListener, HostBinding, 
		 Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
	
  @HostListener('mouseenter') onMouseOver(){
		this.backgroundcolor = this.highlightColor;
  }
 

  @HostListener('mouseleave') onMouseLeave(){
  		this.backgroundcolor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundcolor: string; 


  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';
  constructor() { }

  ngOnInit(){
	this.backgroundcolor = this.defaultColor;  
  }

}
