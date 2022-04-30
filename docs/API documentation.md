# API Documentation

## Endpoints

### /app/ (GET)
#### Request cURL

```
http://localhost:5555/app/
```

#### Response body

```

```

#### Response headers

```

```

### /app/login (POST)
#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

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
