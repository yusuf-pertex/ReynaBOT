<a name="top"></a>
<br>
<div align="center">
    <img src="./logo.png" alt="Logo" width="275">
    <br><br>
    <img src="https://img.shields.io/badge/%C2%A9-ReynaBOT-white?style=flat" alt="ReynaBOT" width="125">
    <p align="center">
        Simple WhatsApp BOT by <a href="https://wa.me/6283873115706">@yusuf.dkv</a>
        <br>
        <a href="https://github.com/yusufexpert/ReynaBOT/blob/master/README.md"><b>Explore the docs ></b></a>
        <br><br>
        <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Contact-blue?style=flat" alt="Contact"></a>
        <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Request%20Feature-blue?style=flat" alt="Request Feature"></a>
        <a href="https://wa.me/6283873115706"><img src="https://img.shields.io/badge/Report%20Bug-blue?style=flat" alt="Report"></a>
    </p>
</div>
<hr>
<div align="center" markdown="1">
<br>

> **Warning** **Script ini sudah tidak dilanjutkan lagi**

<br>
</div>
<hr>

### © ReynaBOT
**ReynaBOT** adalah BOT ![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white) yang dibuat oleh [![@yusuf.dkv](https://img.shields.io/badge/@yusuf.dkv-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/yusuf.dkv/) menggunakan bahasa pemrograman ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> **Note** Script BOT ini menggunakan client library [`whatsapp-web.js »`](https://github.com/pedroslopez/whatsapp-web.js.git)

<hr>

<details>
<summary>Daftar isi</summary>
<div markdown="1">

1. [Cara Pakai »](#cara-pakai)
2. [Cara Menambah Plugin »](#cara-menambah-plugin)
3. [Fitur Unggulan »](#fitur-unggulan)
4. [License »](#license)
5. [Contact »](#contact)

</div>
</details>

<hr>

### Cara Pakai

**Requirements:**
- [![Git](https://img.shields.io/badge/Git-Download-F05032?style=flat&labelColor=white&logo=git)](https://git-scm.com/downloads)
- [![NodeJs](https://img.shields.io/badge/Node.js-Download-339933?style=flat&labelColor=white&logo=nodedotjs)](https://nodejs.org/en/download)
- [![FFmpeg](https://img.shields.io/badge/FFmpeg-Download-007808?style=flat&labelColor=white&logo=ffmpeg&logoColor=007808)](https://ffmpeg.org/download.html)

<ul>
<details>
<summary>Terminal</summary>
<div markdown="1">

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

</div>
</details>
        
<details>
<summary>Replit</summary>
<div markdown="1">
	
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

</div>
</details>
</ul>

<hr>

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

<hr>

### Fitur unggulan
- [x] Mudah untuk digunakan.
- [x] Script **`JavaScript`** yang ter-struktur.
- [x] Memiliki fitur **`Extra`** yang memudahkan Owner BOT.
- [x] Memiliki fitur **`Check Plugins`** agar bisa mendeteksi Error di Script Plugin.
- [x] Script yang otomatis ter-update tanpa harus memulai ulang Script.
- [x] Memiliki beberapa Fitur unggulan.

Lihat di folder [`plugins`](https://github.com/yusufexpert/ReynaBOT/tree/master/plugins) untuk melihat semua Plugin.

<hr>

### License
Didistribusikan di bawah Lisensi MIT. Lihat [`LICENSE`](https://github.com/yusufexpert/ReynaBOT/blob/master/LICENSE) untuk informasi lebih lanjut.

<hr>

### Contact
- [![WhatsApp](https://img.shields.io/badge/+62%20838%207311%205706-25D366?style=flat&logoColor=white&logo=whatsapp)](https://wa.me/6283873115706)
- [![Instagram](https://img.shields.io/badge/@yusuf.dkv-E4405F?style=flat&logoColor=white&logo=instagram)](https://www.instagram.com/yusuf.dkv/)
- [![Gmail](https://img.shields.io/badge/yusuf.expert.official@gmail.com-EA4335?style=flat&logoColor=white&logo=gmail)](yusuf.expert.official@gmail.com)

<p align="right"><a href="#top">↑ Back to top</a></p>

[**github.com/yusufexpert/ReynaBOT**](https://github.com/yusufexpert/ReynaBOT)
