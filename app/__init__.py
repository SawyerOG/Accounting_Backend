"""Inititialize the App"""

from flask import Flask, request
from flask_socketio import SocketIO
from flask_cors import CORS
socketio = SocketIO()

from controllers.login_users import user_logging

def create_app(debug):
    """Create an application."""
    app = Flask(__name__, static_folder='../build', static_url_path='/')
    app.config['SECRET KEY'] = 'mysecret'
    CORS(app)

    # Inititate the Socket
    socketio.init_app(app, cors_allowed_origins="*", ping_interval=(30, 100), engineio_logger=debug)

    app.register_blueprint(user_logging)

    @app.route('/')
    def index():
        return app.send_static_file('index.html')

    @socketio.on('test')
    def test():
        print(request.sid)
        print('this is working')


    return app

# gunicorn --reload  -b localhost:5000  --worker-class eventlet -w 1 "run:app"
