from flask import render_template

from allthegreatshows import app
from allthegreatshows.hardcoded_data import podcasts, episodes, hosts, genres


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