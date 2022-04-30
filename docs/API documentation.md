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

```

#### Response body

```

```

#### Response headers

```

```

### /app/accountinfo/debug/ (GET)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/accountinfo/ (GET)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/change_username (POST)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/change_password (POST)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/delete_account (POST)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/past_entries/ (GET)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/new_entry (POST)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

1. /app/login - Attempts to login a user

2. /app/new_user - Creates a new user
3. /app/accountinfo/debug - Gets user info if given vaild id
4. /app/accountinfo/ - Gets user info if given vaild id
5. /app/change_username - Changes Username in database based on id given
6. /app/change_password - Changes password in database based on id given
7. /app/delete_account - Delete your account 
8. /app/past_entries/ - Access your past entries 
9. /app/edit_entry/:user - Edit an entry 
10. /app/new_entry/ - Create a new entry 
