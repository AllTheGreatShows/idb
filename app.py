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
		"image_src": "http://is1.mzstatic.com/image/thumb/Music62/v4/2d/3a/00/2d3a00e9-315f-d21c-8af2-6ff591d2f864/source/200x200bb.png",
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
		"image_src": "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png",
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
		"image_src": "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/200x200bb.jpg",
		"text": "TODO: Add description here",
		"detail_path": "/podcast/3"
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
		"title": "#1016 - Whitney Cummings",
		"text": "Whitney Cummings is a stand up comedian and actress. She is best known as the creator and star of the NBC sitcom Whitney, as well as the co-creator of the CBS sitcom 2 Broke Girls. Her new book \"I'm Fine.... and Other Lies\" will be released on October 3.",
		"file_url": "http://traffic.libsyn.com/joeroganexp/p1016.mp3",
		"podcast_id": "2",
		"detail_path": "episode/2",
	},
	{
		"title": "Episode 639: Filipino Food",
		"text": "This week, we devote our entire show the wonderfully multifaceted food of the Philippines. Amy Besa, author of the award-winning Memories of Philippine Kitchens tells us about the unusual mix of Spanish, Chinese, Mexican, and American influences on Filipino food. Francis Lam goes into the home kitchen of chef King Phojanakong and his mother Emma for a lesson in the delicious seafood sinigang stew. We get an expert list of where to eat great Filipino food across the United States from Joanne Boston of the Filipino Food Movement. We talk to chef Chad Valencia of LASA in Los Angeles about the key ingredients for the Filipino pantry. America's Test Kitchen gives us the recipe and advice for making Filipino-style chicken adobo. And author Jessica Hagedorn reads an excerpt about enjoying the food you love most -- while there's still time -- from her book Dogeaters.",
		"file_url": "http://play.publicradio.org/default/d/podcast/splendid_table/2017/09/22/splendidtable_20170922_64.mp3",
		"podcast_id": "3",
		"detail_path": "episode/3",
	},
]


hosts = [
	{
		"podcast": ["Lore"],
		"title": "Aaron Mahnke",
		"genres": {"Comedy":1303, "Podcasts":26, "Technology":1318, "Society & Culture":1324},
		"podcast_url": "https://itunes.apple.com/us/podcast/lore/id978052928?mt=2",
		"release_date": "2017-09-18",
		"artist_url": "https://itunes.apple.com/us/artist/aaron-mahnke/id1009389857?mt=2",
		"country": "USA",
		"image_src": "http://is1.mzstatic.com/image/thumb/Music62/v4/2d/3a/00/2d3a00e9-315f-d21c-8af2-6ff591d2f864/source/200x200bb.png",
		"text": "TODO: Add description here",
		"detail_path": "/host/1"
	},
	{
		"podcast": ["The Joe Rogan Experience"],
		"title": "Joe Rogan",
		"genres": {"Comedy":1303, "Podcasts":26, "Technology":1318, "Society & Culture":1324},
		"podcast_url": "https://itunes.apple.com/us/podcast/the-joe-rogan-experience/id360084272?mt=2",
		"release_date": "2017-09-17",
		"artist_url": "https://itunes.apple.com/us/artist/joe-rogan/id974891224?mt=2",
		"country": "USA",
		"image_src": "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png",
		"text": "TODO: Add description here",
		"detail_path": "/host/2"
	},
	{
		"podcast": ["The Splendid Table"],
		"title": "American Public Media",
		"genres": {"Food":1306, "Podcasts":26, "Arts":1301},
		"podcast_url": "https://itunes.apple.com/us/podcast/the-splendid-table/id86997870?mt=2&uo=4",
		"release_date": "2017-09-15",
		"artist_url": "https://itunes.apple.com/us/artist/american-public-media/id127439791?mt=2&uo=4",
		"country": "USA",
		"image_src": "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/200x200bb.jpg",
		"text": "TODO: Add description here",
		"detail_path": "/host/3"
	},
]

genres = [
	{
		"name":"Comedy",
		"podcasts": ["The Joe Rogan Experience","Lore"],
		"artists": ["Joe Rogan", "Aaron Mahnke"],
		"genre_id": 1303,
		"number_of_podcasts": 2,
		"image_src": "http://ucwbling.chicagolandwritingcenters.org/wp-content/uploads/2016/03/Comedyscrawl.jpg",
		"detail_path": "/genre/1"

	},
	{
		"name":"Technology",
		"podcasts": ["The Joe Rogan Experience","Lore"],
		"artists": ["Joe Rogan", "Aaron Mahnke"],
		"genre_id": 1318,
		"number_of_podcasts": 2,
		"detail_path": "/genre/2",
		"image_src": "https://medicine.llu.edu/sites/medicine.llu.edu/files/images/Technology.jpg"
	},
	{
		"name":"Food",
		"podcasts": ["The Splendid Table",],
		"artists": ["American Public Media",],
		"genre_id": 1306,
		"number_of_podcasts": 1,
		"detail_path": "/genre/3",
		"image_src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1024px-Good_Food_Display_-_NCI_Visuals_Online.jpg"

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