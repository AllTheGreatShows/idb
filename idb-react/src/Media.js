import React, {Component} from 'react';
import { Media } from 'reactstrap';


var sampleData = '{"type":"podcast", "title": "The Joe Rogan Experience", "link":"http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "details":"details blah blah blah"}';

const obj = JSON.parse(sampleData);


// function Example(props) {
//     const type = ;
//     switch (props.media_type) {
//         case "podcast":
//             return renderPodcast(props);
//     }
// };

function renderPodcast(obj) {
    return (
        <Media>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.link} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                rendering {obj.media_type}
                {obj.heading}
            </Media>``
                {obj.details}
            </Media>
        </Media>  
        );
}

function renderHosts(obj) {
    return (
        <Media>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.link} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                rendering {obj.media_type}
                {obj.heading}
            </Media>``
                {obj.details}
            </Media>
        </Media>  
        );
}

function renderGenre(obj) {
    return (
        <Media>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.link} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                rendering {obj.media_type}
                {obj.heading}
            </Media>``
                {obj.details}
            </Media>
        </Media>  
        );
}

function renderEpisode(obj) {
    return (
        <Media>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.link} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                rendering {obj.media_type}
                {obj.heading}
            </Media>``
                {obj.details}
            </Media>
        </Media>  
        );
}

class MyMedia extends Component {

    render() {
        switch (obj.type) {
            case "podcast":
                return renderPodcast(obj);
            case "hosts":
                return renderHosts(obj);
            case "genre":
                return renderGenre(obj);
            case "episodes":
                return renderEpisode(obj);
        }
        // return (<Example 
        //     media_type={obj.type}
        //     heading={obj.title}
        //     link={obj.link}
        //     details={obj.details}
        //     />
        // );
    }
}

export default MyMedia;