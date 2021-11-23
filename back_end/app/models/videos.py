from ..init import db


class Videos(db.Model):
    __tablename__ = 'videos'

    key = db.Column(db.String(), primary_key=True)
    address = db.Column(db.String())

    @staticmethod
    def save_address(key, address):
        video = Videos.query.filter_by(key=key).first()
        if not video:
            video = Videos(key=key)

        video.address = address
        db.session.add(video)
        db.session.commit()
