import React, {Component} from 'react';
import { Media } from 'reactstrap';

// [name, image link, details]

// var sampleData = [["The Joe Rogan Experience", "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "details"],
// ["The Splendid Table", "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/200x200bb.jpg", "detail"],
// ["Rough Translation", "http://is1.mzstatic.com/image/thumb/Music118/v4/f4/d2/18/f4d218f7-cc28-e9f2-69f6-958abc6cd9b0/source/200x200bb.png", "details"]];


// var sampleData = [["The Joe Rogan Experience", "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "details"]];

var sampleData = '{"title": "The Joe Rogan Experience", "link":"http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "details":"details blah blah blah"}';

const obj = JSON.parse(sampleData);


function Example(props) {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" img src={props.link} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
            {props.heading}
        </Media>
            {props.details}
      </Media>
    </Media>

    
  );
};

class MyMedia extends Component {
    renderCard(i) {
        return (<Example 
            heading={obj.title}
            link={obj.link}
            
            details={obj.details}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderCard(0)}
            </div>
        );
    }
}

export default MyMedia;