from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

podcasts = [
	{
		"title": "Lore",
		"artist": "Aaron Mahnke",
		"genres": {"Comedy":1303, "Podcasts":26, "Technology":1318, "Society & Culture":1324},
		"podcast_url": "https://itunes.apple.com/us/podcast/lore/id978052928?mt=2",
		"release_date": "2017-09-18",
		"artist_url": "https://itunes.apple.com/us/artist/aaron-mahnke/id1009389857?mt=2",
		"country": "USA",
		"podcast_image": "http://is1.mzstatic.com/image/thumb/Music62/v4/2d/3a/00/2d3a00e9-315f-d21c-8af2-6ff591d2f864/source/200x200bb.png",
		"text": "TODO: Add description here",
		"detail_path": "/podcast/1"
	},
	{
		"title": "The Joe Rogan Experience",
		"artist": "Joe Rogan",
		"genres": {"Comedy":1303, "Podcasts":26, "Technology":1318, "Society & Culture":1324},
		"podcast_url": "https://itunes.apple.com/us/podcast/the-joe-rogan-experience/id360084272?mt=2",
		"release_date": "2017-09-17",
		"artist_url": "https://itunes.apple.com/us/artist/joe-rogan/id974891224?mt=2",
		"country": "USA",
		"podcast_image": "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png",
		"text": "TODO: Add description here",
		"detail_path": "/podcast/2"
	},
	{
		"title": "The Splendid Table",
		"artist": "American Public Media",
		"genres": {"Food":1306, "Podcasts":26, "Arts":1301},
		"podcast_url": "https://itunes.apple.com/us/podcast/the-splendid-table/id86997870?mt=2&uo=4",
		"release_date": "2017-09-15",
		"artist_url": "https://itunes.apple.com/us/artist/american-public-media/id127439791?mt=2&uo=4",
		"country": "USA",
		"podcast_image": "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/30x30bb.jpg",
		"text": "TODO: Add description here",
		"detail_path": "/podcast/3"
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

@app.route("/hosts")
def host():
	items = hosts
	for item in items:
		item["image_src"] = hosts[int(item["host_id"]) - 1]["image_src"]
		return render_template("cards.html", items=items)

@app.route("/episode/<int:episode_id>")
def episode(episode_id):
	return render_template("episode.html", episode=episodes[episode_id - 1])

if __name__ == "__main__":
    app.run()