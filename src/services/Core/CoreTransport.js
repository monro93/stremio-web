// Copyright (C) 2017-2023 Smart code 203358507

const EventEmitter = require('eventemitter3');
const Bridge = require('@stremio/stremio-core-web/bridge');

function getWorkerURL( url ) {
    const content = `importScripts( "${ url }" );`;
    return URL.createObjectURL( new Blob( [ content ], { type: "text/javascript" } ) );
  }

function CoreTransport(args) {
    const events = new EventEmitter();
    const worker = new Worker(getWorkerURL("https://raw.githubusercontent.com/monro93/stremio-web/development/public/worker.js"));
    const bridge = new Bridge(window, worker);

    window.onCoreEvent = ({ name, args }) => {
        try {
            events.emit(name, args);
        } catch (error) {
            console.error('CoreTransport', error);
        }
    };

    bridge.call(['init'], [args])
        .then(() => {
            try {
                events.emit('init');
            } catch (error) {
                console.error('CoreTransport', error);
            }
        })
        .catch((error) => {
            events.emit('error', error);
        });

    this.on = function(name, listener) {
        events.on(name, listener);
    };
    this.off = function(name, listener) {
        events.off(name, listener);
    };
    this.removeAllListeners = function() {
        events.removeAllListeners();
    };
    this.getState = async function(field) {
        return bridge.call(['getState'], [field]);
    };
    this.getDebugState = async function() {
        return bridge.call(['getDebugState'], []);
    };
    this.dispatch = async function(action, field) {
        return bridge.call(['dispatch'], [action, field, location.hash]);
    };
    this.analytics = async function(event) {
        return bridge.call(['analytics'], [event, location.hash]);
    };
    this.decodeStream = async function(stream) {
        return bridge.call(['decodeStream'], [stream]);
    };
}

module.exports = CoreTransport;
