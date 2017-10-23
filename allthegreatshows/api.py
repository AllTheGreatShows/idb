from allthegreatshows import app
from allthegreatshows import db
from allthegreatshows.models import Podcast, Episode, Provider, Genre
from flask_restless import APIManager

manager = APIManager(app, flask_sqlalchemy_db=db)
manager.create_api(Podcast, methods=['GET'])
manager.create_api(Episode, methods=['GET'])
manager.create_api(Provider, methods=['GET'])
manager.create_api(Genre, methods=['GET'])
