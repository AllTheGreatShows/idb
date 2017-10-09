from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from hardcoded_data import podcasts, episodes, hosts, genres
import json

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:allthegreatshows@35.192.68.48/postgres"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Models


genres = db.Table(
    'genres',
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True),
    db.Column('podcast_id', db.Integer, db.ForeignKey('podcast.id'), primary_key=True)
)


class Podcast(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    description = db.Column(db.String(255), unique=True, nullable=False)
    image_url = db.Column(db.String(255), unique=True, nullable=False)
    episodes = db.relationship('Episode', backref='podcast', lazy=True)
    provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'), nullable=False)

    def __repr__(self):
        return '<Podcast %r>' % self.title


class Episode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'), nullable=False)
    image_url = db.Column(db.String(255), unique=True, nullable=False)

    def __repr__(self):
        return '<Episode %r>' % self.title


class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    podcasts = db.relationship('Podcast', backref='provider', lazy=True)

    def __repr__(self):
        return '<Provider %r>' % self.name


class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    podcasts = db.relationship('Podcast', secondary=genres, lazy='subquery', backref=db.backref('genres', lazy=True))

    def __repr__(self):
        return '<Genre %r>' % self.name



@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/podcasts")
def podcasts_page():
	return render_template("cards.html", items=podcasts)

@app.route("/podcast/<int:podcast_id>")
def podcast(podcast_id):
	return render_template("podcast.html", podcast=podcasts[podcast_id - 1])

@app.route("/episodes")
def episode_page():
	items = episodes
	for item in items:
		item["image_src"] = podcasts[int(item["podcast_id"]) - 1]["image_src"]
	return render_template("cards.html", items=items)

@app.route("/episode/<int:episode_id>")
def episode(episode_id):
	e = episodes[episode_id - 1]
	g = list(podcasts[int(e["podcast_id"]) - 1]["genres"].keys())[0]
	return render_template("episode.html", episode=e, genre=g)

@app.route("/genres")
def genre_page():
	return render_template("cards.html", items=genres)

@app.route("/genre/<int:genre_id>")
def genre(genre_id):
	return render_template("genre.html", genre=genres[genre_id - 1])

@app.route("/hosts")
def host_page():
	return render_template("cards.html", items=hosts)

@app.route("/host/<int:host_id>")
def host(host_id):
	return render_template("host.html", host=hosts[host_id - 1])



if __name__ == "__main__":
    app.run()