# Create server.py :
touch server.py
# Create Python3 virtual environment in venv directory
python3 -m venv venv
# Activate venv
source venv/bin/activate
# Install Flask
pip3 install Flask
# Add requirements.txt to keep track of packages
pip freeze > requirements.txt