var http = require('http').Server,
    io = require('socket.io'),
    socketioClient = require('socket.io-client'),
    expect = require('expect'),
    mubsub = require('mubsub'),
    adapter = require('../index.js'),
    fixture01 = require('./socketio-mongodb.fixture.js');

fixture01(http, io, socketioClient, expect, mubsub, adapter);
