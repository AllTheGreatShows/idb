from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# Heroku database
production_db_uri = "postgres://pmiakoqjamfzah:65aa39698d6351c2781cd65b0895603bc28f494adc496f490135909707b56c7b@ec2-107-21-248-129.compute-1.amazonaws.com:5432/dddkkm1f2vgh3p"
# GCP production database
# "postgresql://postgres:allthegreatshows@35.192.68.48/postgres"
local_db_uri = "postgresql://localhost/atgs"

app.config["SQLALCHEMY_DATABASE_URI"] = production_db_uri


db = SQLAlchemy(app)

migrate = Migrate(app, db)

import allthegreatshows.models
import allthegreatshows.views
