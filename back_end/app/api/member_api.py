from flask import jsonify, request, current_app
import pandas
import os
from ..models.members import Member, MemberSchema
from ..models.departments import Department
from .init import bp
from ..init import db


@bp.route("/get-members", methods=["POST"])
def get_members():
    members = Member.query.all()
    members = MemberSchema().dump(members, many=True)

    return jsonify(status=200, message="", data=members), 200


@bp.route("/get-member", methods=["POST"])
def get_member():
    m_id = request.get_json()['id']
    member = Member.query.get(m_id)

    if not member:
        return jsonify(status=500, message="ID not found!", data={}), 500

    member = MemberSchema().dump(member)
    return jsonify(status=200, message="", data=member), 200


@bp.route("/save-member", methods=["POST"])
def save_member():
    data = request.form
    m_id = int(data.get('id', False))
    name = data.get('name', False)
    position = data.get('position', False)
    description = data.get('description', False)
    sequence = int(data.get('sequence', False))

    departments_names = data.get('departments', False)
    departments_names = departments_names.split(',') if departments_names else []
    departments = [Department.query.filter_by(name=department).first() for department in departments_names]

    member = m_id and pandas.notnull(m_id) and Member.query.get(m_id)
    if not member:
        member = Member()

    member.name = name
    member.position = position
    member.description = description
    member.sequence = sequence
    member.departments = departments
    db.session.add(member)
    db.session.commit()

    media = request.files and request.files.get('back_image_file', False)
    if media:
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
        destination = "/".join([target, 'member_back_image_' + str(member.id)])
        media.save(destination)
        address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], 'member_back_image_' + str(member.id)])
        member.back_image_address = address

    media = request.files and request.files.get('gif_file', False)
    if media:
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
        destination = "/".join([target, 'member_gif_' + str(member.id)])
        media.save(destination)
        address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], 'member_gif_' + str(member.id)])
        member.gif_address = address

    media = request.files and request.files.get('image_file', False)
    if media:
        target = current_app.config['IMAGE_UPLOAD_FOLDER']
        destination = "/".join([target, 'member_image_' + str(member.id)])
        media.save(destination)
        address = "/".join([current_app.config['IMAGE_FOLDER_PATH_RELATIVE'], 'member_image_' + str(member.id)])
        member.image_address = address

    db.session.add(member)
    db.session.commit()

    return jsonify(status=200, message='Video Updated', data={'id': member.id}), 200


@bp.route("/delete-member", methods=["POST"])
def delete_member():
    m_id = request.get_json()['id']
    member = Member.query.get(m_id)

    if not member:
        return jsonify(status=500, message="ID not found!", data={'status': 500}), 500

    target = current_app.config['IMAGE_UPLOAD_FOLDER']
    destination = "/".join([target, 'member_back_image_' + str(member.id)])
    os.remove(destination)
    destination = "/".join([target, 'member_gif_' + str(member.id)])
    os.remove(destination)
    destination = "/".join([target, 'member_image_' + str(member.id)])
    os.remove(destination)

    db.session.delete(member)
    db.session.commit()

    return jsonify(status=200, message="Member deleted!", data={'status': 200}), 200


@bp.route("/get-department-member", methods=["POST"])
def get_department_member():
    department_name = request.get_json()['department']
    department = Department.query.filter_by(name=department_name).first()

    if not department:
        return jsonify(status=500, message="Department not found!", data={}), 500

    members = MemberSchema().dump(department.members, many=True)
    return jsonify(status=200, message="", data=members), 200
