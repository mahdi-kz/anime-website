from flask import jsonify, request, current_app
import pandas
import os
from ..models.service_videos import ServiceVideo, ServiceVideoSchema
from ..models.departments import Department
from .init import bp
from ..init import db


@bp.route("/get-service-videos", methods=["POST"])
def get_service_videos():
    data = request.get_json()
    department_name = data['department']
    top = data['top']

    department = Department.query.filter_by(name=department_name).first()
    if not department:
        return jsonify(status=500, message="Department not found!", data={}), 500

    videos = ServiceVideo.query.filter_by(department=department, top=top).all()
    videos = ServiceVideoSchema().dump(videos, many=True)

    return jsonify(status=200, message="Address found!", data=videos)


@bp.route("/get-service-video", methods=["POST"])
def get_service_video():
    v_id = request.get_json()['id']
    video = ServiceVideo.query.get(v_id)

    if not video:
        return jsonify(status=500, message="ID not found!", data={}), 500

    video = ServiceVideoSchema().dump(video)
    return jsonify(status=200, message="", data=video), 200


@bp.route("/save-service-video", methods=["POST"])
def save_service_video():
    data = request.form
    v_id = int(data.get('id', False))
    name = data.get('name', False)
    top = data.get('top', False)
    top = top and top == 'true'
    sequence = int(data.get('sequence', False))
    department_name = data.get('department', False)
    if not department_name:
        return jsonify(status=500, message="Department not specified!", data={}), 500
    department = Department.query.filter_by(name=department_name).first()
    if not department:
        return jsonify(status=500, message="Department not Found!", data={}), 500

    video = pandas.notnull(v_id) and ServiceVideo.query.get(v_id)
    if not video:
        video = ServiceVideo()

    video.name = name
    video.top = top
    video.sequence = sequence
    video.department = department
    db.session.add(video)
    db.session.commit()

    media = request.files and request.files['file']
    if media:
        target = current_app.config['VIDEO_UPLOAD_FOLDER']
        destination = "/".join([target, 'service_video_' + str(video.id)])
        media.save(destination)
        address = "/".join([current_app.config['VIDEO_FOLDER_PATH_RELATIVE'], 'service_video_' + str(video.id)])
        video.video_address = address

    db.session.add(video)
    db.session.commit()

    return jsonify(status=200, message='Video Updated', data={'id': video.id}), 200
