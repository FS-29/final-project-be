RESTFUL API espress FInal Project SkilVul
=========================================

# role:
1 = pelapor

2 = konselor

3 = admin

### /auth/login [POST]

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

 
### /auth/register [POST]

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

### /profil [GET]

need header bearer token

response all profil user except id and id_user

### /profil/role [GET]

need header bearer token

response role according to #role



### /Pelapor/Alamat [GET]

need header bearer token

response data alamat

### /Pelapor/sekolah [GET]

need header bearer token

response data sekolah

### /Pelapor/sekolah [POST]

need header bearer token

req body:
```
{
  "nama": "",
  "ponsel": "",
  "email": "",
  "prov": "",
  "kab_kota": "",
  "kec": "",
  "desa": "",
  "kode_pos": "",
  "alamat":"" 
}
```

### /laporan [GET]

just role squad (user pelapor)

need header bearer token

response list of laporan from user

### /laporan/all-user [GET]

just admin 

need header bearer token

response all list of laporan from table laporans

### /laporan [POST]

just role squad (user pelapor)

need header bearer token

req body:
```
{
  "nama": "",
  "noTlp": "",
  "prov": "",
  "kabKota": "",
  "kec": "",
  "jenjang": "",
  "sekolah": "",
  "tglKejadian": "YYYY-MM-DD",
  "tingkatan": "",
  "deskripsi": "",
  "foto":""
}
```
### /upload/laporan [POST]

upload to laporan folder in cloudinary

req formdata files

res
```
{
  "success": true,
  "url": {url images}
}
```

### /upload/profil [POST]

upload to profil folder in cloudinary

req formdata files

res
```
{
  "success": true,
  "url": {url images}
}
```