from os import environ
from os.path import (
    abspath,
   dirname,
    #join
)


class Config:
    from dotenv import load_dotenv
    load_dotenv()
    DEBUG = False
    TESTING = False
    SMTP_SERVER = environ.get("SMTP_SERVER")
    SMTP_USERNAME = environ.get("SMTP_USERNAME")
    SMTP_PASSWROD = environ.get("SMTP_PASSWROD")
    SMTP_USE_TLS = environ.get("SMTP_USE_TLS")
    SMTP_PORT = environ.get("SMTP_PORT")
    SERVER_NAME = environ.get("SERVER_NAME")
    SECRET_KEY = environ.get("SECRET_KEY")
    ADMIN = environ.get("ADMIN")
    BASE_DIR = abspath(dirname(__file__))
    # SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@0.0.0.0:5432/postgres'
