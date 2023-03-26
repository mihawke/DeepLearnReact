from flask import Flask, jsonify
from pymongo import MongoClient
from bson import json_util
import json

app = Flask(__name__)


# Connect to the MongoDB database
client = MongoClient("mongodb+srv://pratik2211:pratik221100@cluster0.ruchz.mongodb.net/test")
db = client["authentication"]
users = db["users"]

@app.route("/users")
def print_users():
    # Find all users in the collection with id value of 1
    users_data = list(users.find({"id":2}))
    
    # Serialize the data using json_util
    users_data = json.loads(json_util.dumps(users_data))
    #     
    return users_data
    

@app.route("/members")
def members():
    return {"members":["Member1","Member2","Member3"]}

if __name__ == "__main__":
    app.run()
