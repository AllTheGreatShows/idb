from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)

production_db_uri = "postgresql://postgres:allthegreatshows@35.192.68.48/postgres"
local_db_uri = "postgresql://localhost/atgs"
app.config["SQLALCHEMY_DATABASE_URI"] = production_db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

db = SQLAlchemy(app)

migrate = Migrate(app, db)
from api import manager
import allthegreatshows.views


