
// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('accesslog.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE accesslog ( id INTEGER PRIMARY KEY, remoteaddr TEXT, remoteuser TEXT, time TEXT, method TEXT, url TEXT,  protocol TEXT, httpversion TEXT, secure TEXT, status TEXT, referer TEXT, useragent TEXT);
    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized.');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.')
}

// Connect to a database or create one if it doesn't exist yet.
const db2 = new Database('users.db');

// Is the database initialized or do we need to initialize it?
const stmt = db2.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='users';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE users ( id INTEGER PRIMARY KEY, username TEXT, password TEXT, email TEXT);
    `;
// Execute SQL commands that we just wrote above.
    db2.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized.');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.')
}

// Connect to a database or create one if it doesn't exist yet.
const db3 = new Database('entrieslog.db');

// Is the database initialized or do we need to initialize it?
const stmt = db3.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE entrieslog ( id INTEGER PRIMARY KEY, rating TEXT, entry TEXT, time TEXT);
    `;
// Execute SQL commands that we just wrote above.
    db3.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized.');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db