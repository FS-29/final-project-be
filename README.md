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
  "role": 2
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
