from ..init import db


class Department(db.Model):
    __tablename__ = 'departments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())

    service_videos = db.relationship(
        'ServiceVideo',
        back_populates='department'
    )
