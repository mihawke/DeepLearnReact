from flask import Flask, jsonify , send_file
from pymongo import MongoClient
from bson import json_util
import json
import gridfs
import io

app = Flask(__name__)


# Connect to the MongoDB database
client = MongoClient(
    "mongodb+srv://pratik2211:pratik221100@cluster0.ruchz.mongodb.net/test")

# Connect to authentication collection
authentication = client["authentication"]
users = authentication["users"]
image_collection = authentication["images"]

# Connect to assets collection
assets = client["assets"]
images = assets["images"]
models = assets["models"]
# create GridFS object for the database
fs = gridfs.GridFS(assets)

# specify the path to the image file
file_path = "/home/cosmic/WorkSpace/DeepLearnReact/backend/assets/Sekiro.jpg"


@app.route("/images")
def upload_img():
    # read the contents of the image file
    with open(file_path, 'rb') as f:
        contents = f.read()

    # store the image file in the database via GridFS
    file_id = fs.put(contents, filename="Sekiro.jpg")

    # save the file_id in the assets.images collection
    images.insert_one({"file_id": file_id})

@app.route("/file/<filename>")
def file(filename):
    # retrieve the file from the database using GridFS
    file_data = fs.get_last_version(filename=filename).read()

    # use send_file() to send the file data back to the client as an attachment
    return send_file(io.BytesIO(file_data), mimetype='image/jpeg')



@app.route("/users")
def print_users():
    # Find all users in the collection with id value of 1
    users_data = list(users.find({"id": 2}))

    # Serialize the data using json_util
    users_data = json.loads(json_util.dumps(users_data))
    #
    return users_data


if __name__ == "__main__":
    app.run()
