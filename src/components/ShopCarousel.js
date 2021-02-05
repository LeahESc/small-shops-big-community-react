import React, {Component} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Shop from './Shop';


export default class ShopCarousel extends Component {

  state = {
      value: 0,
  }

  onChange = (e) => this.setState({ value: e.target ? e.target.value : e });

  render() {
    const shop = this.props.shop 

    const imageOne ='https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80' 
    const imageTwo ='https://images.unsplash.com/photo-1529417305485-480f579e7578?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=809&q=80' 
    const imageThree ='https://images.unsplash.com/photo-1540380968028-950d9ea1507e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80' 
   
    return (
      <div>
        <Carousel
          arrows >
          <img src={imageOne} />
          <img src={imageTwo} />
          <img src={imageThree} />
        </Carousel>
      </div>
    )
  }
}