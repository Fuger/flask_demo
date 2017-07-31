# -*- coding: utf-8 -*-
# -*- Author: Fuger -*- 
from app import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.INT, primary_key=True,autoincrement=True)
    username = db.Column(db.VARCHAR(80), unique=True)
    email = db.Column(db.VARCHAR(255), unique=True)
    password = db.Column(db.VARCHAR(32), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


class Admin(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.INT, primary_key=True,autoincrement=True)
    username = db.Column(db.VARCHAR(80), unique=True)
    email = db.Column(db.VARCHAR(255), unique=True)
    password = db.Column(db.VARCHAR(32), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username