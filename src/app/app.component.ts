import { Component, OnInit } from '@angular/core';
import { TimelineLite, TweenMax, Back, Power0, Linear, Bounce } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gsap-project';
  animation = false;

  public fOpeningAnim(): void {
    this.animation = true;
    TweenMax.to('#earth', 30, {
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone
    });
    TweenMax.to( '#logo-text', 2, {scale: 20 });
    TweenMax.to( '#astronaut', 2, {scale: 20 , ease: Bounce.easeOut, x: '370'  });

    TweenMax.to('#astronaut', 2, {y: '-30', ease: Linear.easeNone, repeat: -1, yoyo: true});
  }
}
