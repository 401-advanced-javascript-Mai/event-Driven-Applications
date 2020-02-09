'use strict' ;
const events = require('./events.js')
events.on('readFileEditAndwrite', payload => log('readFileEditAndwrite', payload))
events.on('error', payload => log('error', payload))

function log(events, payload){
    let time = new Date();
    console.log({events, time, payload});
  }
  
  module.exports = log;