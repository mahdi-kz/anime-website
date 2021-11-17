from . import api, models
from . import init

from os import makedirs
from flask import (
     Flask,
     jsonify,
)
from .init import db, migrate, login
from ..settings import Config
from .api.init import bp as api_bp


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
    app.register_blueprint(api_bp)

    # @app.route('/time')
    # def get_current_time():
    #     return {'time': time.time()}

    @app.route("/", methods=["GET", ])
    def test():
        return jsonify(status=200, message={'msg': 'It Works', })

    return app


app = create_app()
db.create_all(app=app)
