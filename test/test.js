var assert = require('assert');
const { request } = require('http');
var expect = require("chai").expect

describe("App", function() {
    var url = "http://localhost:5555/"

    it("Launches website", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("New User", function() {
    var url = "http://localhost:5555/app/new_user"

    it("New user page functions", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Login", function() {
    var url = "http://localhost:5555/login_page.html"

    it("Redirects to login page", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Account info", function() {
    var url = "http://localhost:5555/accountinfo"

    it("Displays account info", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Change Username", function() {
    var url = "http://localhost:5555/change_username"

    it("Changes username", function() {});
    it("returns status 200 and redirects to 'http://localhost:5555/index.html'", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Change password", function() {
    var url = "http://localhost:5555/change_password"

    it("Launches website", function() {});
    it("returns status 200 and redirects to 'http://localhost:5555/index.html'", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("New Entry", function() {
    var url = "http://localhost:5555/new_entry"

    it("Creates new entry", function() {});
    it("returns status 200 and redirects to 'http://localhost:5555/welcome_back.html'", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Edit Entry", function() {
    var url = "http://localhost:5555/edit_entry"

    it("Edits entry", function() {});
    it("returns status 200", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});

describe("Past Entries", function() {
    var url = "http://localhost:5555/past_entries"

    it("Displays past entries", function() {});
    it("returns status 200 and redirect to 'http://localhost:5555/welcome_back.html'", function() {
        request(url, function(response) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
});




