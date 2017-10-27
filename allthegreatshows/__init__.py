from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os

app = Flask(__name__, static_url_path="", static_folder="../idb-react/build")

#production_db_uri = "postgresql+psycopg2://postgres:allthegreatshows@127.0.0.1/postgres"
production_db_uri = "postgresql+psycopg2://postgres:allthegreatshows@/postgres?host=/cloudsql/allthegreatshows-180700:us-central1:primary"
local_db_uri = "postgresql://localhost/atgs"
local_live_db_uri = "postgresql://postgres:allthegreatshows@35.192.68.48/postgres"
app.config["SQLALCHEMY_DATABASE_URI"] = production_db_uri #os.environ['SQLALCHEMY_DATABASE_URI']#production_db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

db = SQLAlchemy(app)

migrate = Migrate(app, db)

import allthegreatshows.api
import allthegreatshows.views


