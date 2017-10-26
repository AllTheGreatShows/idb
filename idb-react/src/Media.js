import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Media, Jumbotron, Button} from 'reactstrap';

// VALID MEDIA TYPES
// podcast
// hosts (plural!)
// episodes (plural!)
// genre
var sampleData = '{"media_type":"podcast", "title": "The Joe Rogan Experience", "image_url":"http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png", "description":"details blah blah blah", "id":"some id", "feed_url":"some feed url", "episodes":"some episodes", "provider_id":"some provider id", "genres":"some genres"}';

const obj = JSON.parse(sampleData);

// PODCASTS, runs when media_type == "podcast"
// required keys in the json for this function to work
// image_url = db.Column(db.String(255))
// title = db.Column(db.String(255))

// description = db.Column(db.String(255))
// genres = db.relationship('Genre', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))
// id = db.Column(db.Integer, primary_key=True)
// feed_url = db.Column(db.String(255))
// episodes = db.relationship('Episode', backref='podcast', lazy=True)
// provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'))
// itunes_id = db.Column(db.Integer)
function renderPodcast(obj) {
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.image_url} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj.media_type} <br/>
                {obj.title}
            </Media>
                description: {obj.description} <br/>
                genre: {obj.genres} <br/>
                id: {obj.id} <br/>
                feed_url: {obj.feed_url} <br/>
                episodes: {obj.episodes} <br/>
                provider_id: {obj.provider_id} <br/>
                itunes_id: {obj.itunes_id} <br/>
                

            </Media>
        </Card>  
        );
}

// PROVIDERS, runs when media_type == "hosts"
// ****TODO OR WILL NOT WORK!!!****
// image URL

// name = db.Column(db.String(255))
// image_url

// id = db.Column(db.Integer, primary_key=True)
// itunes_id = db.Column(db.Integer)
// podcasts = db.relationship('Podcast', backref='provider', lazy=True)
function renderHosts(obj) {
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.image_url} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj.media_type}<br/>
                {obj.name}
            </Media>``
                description: {obj.description} <br/>
                id: {obj.id} <br/>
                podcasts: {obj.podcasts} <br/>

            </Media>
        </Card>  
        );
}

// GENRE, runs when media_type == "genre"
// ****TODO OR WILL NOT WORK!!!****
// image_url attribute

// name = db.Column(db.String(255), unique=True, nullable=False)

// podcasts = db.relationship('Podcast', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))
// itunes_id = db.Column(db.Integer)
// id = db.Column(db.Integer, primary_key=True)
function renderGenre(obj) {
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.image_url} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj.media_type} <br/>
                {obj.name}
            </Media>``
                podcasts: {obj.podcasts} <br/>
                itunes id: {obj.itunes_id} <br/>
                id: {obj.id} <br/>
            </Media>
        </Card>  
        );
}

// EPISODES, runs when media_type == "episodes"
// ****TODO OR WILL NOT WORK!!!****
// image_url attribute

// title = db.Column(db.String(255))
// description = db.Column(db.String)

// id = db.Column(db.Integer, primary_key=True)
// published = db.Column(db.DateTime)
// file_url = db.Column(db.String)
// podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'), nullable=False)
function renderEpisode(obj) {
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={obj.image_url} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                Information on {obj.media_type}<br/>
                {obj.title}
            </Media>``
                description: {obj.description} <br/>
                id: {obj.id} <br/>
                published: {obj.published} <br/>
                file_url: {obj.file_url} <br/>
                podcast_id: {obj.podcast_id} <br/>
            </Media>
        </Card>  
        );
}

class MyMedia extends Component {

    render() {
        switch (obj.media_type) {
            case "podcast":
                return renderPodcast(obj);
            case "hosts":
                return renderHosts(obj);
            case "genre":
                return renderGenre(obj);
            case "episodes":
                return renderEpisode(obj);
        }
    }
}

export default MyMedia;