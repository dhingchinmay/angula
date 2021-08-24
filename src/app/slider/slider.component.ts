import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  title = 'map-demo';

  slides = [
    {img: 'https://www.teahub.io/photos/full/159-1596043_rental-policy-and-application-rental-homes.jpg'},
    {img: 'https://assets.gqindia.com/photos/5e43b4d83e85490008773570/master/pass/These%204%20extremely%20lavish%20&%20expensive%20properties%20in%20Delhi%20will%20cost%20you%20up%20to%20Rs%207.5%20lakh%20rent%E2%80%94on%20a%20monthly%20basis.jpg'},
    {img: 'https://media.architecturaldigest.com/photos/60b673bb86fada7af9b209a9/16:9/w_2560%2Cc_limit/ROL_5791.jpg'},
    {img: 'https://www.norandex.com/media/1402/wheat-house.jpg'}
  ];
  // slideConfig = {slidesToShow: 4, slidesToScroll: 4};
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000
  };
  constructor() { }

  ngOnInit(): void {  
  }

  removeSlide(): void {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any): void {
    console.log('slick initialized');
  }

  breakpoint(e: any): void {
    console.log('breakpoint');
  }

  afterChange(e: any): void {
    //console.log('afterChange');
  }

  beforeChange(e: any): void {
    //console.log('beforeChange');
  }
}
