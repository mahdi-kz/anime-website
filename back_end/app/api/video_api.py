from flask import Blueprint, jsonify, request, current_app
from flask_login import current_user
import os
from ..models.videos import Videos
from .init import bp


@bp.route("/upload-video", methods=["POST"])
def upload_video():
    # target = os.path.join(current_app.config['IMAGE_UPLOAD_FOLDER'], 'test_doc')
    if request.form['file_type'] == 'video':
        target = current_app.config['VIDEO_UPLOAD_FOLDER']
    else:
        return jsonify(status=500, message="File type not found!", data={}), 500

    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']
    filename = request.form['file_key']
    destination = "/".join([target, filename])
    file.save(destination)
    address = "/".join([current_app.config['VIDEO_FOLDER_PATH_RELATIVE'], filename])
    Videos.save_address(filename, address)

    return jsonify(status=200, message="Uploaded Successfully!", data={})


@bp.route("/get-video-address", methods=["POST"])
def get_video_address():
    key = request.get_json()['key']
    video = Videos.query.filter_by(key=key).first()
    if not video:
        return jsonify(status=500, message="Key not found!", data={})

    return jsonify(status=200, message="Address found!", data={'url': video.address})
