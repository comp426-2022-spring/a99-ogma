"use strict";

const Database = require('better-sqlite3');

const db = new Database('appdata.db');

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );
let row = stmt.get();

// Initializes tables if they don't exist already.
if (row === undefined) {
    console.log('Your database appears to be empty. Initializing now.');
    const sqlInit = `
        CREATE TABLE accesslogs ( id INTEGER PRIMARY KEY, username TEXT, remoteaddr TEXT, remoteuser TEXT, time TEXT, method TEXT, url TEXT,  protocol TEXT, httpversion TEXT, secure TEXT, status TEXT, referer TEXT, useragent TEXT);
    `;
    db.exec(sqlInit);
    const sqlInit2 = `
        CREATE TABLE users (username TEXT PRIMARY KEY, password TEXT, email TEXT);
    `;
    db.exec(sqlInit2);
    const sqlInit3 = `
        CREATE TABLE entrylogs (username TEXT PRIMARY KEY, rating TEXT, entry TEXT, time TEXT);
    `;
    db.exec(sqlInit3);
    console.log('Your database has been initialized.');
} else {
    console.log('Database exists.')
}


module.exports = db