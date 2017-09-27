from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

podcasts = [
	{
		"title": "Lore",
		"text": "Because sometimes the truth is more frightening than fiction.",
		"image_src": "http://static1.squarespace.com/static/53bc57f0e4b00052ff4d7ccd/t/582efd6d8419c28d0b7c0618/1479474542994/lore-logo-light.png?format=1000w",
		"detail_path": "/podcast/1",
	},
	{
		"title": "Roderick on the Line",
		"text": "Merlin Mann's frank and candid weekly call with John Roderick of the Long Winters.",
		"image_src": "https://pbs.twimg.com/profile_images/1550319029/roderick_on_the_line_sq_400x400.jpg",
		"detail_path": "/podcast/2",
	},
	{
		"title": "BONANZA: The Wedding Year",
		"text": "BONANZA has long been considered an important show about nothing in particular. Now, that all changes with a life-altering project. With his wedding on the horizon, Myke has turned to Matt for life coaching leading up to the big day. Will it be helpful? Maybe. (But probably not.)",
		"image_src": "https://relayfm.s3.amazonaws.com/uploads/broadcast/image_3x/13/bonanza_artwork.png",
		"detail_path": "/podcast/3",
	},
]

episodes = [
	{
		"title": "Episode 69: Wide Open",
		"text": "The sky is full of mystery. It’s big, expansive, and—despite a century of powered human flight—outside our realm of control. Which is why, for centuries, humans have expected things to come down from the sky and harm us. It might sound crazy now, but the possibilities are wide open. And that might not be a good thing.",
		"file_url": "http://traffic.libsyn.com/lorepodcast/Lore69.mp3",
		"podcast_id": "1",
		"detail_path": "/episode/1",
	},
	{
		"title": "Ep. 258: Ambition Hour",
		"text": "The Problem: What constitutes a good cake?",
		"file_url": "http://www.podtrac.com/pts/redirect.mp3/www.merlinmann.com/storage/rotl/rotl_0258.mp3",
		"podcast_id": "2",
		"detail_path": "episode/2",
	},
	{
		"title": "#29: Please, Sir. Can I Have Some Snow?",
		"text": "Never look at the Wikipedia pages of child actors.",
		"file_url": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/bonanza/BONANZA_29.mp3",
		"podcast_id": "3",
		"detail_path": "episode/3",
	},
]

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
	return render_template("episode.html", episode=episodes[episode_id - 1])

if __name__ == "__main__":
    app.run()