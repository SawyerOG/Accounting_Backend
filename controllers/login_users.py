"""Handle user authentication and logging"""

import json
from copy import copy
from flask import Blueprint, request
from app import socketio

user_logging = Blueprint('user_logging', __name__)

# class Users:

#     number_of_users = 0

#     def __init__(self, name, employeeID, authIDs):
#         Users.number_of_users += 1
#         self.name = name
#         self.employeeID = employeeID
#         self.authIDs = authIDs

#         def __repr__(self):
#             return Users.number_of_users

#     def log_out_user(self):
#         print('logging out')
#         print(Users.number_of_users - 1)
#         new_count = cls.number_of_users
#         if new_count >= 0:
#             Users.number_of_users = new_count
#             return
#         Users.number_of_users = 0
#         return

#     @classmethod
#     def get_active_users(cls):
#         return cls.number_of_users

#     @classmethod
#     def emit_active_users(cls):
#         print('emitting', cls.number_of_users)
#         socketio.emit('UPDATE_USER_COUNT', {'data': cls.number_of_users}, broadcast=True)


users = {
    'sawyer@mail.com' : {
        'password': '1',
        'user_name': 'Sawyer',
        'employeeID': 'OGLES S',
        'authIDs': [1,2,3,4,5]
}}

def login(data):
    """ Use the submitted credential to find and validate a user
        Expects:
        password: string
        userName: string
     """
    password = data['password']
    user_name = data['userName']

    if users.get(user_name):
        if users[user_name]['password'] == password:
            usr = copy(users[user_name])
            del usr['password']
            usr['userName'] = usr.pop('user_name')

            json_user = json.dumps(usr)
            return json_user

    return False

### <-------- USER AUTH ---------> ###
@socketio.on('LOG_IN_USER')
def log_in_user(data):
    """Initiate login"""
    usr = login(data)

    client = request.sid
    if usr:
        socketio.emit('USER_ACCEPTED', usr, to=client)
    else:
        socketio.emit('USER_REJECTED', to=client)

# @socketio.on('disconnect')
# def disconnect():
#     print('disconnect')
    # Users.log_out_user()
    # Users.emit_active_users()
    # print(Users.number_of_users)

@socketio.on('connect')
def connect():
    """Do nothing on connect"""

# @socketio.on('GET_USERS_COUNT')
# def emit_user_count():
#     # Users.emit_active_users()
#     pass
