# read-message-whatsapp-bussines-facebook
google script, membaca pesan yang masuk di whatsapp bisnis di facebook developer

rutin harus dimasukkan ke dalam bagian dari webhook atau file callbackurl
ini hanya potongan saja, hanya bagian respon post
untuk respon get bisa cari langsung di dokumentasi facebook developer

contoh respon yang masuk kalau ada pesan atau reply ke akun WA bisnis kita sbb

{"object":"whatsapp_business_account","entry":[{"id":"1152516xxxxx","changes":[{"value":{"messaging_product":"whatsapp","metadata":{"display_phone_number":"6285156xxxx","phone_number_id":"114926594xxxxx"},"statuses":[{"id":"wamid.HBgNNjI4NTIxxxxx=","status":"read","timestamp":"1674739623","recipient_id":"628524xxxxx"}]},"field":"messages"}]}]}

karena webhook saya menggunakan google-script jadi pesan masuknya sy simpan saja ke google-sheet
intinya adalah contoh respom JSON saat ada pesan masuk 

<img src=Image3.jpg>
