from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

itunes_data = json.load(open('itunes_data.json'))
itunes_results = itunes_data["feed"]["results"]

def parse_itunes_result(result):
	item = {}
	item["title"] = result["name"]
	item["image_src"] = result["artworkUrl100"]
	return item

podcasts = list(map(parse_itunes_result, itunes_results))

@app.route("/podcasts")
def podcasts_page():
	return render_template('cards.html', items=podcasts)

if __name__ == "__main__":
    app.run()