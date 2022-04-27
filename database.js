"use strict";

const Database = require('better-sqlite3');

const db = new Database('appdata.db');

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='access';`
    );
let row = stmt.get();

// Initializes tables if they don't exist already.
if (row === undefined) {
    console.log('Your database appears to be empty. Initializing now.');
    const sqlInit = `
        CREATE TABLE access ( id INTEGER PRIMARY KEY, username TEXT, remoteaddr TEXT, remoteuser TEXT, time TEXT, method TEXT, url TEXT,  protocol TEXT, httpversion TEXT, secure TEXT, status TEXT, referer TEXT, useragent TEXT);
    `;
    db.exec(sqlInit);
    const sqlInit2 = `
        CREATE TABLE usersinfo (id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT);
        INSERT INTO usersinfo (username, password, email) VALUES ('user1','supersecurepassword', 'test'),('test','anotherpassword', 'test');
    `;
    db.exec(sqlInit2);
    const sqlInit3 = `
        CREATE TABLE entrylogs (id INTEGER PRIMARY KEY, username TEXT, rating TEXT, entry TEXT);
    `;
    db.exec(sqlInit3);
    console.log('Your database has been initialized.');
} else {
    console.log('Database exists.')
}


module.exports = db