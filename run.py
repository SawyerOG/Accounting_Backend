"""App entry point"""

from app import create_app, socketio

app = create_app(debug=True)
"""set debug to False before pushing to server"""
if __name__ == '__main__':
    socketio.run(app)
