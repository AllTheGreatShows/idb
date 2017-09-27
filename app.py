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

@app.route("/podcasts")
def podcasts_page():
	return render_template("cards.html", items=podcasts)

@app.route("/podcast/<int:podcast_id>")
def podcast(podcast_id):
	return render_template("podcast.html", podcast=podcasts[podcast_id - 1])

if __name__ == "__main__":
    app.run()