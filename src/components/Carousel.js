import React, {Component} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// ...


export default class MyCarousel extends Component {
// we check if we got event from input (and it has target property) or just value from Carousel 
state = {
    value: 0,
}

onChange = (e) => this.setState({ value: e.target ? e.target.value : e });

render() {
  return (
    <div>
      <input value={this.state.value} onChange={this.onChange} type="number" />
      <Carousel
        arrows 
        
        value={this.state.value}
        onChange={this.onChange}
      >
        <img src={imageOne} />
        <img src={imageTwo} />
        <img src={imageThree} />
      </Carousel>
    </div>
  );
}