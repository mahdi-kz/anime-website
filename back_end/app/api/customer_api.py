from flask import jsonify, request, current_app
import pandas
from ..models.customers import Customers, CustomersSchema
from .init import bp
from ..init import db


@bp.route("/get-customers", methods=["POST"])
def get_customers():
    customers = Customers.query.all()
    customers = CustomersSchema().dump(customers, many=True)

    return jsonify(status=200, message="", data=customers), 200


@bp.route("/get-local-customers", methods=["POST"])
def get_local_customers():
    customers = Customers.query.filter_by(international=False).all()
    customers = CustomersSchema().dump(customers, many=True)

    return jsonify(status=200, message="", data=customers), 200


@bp.route("/get-global-customers", methods=["POST"])
def get_global_customers():
    customers = Customers.query.filter_by(international=True).all()
    customers = CustomersSchema().dump(customers, many=True)

    return jsonify(status=200, message="", data=customers), 200


@bp.route("/save-customer", methods=["POST"])
def save_customer():
    data = request.form
    c_id = int(data.get('id', False))
    name = data.get('name', False)
    international = data.get('international', False)
    international = international and international == 'true'
    sequence = int(data.get('sequence', False))

    customer = pandas.notnull(c_id) and Customers.query.get(c_id)
    if not customer:
        customer = Customers()

    customer.name = name
    customer.international = international
    customer.sequence = sequence
    db.session.add(customer)
    db.session.commit()

    logo = request.files and request.files['file']
    if logo:
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
        destination = "/".join([target, 'logo_' + str(customer.id)])
        logo.save(destination)
        address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], 'logo_' + str(customer.id)])
        customer.logo_address = address

    db.session.add(customer)
    db.session.commit()

    return jsonify(status=200, message='Customer Updated', data={'id': customer.id}), 200


@bp.route("/get-customer", methods=["POST"])
def get_customer():
    c_id = request.get_json()['id']
    customer = CustomersSchema().dump(Customers.query.get(c_id))
    return jsonify(status=200, message="", data=customer), 200
