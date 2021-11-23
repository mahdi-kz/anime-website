from ..init import db
from marshmallow import Schema, fields


class Customers(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    logo_address = db.Column(db.String())
    sequence = db.Column(db.Integer)
    international = db.Column(db.Boolean)

    @staticmethod
    def save_logo_address(c_id, address):
        customer = Customers.query.get(c_id)
        if not customer:
            customer = Customers()

        customer.address = address
        db.session.add(customer)
        db.session.commit()


class CustomersSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    logo_address = fields.String()
    sequence = fields.Integer()
    international = fields.Boolean()
