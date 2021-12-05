from ..init import db
from marshmallow import Schema, fields


class ServiceVideo(db.Model):
    __tablename__ = 'service_videos'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String())
    video_address = db.Column(db.String())
    sequence = db.Column(db.Integer())
    top = db.Column(db.Boolean())

    department_id = db.Column(
        db.Integer,
        db.ForeignKey('departments.id'),
    )
    department = db.relationship(
        "Department",
        back_populates="service_videos"
    )


class ServiceVideoSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    video_address = fields.Str()
    sequence = fields.Integer()
    top = fields.Boolean()
