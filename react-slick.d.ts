declare module 'react-slick' {
    import { Component } from 'react';
  
    interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
    }
  
    export default class Slider extends Component<SliderProps> {}
  }
  