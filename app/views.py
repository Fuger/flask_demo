# -*- coding: utf-8 -*-
# -*- Author: Fuger -*- 
from app import app
from .admin import admin
from .home import home

app.register_blueprint(admin,url_prefix='/admin')
app.register_blueprint(home, url_prefix='')