# read-message-whatsapp-bussines-facebook
google script, membaca pesan yang masuk di whatsapp bisnis di facebook developer

rutin harus dimasukkan ke dalam bagian dari webhook atau file callbackurl
ini hanya potongan saja, hanya bagian respon post
untuk respon get bisa cari langsung di dokumentasi facebook developer

contoh respon yang masuk kalau ada pesan atau reply ke akun WA bisnis kita sbb

{"object":"whatsapp_business_account","entry":[{"id":"11525168xxxx","changes":[{"value":{"messaging_product":"whatsapp","metadata":{"display_phone_number":"6285156xxxxx","phone_number_id":"11492659xxxxx"},"contacts":[{"profile":{"name":"macancrew"},"wa_id":"62852442xxxxx"}],"messages":[{"from":"6285244xxxxx","id":"wamid.HBgNNjI4NTxxx==","timestamp":"1674741521","text":{"body":"silahkan explore sesuai keperluan"},"type":"text"}]},"field":"messages"}]}]}

karena webhook saya menggunakan google-script jadi pesan masuknya sy simpan saja ke google-sheet
intinya adalah contoh respom JSON saat ada pesan masuk 

<img src=Image3.jpg>

contoh videonya

https://t.co/n77w1XupvC
