# -*- coding: utf-8 -*-
# -*- Author: Fuger -*- 
from flask import Flask, url_for, request, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config.from_object('config')
app.secret_key = '123456'
db = SQLAlchemy(app)
from app import models,views
