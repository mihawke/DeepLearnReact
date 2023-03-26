from flask import Flask, jsonify
from pymongo import MongoClient
from bson import json_util
import json
import gridfs

app = Flask(__name__)


# Connect to the MongoDB database
client = MongoClient("mongodb+srv://pratik2211:pratik221100@cluster0.ruchz.mongodb.net/test")
db = client["assets"]
users = db["users"]
image_collection = db["images"]

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


# create GridFS object for the database
fs = gridfs.GridFS(db)

# specify the path to the image file
file_path = "/home/cosmic/WorkSpace/DeepLearnReact/backend/assets/Sekiro.jpg"

# read the contents of the image file
with open(file_path, 'rb') as f:
    contents = f.read()

# store the image file in the database via GridFS
file_id = fs.put(contents, filename="Sekiro.jpg")

# save the file_id in the assets.images collection
image_collection.insert_one({"file_id": file_id})


if __name__ == "__main__":
    app.run()