import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    // src: "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png",
src: "https://i.ytimg.com/vi/Gb1-MuRcgsc/maxresdefault.jpg",
      altText: "",//"The Joe Rogan Experience",
    caption: ""//"The Joe Rogan Experience"
  },
  {
    // src: "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/200x200bb.jpg",
    src: "https://www.nextpittsburgh.com/wp-content/uploads/2016/02/marta2.jpg",
      altText: "",//"The Splendid Table",
    caption: ""//"The Splendid Table"
  },
  {
    // src: "http://is1.mzstatic.com/image/thumb/Music118/v4/f4/d2/18/f4d218f7-cc28-e9f2-69f6-958abc6cd9b0/source/200x200bb.png",
    src: "https://assets.entrepreneur.com/content/3x2/1300/20170907190559-GettyImages-722208887.jpeg",
      altText: "Rough Translation",
    caption: "Rough Translation"
  }
];

//style="max-height: 100%; object-fit: cover;" 

class Mycarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
          {/*<CarouselCaption captionHeader={item.caption} />*/}
        </CarouselItem>
      );
      //captionText={item.caption} 
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Mycarousel;