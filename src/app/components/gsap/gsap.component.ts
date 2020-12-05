import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from 'gsap/dist/Flip';
gsap.registerPlugin(Flip);


@Component({
  selector: 'app-gsap',
  templateUrl: './gsap.component.html',
  styleUrls: ['./gsap.component.scss']
})
export class GsapComponent implements OnInit, AfterViewInit {

  @ViewChild("text")
  text: ElementRef;

  @ViewChild("square") square: ElementRef;


  isFullScreen = false;
  scaler = 1.5;
  dur = 0.3 * this.scaler;
  scaleDur = 0.25 * this.scaler;
  delay = this.dur - this.scaleDur;


  constructor() { }

  ngOnInit(): void {



  }

  ngAfterViewInit(){
    
    gsap.from ( 
      this.text.nativeElement, {
        duration:2,
        opacity:0,
        y:"+=50"
      }
    )
  }

  onSquare(_event:any){

    console.log('mouseclick target', _event.target);  
    const state = Flip.getState(this.square.nativeElement);
    console.log('square element', this.square.nativeElement);  
  
    // If the box is opening, use custom durations and easings for some properties
    let customVars = {};

    console.log('isFullScreen', this.isFullScreen );
    this.isFullScreen = !this.isFullScreen;
    console.log('isFullScreen', this.isFullScreen );
    
    if(this.isFullScreen) {
      customVars = {
        x: { ease: "power2" },
        scale: {
          ease: "power1.in",
          delay: this.delay, 
          duration: this.scaleDur  
        }
      }
    } 
    
    Flip.from(state, {
      duration: this.isFullScreen ? this.dur : this.dur / 2, // Faster when "closing"
      scale: true,
      custom: customVars
    });

  }

}
