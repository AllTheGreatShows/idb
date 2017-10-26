from unittest import main, TestCase
import json
from allthegreatshows.models import Podcast, Episode, Provider, Genre
from allthegreatshows import app, db
from datetime import datetime

app = app.test_client()

class DBTests(TestCase):
    def test_create_podcast(self):
        itunes_data = {
            "collectionName": "Shooting the Breeze",
            "collectionId": 0,
            "artworkUrl600": "https://www.rtoinsider.com/wp-content/uploads/Wind-Turbines-PacifiCorp-FI.jpg",
            "feedUrl": "http://feeds.feedburner.com/RoderickOnTheLine",
        }
        podcast = Podcast(itunes_data)
        db.session.add(podcast)
        db.session.commit()
        query = db.session.query(Podcast).filter_by(title="Shooting the Breeze").first()
        self.assertEqual(query.title, "Shooting the Breeze")
        self.assertEqual(query.image_url, "https://www.rtoinsider.com/wp-content/uploads/Wind-Turbines-PacifiCorp-FI.jpg")
        self.assertEqual(query.feed_url, "http://feeds.feedburner.com/RoderickOnTheLine")
        db.session.delete(podcast)
        db.session.commit()
    
    def test_create_provider(self):
        provider = Provider(name="Department of Homeland Obscurity")
        db.session.add(provider)
        db.session.commit()
        query = db.session.query(Provider).filter_by(name="Department of Homeland Obscurity").first()
        self.assertEqual(query.name, "Department of Homeland Obscurity")
        db.session.delete(provider)
        db.session.commit()

    def test_create_genre(self):
        genre = Genre(name="Disco")
        db.session.add(genre)
        db.session.commit()
        query = db.session.query(Genre).filter_by(name="Disco").first()
        self.assertEqual(query.name, "Disco")
        db.session.delete(genre)
        db.session.commit()

    def test_create_episode(self):
        published = datetime.now()
        episode = Episode(podcast_id=1, title="Tall Ships", description="This week we talked about tall ships.", published=published, file_url="http://www.podtrac.com/pts/redirect.mp3/www.merlinmann.com/storage/rotl/rotl_0262.mp3")
        db.session.add(episode)
        db.session.commit()
        query = db.session.query(Episode).filter_by(title="Tall Ships").first()
        self.assertEqual(query.title, "Tall Ships")
        self.assertEqual(query.description, "This week we talked about tall ships.")
        self.assertEqual(query.published, published)
        self.assertEqual(query.file_url, "http://www.podtrac.com/pts/redirect.mp3/www.merlinmann.com/storage/rotl/rotl_0262.mp3")
        db.session.delete(episode)
        db.session.commit()

    def test_podcast_endpoint(self):
        response = app.get("/api/podcast")
        data = json.loads(response.data)
        num_results = data['num_results']
        objects = data['objects']
        self.assertEqual(num_results , len(objects))

    def test_provider_endpoint(self):
        response = app.get("/api/provider")
        data = json.loads(response.data)
        num_results = data['num_results']
        objects = data['objects']
        self.assertEqual(num_results , len(objects))

    def test_genre_endpoint(self):
        response = app.get("/api/genre")
        data = json.loads(response.data)
        num_results = data['num_results']
        objects = data['objects']
        self.assertEqual(num_results , len(objects))

    def test_episode_endpoint(self):
        response = app.get("/api/episode")
        data = json.loads(response.data)
        num_results = data['num_results']
        objects = data['objects']
        self.assertEqual(num_results , len(objects))

        
if __name__ == "__main__":
    main()