from ..init import db
from marshmallow import Schema, fields


class Member(db.Model):
    __tablename__ = 'members'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    position = db.Column(db.String())
    description = db.Column(db.String())
    sequence = db.Column(db.Integer)
    back_image_address = db.Column(db.String())
    gif_address = db.Column(db.String())
    image_address = db.Column(db.String())

    departments = db.relationship(
        'Department',
        secondary="MemberDepartment",
        lazy='dynamic',
    )


MemberDepartment = db.Table('MemberDepartment',
                            db.Column('id', db.Integer, primary_key=True),
                            db.Column('member_id', db.Integer, db.ForeignKey('members.id')),
                            db.Column('department_id', db.Integer, db.ForeignKey('departments.id'))
                            )


class DepartmentSchema(Schema):
    name = fields.String()


class MemberSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    position = fields.String()
    description = fields.String()
    sequence = fields.Integer()
    back_image_address = fields.String()
    gif_address = fields.String()
    image_address = fields.String()
    departments = fields.List(fields.Nested("DepartmentSchema"))
