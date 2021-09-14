from os import makedirs
from flask import (
    Flask,
    render_template,
)
from settings import Config

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

import time

login = LoginManager()
db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(
        import_name=__name__,
        instance_relative_config=True,
    )
    app.config.from_object(Config)
    makedirs(
        name=app.instance_path,
        exist_ok=True,
    )
    db.init_app(app=app)
    migrate.init_app(app, db, )
    login.init_app(app, )
    # login.anonymous_user = authentication.models.AnonymousUser
    # app.register_blueprint(authentication.bp)

    @app.route('/time')
    def get_current_time():
        return {'time': time.time()}

    @app.route("/", methods=["GET", ])
    def index():
        return render_template("base.html")

    return app
