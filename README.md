# 🚀 Portfolio - Development & Deployment Guide

Panduan untuk menjalankan project secara lokal, melakukan update, dan deploy portfolio ke GitHub Pages menggunakan Vite dan gh-pages.

## 🛠️ 1. Menjalankan Project di Local

Install dependencies (cukup sekali atau jika ada dependencies baru):

```bash
npm install
```

Menjalankan development server:

```bash
npm run dev
```

Buka URL yang muncul di terminal, biasanya:

```text
http://localhost:5173/
```

## 📦 2. Menyimpan Perubahan ke GitHub

Setelah selesai melakukan perubahan pada project, jalankan perintah berikut:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 🌐 3. Deploy ke GitHub Pages

Setelah perubahan berhasil di-push ke GitHub, jalankan:

```bash
npm run deploy
```

Perintah ini otomatis menjalankan:

1. `npm run build` — Membuat production build.
2. `gh-pages -d dist` — Meng-upload folder `dist` ke branch `gh-pages`.

**Tidak perlu menjalankan `npm run build` secara manual**, karena sudah otomatis melalui script `predeploy`.

## ⚙️ 4. Konfigurasi GitHub Pages

Pastikan konfigurasi repository sudah benar:

1. Buka repository di GitHub.
2. Masuk ke **Settings → Pages**.
3. Pada bagian Build and deployment, pilih **Deploy from a branch**.
4. Pilih branch `gh-pages`.
5. Pilih folder `/ (root)`.
6. Klik **Save**.

## 🔗 5. Website Portfolio

Website dapat diakses melalui:

```text
https://USERNAME.github.io/NAMA-REPOSITORY/
```

Ganti `USERNAME` dan `NAMA-REPOSITORY` sesuai repository GitHub kamu.

## ⚠️ 6. Catatan Penting

Pastikan `vite.config.js` memiliki konfigurasi `base` sesuai nama repository.

Contoh jika nama repository adalah `portfolio`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

Jika repository bernama `USERNAME.github.io`, gunakan:

```javascript
base: '/',
```

---

## 📝 Quick Reminder

Setiap selesai mengedit portfolio dan ingin memperbarui website:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

**Ingat:**
- `git push` = Mengirim kode ke GitHub.
- `npm run deploy` = Memperbarui website GitHub Pages.

Selamat mengembangkan portfolio! 🎉