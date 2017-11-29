from flask import Flask, render_template
import os
from scraper import scrape


app = Flask(__name__, template_folder=os.path.dirname(os.path.abspath(__file__)))


@app.route("/")
def index():
    return render_template("index.html")


print("Scraping...")
scrape()
print("Done!")

app.run()
