from flask import Flask
import requests
import io
import base64
import urllib3
import request
from app1 import fun
import numpy as np
import cv2
from flask import Flask, render_template, request
from werkzeug import secure_filename
import json
import app1
import gunicorn
import logging
app = Flask(__name__)


@app.route('/')
def page():
   return render_template("test.html")

@app.route('/upload',methods = ['GET', 'POST'])
def upload_fil():
   fun()
   d={"Result":app1.s}
   return json.dumps(d)

 
   
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      fun()
      f=app1.s
      d={"Result":app1.s}
   return '<h1 style="background-color: #FFEC8B;">>Result:'+f+'</h1>'
  
   


if __name__ == '__main__':
    app.run(ssl_context='adhoc')