from allthegreatshows import app
import json

# Podcast

@app.route("/api/podcasts")
def api_podcasts():
	return json.dumps([])

@app.route("/api/podcast/<int:id>")
def api_podcast(id):
	return json.dumps({})


# Episode

@app.route("/api/episodes")
def api_episodes():
	return json.dumps([])

@app.route("/api/episode/<int:id>")
def api_episode(id):
	return json.dumps({})


# Provider

@app.route("/api/providers")
def api_providers():
	return json.dumps([])

@app.route("/api/provider/<int:id>")
def api_provider(id):
	return json.dumps({})


# Genre

@app.route("/api/genres")
def api_genres():
	return json.dumps([])

@app.route("/api/genre/<int:id>")
def api_genre(id):
	return json.dumps({})


