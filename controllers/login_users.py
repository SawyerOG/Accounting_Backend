"""Handle user authentication and logging"""

import json
from copy import copy
from flask import Blueprint, request
from app import socketio
from app.sql import sql
from helper_funcs.sql import dict_sql

user_logging = Blueprint('user_logging', __name__)

# users = {
#     'sawyer@mail.com' : {
#         'password': '1',
#         'user_name': 'Sawyer',
#         'employeeID': 'OGLES S',
#         'authIDs': [1,2,3,4,5]
# }}

def login(data):
    """ Use the submitted credential to find and validate a user
        Expects:
        email: string
        password: string
     """
    password = data['password']
    email = data['email']

    c = sql.execute("SELECT [name] AS 'userName', [authIDs], [employeeID] FROM [Payroll].[dbo].[appAuth] WHERE email = ? AND password = ?", email, password)

    user = dict_sql(c)

    if len(user) > 0:
        print(user)
        return user
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
