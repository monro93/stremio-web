// Copyright (C) 2017-2023 Smart code 203358507

const EventEmitter = require('eventemitter3');
const ChromecastTransport = require('./ChromecastTransport');

function Chromecast() {
    let active = false;
    let error = null;
    let starting = false;
    let transport = null;

    const events = new EventEmitter();

    function onTransportInit() {
    }
    function onTransportInitError(args) {
    }
    function onStateChanged() {
    }

    Object.defineProperties(this, {
        active: {
            configurable: false,
            enumerable: true,
            get: function() {
                return active;
            }
        },
        error: {
            configurable: false,
            enumerable: true,
            get: function() {
                return error;
            }
        },
        starting: {
            configurable: false,
            enumerable: true,
            get: function() {
                return starting;
            }
        },
        transport: {
            configurable: false,
            enumerable: true,
            get: function() {
                return transport;
            }
        }
    });

    this.start = function() {
    };
    this.stop = function() {
    };
    this.on = function(name, listener) {
    };
    this.off = function(name, listener) {
    };
}

module.exports = Chromecast;
