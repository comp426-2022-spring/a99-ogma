# API Documentation

## Endpoints

### /app/ (GET)
#### Request cURL

```
http://localhost:5555/app/
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>W3.CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <body>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Journal</title>
</head>
  <div style = "text-align: center;">
  <h1>Hi! Nice to see you.</h1>
  <body>
    <div style = "text-align: center;">
      <button onclick= "location.href = 'login_page.html';" id="loginButton" class="submit-button" >Login</button>
    </div>

    <div style = "text-align: center;">
      <button onclick= "location.href = 'create_login.html';" id="createButton" class="submit-button" >Create User</button>
    </div>

    <div style = "text-align: center;">
      <button onclick= "location.href = 'profile.html';" id="profileButton" class="submit-button" >Go To Profile</button>
    </div>
</body>
</html>
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sat, 30 Apr 2022 01:00:34 GMT
ETag: W/"3e3-18077fbd36b"
Content-Type: text/html; charset=UTF-8
Content-Length: 995
Date: Sat, 30 Apr 2022 01:02:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/login (POST)
#### Request cURL

```
http://localhost:5555/create_login.html
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/boostrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAis6JXm" crossorigin="anonymous">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Log In</title>
</head>
    <body>
  <div style = "text-align: center;">
  <h1>Log in to your account.</h1>
  <body>
    <form id="login" action="http://localhost:5555/app/login" method="post">
        <label for="user">
					<strong>Username</strong>
				</label>
				<input type="text" name="user" id="user">
        <label for="pass">
					<strong>Password</strong>
				</label>
				<input type="text" name="pass" id="pass">
				<input type="submit" value="Submit">
        
    </form>
    <button onclick= "location.href = 'create_login.html';" type="submit" class="btn btn-primary">Create my account</button>
    <script>main.js</script>
    </body>
</div>
</html>
```

#### Response headers

```
HTTP/1.1 304 Not Modified
X-Powered-By: Express
Access-Control-Allow-Origin: *
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sat, 30 Apr 2022 01:00:11 GMT
ETag: W/"465-18077fb7abf"
Date: Sat, 30 Apr 2022 01:07:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/new_user (POST)
#### Request cURL

```
http://localhost:5555/login_page.html
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/boostrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAis6JXm" crossorigin="anonymous">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Log In</title>
</head>
    <body>
  <div style = "text-align: center;">
  <h1>Log in to your account.</h1>
  <body>
    <form id="login" action="http://localhost:5555/app/login" method="post">
        <label for="user">
					<strong>Username</strong>
				</label>
				<input type="text" name="user" id="user">
        <label for="pass">
					<strong>Password</strong>
				</label>
				<input type="text" name="pass" id="pass">
				<input type="submit" value="Submit">
        
    </form>
    <button onclick= "location.href = 'create_login.html';" type="submit" class="btn btn-primary">Create my account</button>
    <script>main.js</script>
    </body>
</div>
</html>
```

#### Response headers

```
HTTP/1.1 304 Not Modified
X-Powered-By: Express
Access-Control-Allow-Origin: *
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sat, 30 Apr 2022 01:00:11 GMT
ETag: W/"465-18077fb7abf"
Date: Sat, 30 Apr 2022 02:21:54 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/accountinfo/ (GET)
#### Request cURL

```
http://localhost:5555/app/accountinfo/?
```

#### Response body

```
Linked directly from database
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 50
ETag: W/"32-YM1yUjDtZmInqgkuaN+m1/PqZew"
Date: Sat, 30 Apr 2022 02:25:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/change_username (POST), /app/change_password (POST), /app/delete_account (POST)
#### Request cURL

```
http://localhost:5555/settings.html
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/boostrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAis6JXm" crossorigin="anonymous">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Account Settings</title>
</head>
  <div style = "text-align: center;">
  <h1>Account Settings</h1>
  <body>
    <form id=change-user action="http://localhost:5555/app/change_username" method="post">
        <div class="form-group">
            <label for="username">Enter a New Username:</label>
            <input type="text" class="form-control" name="username">
            <input type="submit" value="Submit">
        </div>
    </form>

    <form id=change-pass action="http://localhost:5555/app/change_password" method="post">
        <div class="form-group">
            <label for="password">Enter a New Password:</label>
            <input type = "text" class="form-control" name="password">
            <input type="submit" value="Submit">
        </div>
    </form>
    <form id=delete-account action="http://localhost:5555/app/delete_account" method="post">
      <label>Do you want to stop journaling?</label>
      <input type="submit" value="Submit">
    </form>
    </body>
</div>
</html>
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sat, 30 Apr 2022 00:59:00 GMT
ETag: W/"5b4-18077fa66c9"
Content-Type: text/html; charset=UTF-8
Content-Length: 1460
Date: Sat, 30 Apr 2022 02:27:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/past_entries/ (GET)
#### Request cURL

```
http://localhost:5555/app/past_entries?
```

#### Response body

```
Linked directly from database
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Date: Sat, 30 Apr 2022 02:29:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/new_entry (POST)
#### Request cURL

```
http://localhost:5555/new_entry.html
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>New journal entry</title>
</head>
    <div style = "text-align: center;">
    <h1 id="fake">How are you feeling?</h1>
</html>

<div class="w3-bar">
    <button onclick= "location.href = 'profile.html';" id="finishButton" class="float-left submit-button" >Go to Profile</button>
</div>
<div class="w3-show-inline-block">
    <form action="http://localhost:5555/app/new_entry/" method="post">
        <input type="radio" name="smiley" value="sad" class="sad">
        <input type="radio" name="smiley" value="neutral" class="neutral">
        <input type="radio" name="smiley" value="happy" class="happy" checked="checked">
        <h2>Entry</h2>
        <input type="text" name="entry" id="entry">
        <input type="submit" value="Submit" >
    </form>
</div>

</html>
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sat, 30 Apr 2022 00:59:49 GMT
Date: Sat, 30 Apr 2022 02:25:05 GMT
ETag: W/"3f8-18077fb26b6"
Content-Type: text/html; charset=UTF-8
Content-Length: 1016
X-DNS-Prefetch-Control: off
```
