import cv2
import math
import numpy as np
from matplotlib import pyplot as plt
import pandas as pd
import flask
from flask import Flask
from pandas import DataFrame
from skimage import io
import base64
import io
from imageio import imread
import glob
import requests 
import os
s=""
def fun():
    global s
    R_avg=[]
    G_avg=[]
    B_avg=[]
    list_of_files = glob.glob('*.jpg')
    latest_file = max(list_of_files, key=os.path.getctime) 
    img_path=latest_file
    img = cv2.imread(img_path)
    rgb_img=np.array(img)
    r, g, b = rgb_img[:, :, 0],rgb_img[:, :, 1], rgb_img[:, :, 2]
    meanr=r.mean()
    meang=g.mean()
    meanb=b.mean()
    meanr=round(meanr,2)
    meang=round(meang,2)
    meanb=round(meanb,2)
    ha=(meanr+meanb+meang)/3
    hae=0.010*ha+9.763
    rgb_rt=math.sqrt(ha)
    haf=(hae+rgb_rt)/2
    s="cool"
    print("Haemoglobin value:",haf)
    if(haf<11.5):
        s="You are anemic...Kindly visit the nearest doctor.Kindly have some healthy green foods and fruits with high IRON content."
    elif(11.6<haf and haf<11.79):
        s="You have possibilities of having anemia.Kindly have some healthy green food and fruits with high IRON content."    
    else:
        s="Hurray....You are safe.Nothing to worry"
    print("---------------------------------------------------")
    R_avg.append(meanr)
    G_avg.append(meang)
    B_avg.append(meanb)
    """print("Red average of images:\n",R_avg)
    print("Blue average of images:\n",B_avg)
    print("Green average of images:\n",G_avg)
    """
    print(s)
   
    #df.to_csv("imageparameters.csv")
