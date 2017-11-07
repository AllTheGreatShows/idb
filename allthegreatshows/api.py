from allthegreatshows import app, db
from allthegreatshows.models import Podcast, Episode, Provider, Genre
from flask_restless import APIManager

db.create_all()

manager = APIManager(app, flask_sqlalchemy_db=db)
manager.create_api(Podcast, methods=['GET'], results_per_page=9)
manager.create_api(Episode, methods=['GET'], results_per_page=9)
manager.create_api(Provider, methods=['GET'], results_per_page=9)
manager.create_api(Genre, methods=['GET'], results_per_page=9)

