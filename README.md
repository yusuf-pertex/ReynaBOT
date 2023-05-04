<a name="readme-top"></a>

<br />
<div align="center">
  <a href="Logo">
    <img src="https://cdn.pixabay.com/photo/2018/09/11/14/49/moe-3669736_1280.png" alt="Logo" width="200">
  </a>

  <h2 align="center">© ReynaBOT</h2>

  <p align="center">
    Simple WhatsApp BOT by <a href="https://wa.me/6283873115706"><strong>@yusuf.dkv</strong></a>
    <br />
    <a href="https://github.com/yusufexpert/ReynaBOT/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wa.me/6283873115706">Contact</a>
    •
    <a href="https://wa.me/6283873115706">Request Feature</a>
    •
    <a href="https://wa.me/6283873115706">Report Bug</a>
  </p>
</div>

## © ReynaBOT
**ReynaBOT** adalah BOT [**WhatsApp**](https://www.whatsapp.com) yang dibuat oleh [**@yusuf.dkv**](https://www.instagram.com/yusuf.dkv/) menggunakan bahasa pemrograman `JavaScript`

> Script BOT ini menggunakan client library [`whatsapp-web.js »`](https://github.com/pedroslopez/whatsapp-web.js.git)

`BOT akan di-Update setiap minggu`

<details>
  <summary><strong>Daftar isi</strong></summary>
<ol>
  <li><a href="#cara-pakai">Cara Pakai »</a></li>
    <ul>
      <li><a href="#command-prompt">Command Prompt »</a></li>
      <li><a href="#replit">Replit »</a></li>
    </ul>
  <li><a href="#cara-menambah-plugin">Cara menambah Plugin »</a></li>
  <li><a href="#fitur-unggulan">Fitur Unggulan »</a></li>
  <li><a href="#license">License »</a></li>
  <li><a href="#contact">Contact »</a></li>
</ol>
</details>

## Cara Pakai
### Command Prompt
1. Buka **Command Prompt**
2. Mengkloning Repository
   ```sh
   git clone https://github.com/yusufexpert/ReynaBOT.git
   ```
3. Buka Directory Script ini
   ```sh
   cd ReynaBOT
   ```
4. Install semua **Module** yang dibutuhkan.
   - lihat di [`package.json »`](https://github.com/yusufexpert/ReynaBOT/blob/master/package.json)
   ```sh
   npm install <nama module>
   ```
5. Memulai BOT
   ```sh
   npm start
   ```

### Replit
Untuk pengguna Replit ada beberapa hal yang harus dilakukan.
1. Ubah **Script** di file [`index.mjs`](https://github.com/yusufexpert/ReynaBOT/blob/master/index.mjs) menjadi seperti ini:
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
2. Tampilkan dulu file tersembunyi di **Replit**.
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
3. Jalankan **Replit** seperti biasa.

## Cara menambah Plugin
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

## Fitur unggulan
- [x] Mudah untuk digunakan.
- [x] Script **`JavaScript`** yang ter-struktur.
- [x] Memiliki fitur **`Extra`** yang memudahkan Owner BOT.
- [x] Memiliki fitur **`Check Plugins`** agar bisa mendeteksi Error di Script Plugin.
- [x] Script yang otomatis ter-update tanpa harus memulai ulang Script.
- [x] Memiliki beberapa Fitur unggulan.

Lihat di folder [`plugins`](https://github.com/yusufexpert/ReynaBOT/tree/master/plugins) untuk melihat semua Plugin.

## License
Didistribusikan di bawah Lisensi MIT. Lihat [`LICENSE`](https://github.com/yusufexpert/ReynaBOT/blob/master/LICENSE) untuk informasi lebih lanjut.

## Contact

**Yusuf**
- [**@yusuf.dkv**](https://www.instagram.com/yusuf.dkv/)
- **yusuf.expert.official@gmail.com**

<p align="right"><a href="#readme-top">↑ Back to top</a></p>

[**github.com/yusufexpert/ReynaBOT**](https://github.com/yusufexpert/ReynaBOT)
