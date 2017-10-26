from allthegreatshows import db

podcast_genre = db.Table(
    'podcast_genre',
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True),
    db.Column('podcast_id', db.Integer, db.ForeignKey('podcast.id'), primary_key=True)
)


class Podcast(db.Model):
    __tablename__= 'podcast'
    id = db.Column(db.Integer, primary_key=True)
    itunes_id = db.Column(db.Integer)
    title = db.Column(db.String(255))
    description = db.Column(db.String(255))
    image_url = db.Column(db.String(255))
    feed_url = db.Column(db.String(255))
    episodes = db.relationship('Episode', backref='podcast', lazy=True)
    provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'))
    genres = db.relationship('Genre', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))

    def __init__(self, itunes_data):
        self.itunes_id = itunes_data["collectionId"]
        self.title = itunes_data["collectionName"]
        self.image_url = itunes_data["artworkUrl600"]
        self.feed_url = itunes_data["feedUrl"]

    def __repr__(self):
        return '<Podcast %r>' % self.title


class Episode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    published = db.Column(db.DateTime)
    file_url = db.Column(db.String)
    podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'), nullable=False)

    def __repr__(self):
        return '<Episode %r>' % self.title


class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    itunes_id = db.Column(db.Integer)
    name = db.Column(db.String(255))
    podcasts = db.relationship('Podcast', backref='provider', lazy=True)

    def find_or_create(db, **p):
        existing = Provider.query.filter_by(**p).first()
        if existing is not None:
            return existing
        new = Provider(**p)
        db.session.add(new)
        return new

    def __repr__(self):
        return '<Provider %r>' % self.name


class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    itunes_id = db.Column(db.Integer)
    name = db.Column(db.String(255), unique=True, nullable=False)
    podcasts = db.relationship('Podcast', secondary=podcast_genre, lazy='subquery', backref=db.backref('podcast_genre', lazy=True))

    def __repr__(self):
        return '<Genre %r>' % self.name
