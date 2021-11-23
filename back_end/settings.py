from os import environ
from os.path import (
    abspath,
    dirname,
    join
)


class Config:
    from dotenv import load_dotenv
    load_dotenv()
    DEBUG = False
    TESTING = False
    SMTP_SERVER = environ.get("SMTP_SERVER")
    SMTP_USERNAME = environ.get("SMTP_USERNAME")
    SMTP_PASSWORD = environ.get("SMTP_PASSWROD")
    SMTP_USE_TLS = environ.get("SMTP_USE_TLS")
    SMTP_PORT = environ.get("SMTP_PORT")
    SERVER_NAME = environ.get("SERVER_NAME")
    SECRET_KEY = environ.get("SECRET_KEY")
    ADMIN = environ.get("ADMIN")
    BASE_DIR = abspath(dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@0.0.0.0:5432/anime'
    IMAGE_FOLDER_PATH_RELATIVE = 'static/images'
    VIDEO_FOLDER_PATH_RELATIVE = 'static/videos'
    IMAGE_UPLOAD_FOLDER = join(BASE_DIR, 'app', IMAGE_FOLDER_PATH_RELATIVE)
    VIDEO_UPLOAD_FOLDER = join(BASE_DIR, 'app', VIDEO_FOLDER_PATH_RELATIVE)
    IMAGE_ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
