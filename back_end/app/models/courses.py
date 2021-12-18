from ..init import db
from marshmallow import Schema, fields


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.String())
    sequence = db.Column(db.Integer)
    image_address = db.Column(db.String())


class CourseSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    description = fields.String()
    sequence = fields.Integer()
    image_address = fields.String(attribute='image_address')
