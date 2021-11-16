from flask import Blueprint, jsonify, request, current_app
from flask_login import current_user
import os
from ..models.images import Images


bp = Blueprint("api", __name__, url_prefix="/api")


@bp.route("/upload-image", methods=["POST"])
def upload_image():
    # target = os.path.join(current_app.config['IMAGE_UPLOAD_FOLDER'], 'test_doc')
    if request.form['file_type'] == 'image':
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
    else:
        return jsonify(status=500, message="File type not found!", data={}), 500

    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']
    filename = request.form['file_key']
    destination = "/".join([target, filename])
    file.save(destination)
    address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], filename])
    Images.save_address(filename, address)

    return jsonify(status=200, message="Uploaded Successfully!", data={})


@bp.route("/get-image-address", methods=["POST"])
def get_image_address():
    key = request.get_json()['key']
    image = Images.query.filter_by(key=key).first()
    if not image:
        return jsonify(status=500, message="Key not found!", data={})

    return jsonify(status=200, message="Address found!", data={'url': image.address})
