import os
from dotenv import load_dotenv
import pyodbc

load_dotenv()
# Connect to the sql server
creds = os.getenv('SQL_CREDS')
sql = pyodbc.connect(creds)

