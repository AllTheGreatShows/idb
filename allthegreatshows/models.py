from allthegreatshows import db

genres = db.Table(
    'genres',
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True),
    db.Column('podcast_id', db.Integer, db.ForeignKey('podcast.id'), primary_key=True)
)


class Podcast(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    description = db.Column(db.String(255), unique=True, nullable=False)
    image_url = db.Column(db.String(255), unique=True, nullable=False)
    episodes = db.relationship('Episode', backref='podcast', lazy=True)
    provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'), nullable=False)

    def __repr__(self):
        return '<Podcast %r>' % self.title


class Episode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'), nullable=False)
    image_url = db.Column(db.String(255), unique=True, nullable=False)

    def __repr__(self):
        return '<Episode %r>' % self.title


class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    podcasts = db.relationship('Podcast', backref='provider', lazy=True)

    def __repr__(self):
        return '<Provider %r>' % self.name


class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    podcasts = db.relationship('Podcast', secondary=genres, lazy='subquery', backref=db.backref('genres', lazy=True))

    def __repr__(self):
        return '<Genre %r>' % self.name
