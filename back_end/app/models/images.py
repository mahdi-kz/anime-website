from ..init import db


class Images(db.Model):
    __tablename__ = 'images'

    key = db.Column(db.String(), primary_key=True)
    address = db.Column(db.String())

    @staticmethod
    def save_address(key, address):
        image = Images.query.filter_by(key=key).first()
        if not image:
            image = Images(key=key)

        image.address = address
        db.session.add(image)
        db.session.commit()
