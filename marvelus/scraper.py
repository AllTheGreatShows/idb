import json
import ssl
import requests

def objects_at_page(model, page):
    return requests.get("http://marvelus.me/api/" + model + "?page=" + str(page)).json()["objects"]

def total_pages(model):
    return requests.get("http://marvelus.me/api/" + model).json()["total_pages"]

def all_objects(model):
    objects = []
    pages = total_pages(model)
    for page in range(1, pages + 1):
        objects += objects_at_page(model, page)
    return objects

def scrape():
    outfile = open("static/data.json", 'w')
    models = [
        ("actor", "actor"),
        ("character", "character"),
        ("comic_series", "comicSeries"),
        ("event", "event"),
        ("movie", "movie"),
        ("tv_show", "tvShow"),
    ]
    for model in models:
        print("Starting model " + model[0])
        outfile.write("var " + model[1] + "List = ")
        json.dump(all_objects(model[0]), outfile)
        outfile.write(";\n")
        print("Finished " + model[0])
