# -*- coding: utf-8 -*-
# -*- Author: Fuger -*- 
from flask import Blueprint,render_template, request, redirect,Response,session,url_for
from app import db
from .models import Admin
import json

home = Blueprint('home',__name__)

@home.route('/')
def index():
    return render_template('home/index.html')