from flask import Flask, jsonify, send_file, request , render_template
from pymongo import MongoClient
from bson import json_util
import json
import gridfs
import io
from flask_cors import CORS
import torch
import cv2
import numpy as np


app = Flask(__name__)
CORS(app)


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

# file upload route and function


@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files['file']
    contents = file.read()
    file_id = fs.put(contents, filename=file.filename)
    images.insert_one({"file_id": file_id})
    return "File uploaded successfully!"

# file retrieve route


@app.route("/image/<filename>")
def retrieve(filename):
    # get_last_version is a method or function provided by the fs module that takes a filename parameter and returns the last version of the file with that name.
    # The read method is called on the last version
    file_data = fs.get_last_version(filename=filename).read()
    return send_file(io.BytesIO(file_data), mimetype='image/jpeg')

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



@app.route("/")
def index():
    return render_template("index.html")


# Define the model architecture
model_type = "MiDaS_small"
midas = torch.hub.load("intel-isl/MiDaS", model_type)

# Load the saved model state dictionary
model_state_dict = torch.load('/home/cosmic/WorkSpace/DeepLearnReact/backend/models/midas.pt')

# Assign the state dictionary to the model
midas.load_state_dict(model_state_dict)

# Set the model to evaluation mode
midas.eval()

# Define the API endpoint for the model
@app.route("/predict", methods=["POST"])
def predict():
    # Load the image file sent by the user
    file = request.files["image"]
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Preprocess the input image
    midas_transforms = torch.hub.load("intel-isl/MiDaS", "transforms")
    transform = midas_transforms.small_transform
    input_batch = transform(img).unsqueeze(0)

    # Perform inference using the loaded model
    with torch.no_grad():
        prediction = midas(input_batch)

    # Postprocess the model output
    prediction = torch.nn.functional.interpolate(
        prediction.unsqueeze(1),
        size=img.shape[:2],
        mode="bicubic",
        align_corners=False,
    ).squeeze().cpu().numpy()

    # Return the model output as a JSON response
    response = {"depth_map": prediction.tolist()}
    return jsonify(response)


if __name__ == "__main__":
    app.run()
