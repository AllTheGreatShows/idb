# Documentation

### The Ropes, Shown

The codebase can be thought of primarily as two layers: the frontend and the backend. The backend is a Flask application, written in Python. The Flask app is responsible for serving the frontend as well as the API endpoints. The Flask app is what is *actually* run on the server. The frontend is a React.js app, that presents data it fetches from the API. The frontend uses Bootstrap for stylization.

## Backend

### API

Save for the search endpoint, the API is build automatically by a framework called Flask-Restless. We provide Flask-Restless with our SQL-Alchemy models, and it does the rest. This can be seen in [`api.py`](https://github.com/AllTheGreatShows/idb/blob/master/allthegreatshows/api.py) The search API is simply a convenience route that redirects to a route defined by Flask-Restless. This is inside [`views.py`](https://github.com/AllTheGreatShows/idb/blob/master/allthegreatshows/views.py).

### Serving the frontent

The only other route defined in [`views.py`](https://github.com/AllTheGreatShows/idb/blob/master/allthegreatshows/views.py) is the route that serves the files for the frontend. This route, named `serve`, reaches into the build folder produced by React and gives the appropriate file.

#### Other important files

* [`models.py`](https://github.com/AllTheGreatShows/idb/blob/master/allthegreatshows/models.py)
* [`run.py`](https://github.com/AllTheGreatShows/idb/blob/master/run.py)
