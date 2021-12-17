from flask import jsonify, request, current_app
import pandas
import os
from ..models.courses import Course, CourseSchema
from .init import bp
from ..init import db


@bp.route("/get-courses", methods=["POST"])
def get_courses():
    courses = Course.query.all()
    courses = CourseSchema().dump(courses, many=True)

    return jsonify(status=200, message="", data=courses), 200


@bp.route("/get-course", methods=["POST"])
def get_course():
    c_id = request.get_json()['id']
    course = Course.query.get(c_id)

    if not course:
        return jsonify(status=500, message="ID not found!", data={}), 500

    course = CourseSchema().dump(course)
    return jsonify(status=200, message="", data=course), 200


@bp.route("/save-course", methods=["POST"])
def save_course():
    data = request.form
    c_id = int(data.get('id', False))
    name = data.get('name', False)
    description = data.get('description', False)
    sequence = int(data.get('sequence', False))

    course = c_id and pandas.notnull(c_id) and Course.query.get(c_id)
    if not course:
        course = Course()

    course.name = name
    course.description = description
    course.sequence = sequence
    db.session.add(course)
    db.session.commit()

    image = request.files and request.files.get('image_file', False)
    if image:
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
        destination = "/".join([target, 'course_image_' + str(course.id)])
        image.save(destination)
        address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], 'course_image_' + str(course.id)])
        course.image_address = address

    db.session.add(course)
    db.session.commit()

    return jsonify(status=200, message='Video Updated', data={'id': course.id}), 200


@bp.route("/delete-course", methods=["POST"])
def delete_course():
    c_id = request.get_json()['id']
    course = Course.query.get(c_id)

    if not course:
        return jsonify(status=500, message="ID not found!", data={'status': 500}), 500

    target = current_app.config['IMAGE_UPLOAD_FOLDER']
    destination = "/".join([target, 'course_image_' + str(course.id)])
    os.remove(destination)

    db.session.delete(course)
    db.session.commit()

    return jsonify(status=200, message="Course deleted!", data={'status': 200}), 200
