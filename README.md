RESTFUL API espress FInal Project SkilVul
=========================================

# role:
1 = pelapor
2 = konselor
3 = admin

## /auth/login [POST]

body
```
{
  "email":"",
  "pass":""
}
```
response
```
{
  "message": "",
  "token": "",
}
```
token berisi object email dalam bentuk string dan role dalam bentuk integer
```
{
  email: "",
  role: 0
}
```

 
## /auth/register [POST]

body
```
{
  "username":"",
  "nama":"",
  "email":"",
  "pass":""
}
```
headers
```
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Role: 3
```