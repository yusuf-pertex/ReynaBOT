<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="Logo">
    <img src="https://cdn.pixabay.com/photo/2018/09/11/14/49/moe-3669736_1280.png" alt="Logo" width="200">
  </a>

  <h3 align="center">© ReynaBOT</h3>

  <p align="center">
    Simple WhatsApp BOT by @yusuf.dkv
    <br />
    <a href="https://github.com/yusufexpert/ReynaBOT/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wa.me/6283873115706">Contact</a>
    ·
    <a href="https://wa.me/6283873115706">Request Feature</a>
    ·
    <a href="https://wa.me/6283873115706">Report Bug</a>
  </p>
</div>

## © ReynaBOT
ReynaBOT adalah BOT WhatsApp yang dibuat oleh [@yusuf.dkv](https://www.instagram.com/yusuf.dkv/) menggunakan bahasa pemrograman `JavaScript`.

BOT ini sengaja dibuat simple agar mempermudah pemakaiannya.

### Cara Pakai
_Script BOT ini menggunakan Pustaka klient [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js.git)._
1. Buka Command Prompt
2. Mengkloning Repository
   ```sh
   git clone https://github.com/yusufexpert/ReynaBOT.git
   ```
3. Buka Directory Script ini
   ```sh
   cd ReynaBOT
   ```
4. Install semua Module yang dibutuhkan. lihat di `package.json`
   ```sh
   npm install <nama module>
   ```
5. Memulai BOT
   ```sh
   npm start
   ```

## Cara menambah Fitur/Plugin
Jika ingin menambahkan Fitur/Plugin sendiri anda harus membuatnya di Folder `plugins`.

Lalu mengisinya seperti dibawah ini:
```js
export default {
    cmd: ['<command>'],
    tag: '<kategori fitur>',
    info: '<info fitur>',
    response: async (msg, client, xt) => {
        // isi menggunakan bahasa pemrograman JavaScript
    }
}
```

## Fitur unggulan
- [x] Mudah untuk digunakan.
- [x] Script `JavaScript` yang ter-struktur.
- [x] Memiliki fitur `Extra` yang memudahkan Owner BOT.
- [x] Memiliki fitur `Check Plugins` agar bisa mendeteksi Error di Script Plugin.
- [x] Script yang otomatis ter-update tanpa harus memulai ulang Script.
- [x] Memiliki beberapa Fitur unggulan.

Lihat di folder [plugins](https://github.com/yusufexpert/ReynaBOT/tree/master/plugins) untuk melihat semua Fitur/PLugin.

## License
Didistribusikan di bawah Lisensi MIT. Lihat [LISENSI](https://github.com/yusufexpert/ReynaBOT/blob/master/LICENSE) untuk informasi lebih lanjut.

## Contact

Yusuf - [@yusuf.expert](https://www.instagram.com/yusuf.dkv/) - yusuf.expert.official@gmail.com

Project: [https://github.com/yusufexpert/ReynaBOT](https://github.com/yusufexpert/ReynaBOT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
