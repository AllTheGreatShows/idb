from flask import send_from_directory, redirect
from allthegreatshows import app
import os
from allthegreatshows.api import manager

@app.route('/api/search/<string:model>/<path:query>')
def search(model, query):
	name = ""
	if (model == "podcast" or model == "episode"):
		name = "title"
	else:
		name = "name"
	q = {
		"filters": [
			{
				"or": list(map(lambda term: {"name": name, "op": "ilike", "val": "%" + term + "%"}, query.split()))
			}
		]
	}
	return redirect('api/' + model + '?q=' + str(q).replace(' ', '').replace("'", '"'))



BASE_DIR = os.path.abspath(os.path.dirname(__file__))
REACT_DIR = os.path.join(BASE_DIR, '../idb-react/build')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	if path == "":
	    return send_from_directory(REACT_DIR, 'index.html')
	else:
	    if os.path.exists(os.path.join(REACT_DIR, path)):
	        return send_from_directory(REACT_DIR, path)
	    else:
	        return send_from_directory(REACT_DIR, 'index.html')
