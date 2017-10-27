import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Media, Jumbotron, Button} from 'reactstrap';

// VALID MEDIA TYPES
// podcast
// provider
// episode
// genre

// used this block to test
// var sampleData = '{"media_type":"podcast", "title": "The Joe Rogan Experience", "image_url":"http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "description":"details blah blah blah", "id":"some id", "itunes_id": "some itunes id", "feed_url":"some feed url", "episodes":"some episodes", "provider_id":"some provider id", "genres":"some genres"}';

// PODCASTS, runs when media_type == "podcast"
// image_url = db.Column(db.String(255))
// title = db.Column(db.String(255))
// ********************************************
// description = db.Column(db.String(255))
// genres = db.relationship('Genre', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))
// id = db.Column(db.Integer, primary_key=True)
// feed_url = db.Column(db.String(255))
// episodes = db.relationship('Episode', backref='podcast', lazy=True)
// provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'))
// itunes_id = db.Column(db.Integer)
function renderPodcast(obj) {
    var i = this.props.index;
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj[i]["image_url"]} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj[i]["media_type"]} <br/>
                {obj[i]["title"]}
            </Media>
                description: {obj[i]["description"]} <br/>
                genre: {obj[i]["genres"]} <br/>
                id: {obj[i]["id"]} <br/>
                feed_url: {obj[i]["feed_url"]} <br/>
                episodes: {obj[i]["episodes"]} <br/>
                provider_id: {obj[i]["provider_id"]} <br/>
                itunes_id: {obj[i]["itunes_id"]} <br/>
                

            </Media>
        </Card>  
        );
}

// PROVIDERS, runs when media_type == "provider"
// ****TODO OR WILL NOT WORK!!!****
// image URL

// name = db.Column(db.String(255))
// image_url
// ********************************************
// id = db.Column(db.Integer, primary_key=True)
// itunes_id = db.Column(db.Integer)
// podcasts = db.relationship('Podcast', backref='provider', lazy=True)
function renderProvider(obj) {
    var i = this.props.index;
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj[i]["image_url"]} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj[i]["media_type"]}<br/>
                {obj[i]["name"]}
            </Media>``
                description: {obj[i]["description"]} <br/>
                id: {obj[i]["id"]} <br/>
                podcasts: {obj[i]["podcasts"]} <br/>

            </Media>
        </Card>  
        );
}

// GENRE, runs when media_type == "genre"
// ****TODO OR WILL NOT WORK!!!****
// image_url attribute

// name = db.Column(db.String(255), unique=True, nullable=False)
// ********************************************
// podcasts = db.relationship('Podcast', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))
// itunes_id = db.Column(db.Integer)
// id = db.Column(db.Integer, primary_key=True)
function renderGenre(obj) {
    var i = this.props.index;
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj[i]["image_url"]} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj[i]["media_type"]} <br/>
                {obj[i]["name"]}
            </Media>``
                podcasts: {obj[i]["podcasts"]} <br/>
                itunes id: {obj[i]["itunes_id"]} <br/>
                id: {obj[i]["id"]} <br/>
            </Media>
        </Card>  
        );
}

// EPISODES, runs when media_type == "episode"
// ****TODO OR WILL NOT WORK!!!****
// image_url attribute

// title = db.Column(db.String(255))
// description = db.Column(db.String)
// ********************************************
// id = db.Column(db.Integer, primary_key=True)
// published = db.Column(db.DateTime)
// file_url = db.Column(db.String)
// podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'), nullable=False)
function renderEpisode(obj) {
    var i = this.props.index;
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj[i]["image_url"]} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj[i]["media_type"]}<br/>
                {obj[i]["title"]}
            </Media>``
                description: {obj[i]["description"]} <br/>
                id: {obj.id} <br/>
                published: {obj[i]["published"]} <br/>
                file_url: {obj[i]["file_url"]} <br/>
                podcast_id: {obj[i]["podcast_id"]} <br/>
            </Media>
        </Card>  
        );
}

class MyMedia extends Component {

    render() {
        // const obj = JSON.parse(sampleData);
        const obj = this.props.json;
        console.log(this.props.media_type);
        switch (this.props.media_type) {
            case "podcast":
                return renderPodcast(obj);
            case "provider":
                return renderProvider(obj);
            case "genre":
                return renderGenre(obj);
            case "episode":
                return renderEpisode(obj);
        }
    }
}

export default MyMedia;