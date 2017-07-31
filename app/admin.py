# -*- coding: utf-8 -*-
# -*- Author: Fuger -*- 
from flask import Blueprint,render_template, request, redirect,Response,session,url_for
from app import db
from .models import Admin
import json

admin = Blueprint('admin',__name__)

#后台主页
@admin.route('/')
def index():

    if session.get('username') is None :
        return redirect(url_for('admin.login'))
    return render_template('admin/index.html')

#登录
@admin.route('/login/',methods=['POST','GET'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        admin = Admin.query.filter_by(username=username).first()
        if admin != '':
            if admin.password != password:
                data = {'code': 300, 'msg': '密码错误!'}
            else:
                data = {'code': 200, 'msg': '登录成功!'}
                session['username'] = admin.username
        else:
            data = {'code': 300, 'msg': '没有此用户'}
        return json.dumps(data)
    return render_template('admin/login.html')