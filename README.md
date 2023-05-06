<a name="readme-top"></a>

<br />
<div align="center">
  <a href="Logo">
    <img src="https://cdn.pixabay.com/photo/2018/09/11/14/49/moe-3669736_1280.png" alt="Logo" width="200">
  </a>
  <br /><br />
  <img src="https://img.shields.io/badge/%C2%A9-ReynaBOT-white?style=flat" alt="ReynaBOT" width="125">
  <p align="center">
    Simple WhatsApp BOT by <a href="https://wa.me/6283873115706"><b>@yusuf.dkv</b></a>
    <br />
    <a href="https://github.com/yusufexpert/ReynaBOT/blob/master/README.md"><b>Explore the docs »</b></a>
    <br />
    <br />
    <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Contact-blue?style=flat" alt="Contact" height="25"></a>
    <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Request%20Feature-blue?style=flat" alt="Request Feature" height="25"></a>
    <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Report%20Bug-blue?style=flat" alt="Report Bug" height="25"></a>
    
  </p>
</div>
<hr>

### © ReynaBOT
**ReynaBOT** adalah BOT ![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white) yang dibuat oleh [![@yusuf.dkv](https://img.shields.io/badge/@yusuf.dkv-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/yusuf.dkv/) menggunakan bahasa pemrograman ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> **Note** Script BOT ini menggunakan client library [`whatsapp-web.js »`](https://github.com/pedroslopez/whatsapp-web.js.git)

---

<b><details><summary>Daftar isi</summary></b>
<ol>
  <li><a href="#cara-pakai">Cara Pakai »</a></li>
  <li><a href="#cara-menambah-plugin">Cara menambah Plugin »</a></li>
  <li><a href="#fitur-unggulan">Fitur Unggulan »</a></li>
  <li><a href="#license">License »</a></li>
  <li><a href="#contact">Contact »</a></li>
</ol>
</details>

---

### Cara Pakai

**Requirements:**
- [![Git](https://img.shields.io/badge/Git-Download-F05032?style=flat&labelColor=white&logo=git)](https://git-scm.com/downloads)
- [![NodeJs](https://img.shields.io/badge/Node.js-Download-339933?style=flat&labelColor=white&logo=nodedotjs)](https://nodejs.org/en/download)
- [![FFmpeg](https://img.shields.io/badge/FFmpeg-Download-007808?style=flat&labelColor=white&logo=ffmpeg&logoColor=007808)](https://ffmpeg.org/download.html)

<ol>
<details><summary><b>Terminal</b></summary>

![Terminal](https://img.shields.io/badge/Terminal-4D4D4D?style=flat&logo=windowsterminal&logoColor=white)

- Buka **Terminal**
- Mengkloning Repository
   ```sh
   git clone https://github.com/yusufexpert/ReynaBOT.git
   ```
- Buka Directory Script ini
   ```sh
   cd ReynaBOT
   ```
- Install semua **Module** yang dibutuhkan.
  - lihat di [`package.json »`](https://github.com/yusufexpert/ReynaBOT/blob/master/package.json)
   ```sh
   npm install <nama module>
   ```
- Memulai BOT
   ```sh
   npm start
   ```

</details>
<details><summary><b>Replit</b></summary>

![Replit](https://img.shields.io/badge/Replit-F26207?style=flat&logo=replit&logoColor=white)

Untuk pengguna Replit ada beberapa hal yang harus dilakukan.
- Ubah **Script** di file [`index.mjs`](https://github.com/yusufexpert/ReynaBOT/blob/master/index.mjs) menjadi seperti ini:
```js
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: './auth',
        userDataDir: './auth/session'
    }),
    puppeteer: {
        headless: true,
        executablePath: '/nix/store/x205pbkd5xh5g4iv0g58xjla55has3cx-chromium-108.0.5359.94/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
})
```
- Tampilkan dulu file tersembunyi di **Replit**.
  - Lalu ubah file `replit.nix` menjadi seperti ini:
```nixos
{ pkgs }: {
	deps = [
		pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    pkgs.chromium
    pkgs.glib
    pkgs.nss
    pkgs.fontconfig
	];
}
```
- Jalankan **Replit** seperti biasa.

</details>
</ol>
</details>	

---




### Cara menambah Plugin
Jika ingin menambahkan **Plugin** sendiri anda harus membuatnya di Folder [`plugins »`](https://github.com/yusufexpert/ReynaBOT/tree/master/plugins)

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

---

### Fitur unggulan
- [x] Mudah untuk digunakan.
- [x] Script **`JavaScript`** yang ter-struktur.
- [x] Memiliki fitur **`Extra`** yang memudahkan Owner BOT.
- [x] Memiliki fitur **`Check Plugins`** agar bisa mendeteksi Error di Script Plugin.
- [x] Script yang otomatis ter-update tanpa harus memulai ulang Script.
- [x] Memiliki beberapa Fitur unggulan.

Lihat di folder [`plugins`](https://github.com/yusufexpert/ReynaBOT/tree/master/plugins) untuk melihat semua Plugin.

---

### License
Didistribusikan di bawah Lisensi MIT. Lihat [`LICENSE`](https://github.com/yusufexpert/ReynaBOT/blob/master/LICENSE) untuk informasi lebih lanjut.

---

### Contact
- [![WhatsApp](https://img.shields.io/badge/+62%20838%207311%205706-25D366?style=flat&logoColor=white&logo=whatsapp)](https://wa.me/6283873115706)
- [![Instagram](https://img.shields.io/badge/@yusuf.dkv-E4405F?style=flat&logoColor=white&logo=instagram)](https://www.instagram.com/yusuf.dkv/)
- [![Gmail](https://img.shields.io/badge/yusuf.expert.official@gmail.com-EA4335?style=flat&logoColor=white&logo=gmail)](yusuf.expert.official@gmail.com)

<p align="right"><a href="#readme-top">↑ Back to top</a></p>

[**github.com/yusufexpert/ReynaBOT**](https://github.com/yusufexpert/ReynaBOT)
