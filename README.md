# ReUse · Sprint 1

Prototipe PWA **ReUse — Your Old, Their Gold**: tempat mahasiswa menjual, menukar, atau mendonasikan barang bekas di sekitar kampus.

Build ini **berhenti di Sprint 1** (6–13 Nov 2026).

- **Live:** https://reuse-sprint1.vercel.app
- **Sprint goal:** mahasiswa terverifikasi bisa memposting barang dan melihat detailnya.

## Cakupan Sprint 1

| ID | Sprint Backlog | SP | PIC | Status |
|---|---|---|---|---|
| PBI-01 | Registrasi, OTP email kampus, pilih kampus | 5 | Wella | ✅ |
| PBI-02 | Post item dengan foto & titik COD | 8 | Fikriyyah | ✅ |
| PBI-03 | Mode Sell / Swap / Donate | 3 | Casiella | ✅ |
| PBI-04 | Detail barang + lencana verifikasi | 3 | Fikriyyah | ✅ |

Fitur di luar Sprint 1 (chat, pencarian, favorit, bagikan, edit profil) **sudah ada tombolnya, tapi dikunci** (ikon gembok, tidak bisa diklik). Tombol ini ditandai dengan atribut `data-lock` di HTML/JS.

## Struktur folder

```
reuse-sprint1/
├── index.html          # semua layar (section.screen)
├── css/styles.css      # gaya & token warna (:root)
├── js/app.js           # logika: navigasi, OTP, posting, detail
├── vercel.json         # konfigurasi deploy Vercel
├── docs/
│   ├── sprint-1.md     # catatan sprint & cara demo
│   └── changelog.md    # riwayat perubahan
└── design/
    ├── semua-layar.svg     # 21 layar dalam satu file (drag ke Figma)
    └── svg-per-layar/      # 1 file SVG per layar
```

## Menjalankan di komputer

Tidak perlu install apa pun. Pilih salah satu cara:

- Buka `index.html` langsung di browser, **atau**
- Jalankan server lokal: `npx serve .` lalu buka http://localhost:3000

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di Vercel: **Add New → Project →** pilih repo ini.
3. Framework Preset: **Other**. Build Command: kosong. Output Directory: `.` (root).
4. Deploy. Setelah itu setiap `git push` ke branch `main` otomatis ter-deploy.

> Project `reuse-sprint1` di tim Vercel **reuse2** saat ini dideploy manual (tanpa Git). Hubungkan repo ini di **Settings → Git** project tersebut supaya push berikutnya langsung memperbarui https://reuse-sprint1.vercel.app.

## Cara demo (13 Nov)

1. Onboarding → **Mulai**.
2. Daftar pakai email `.ac.id` (contoh `nama@mail.unpad.ac.id`). Email non-kampus akan ditolak.
3. Kode OTP muncul di notifikasi atas layar (simulasi email). **Ketuk notifikasi** untuk mengisi otomatis.
4. Pilih kampus → Beranda → tombol **+** untuk posting barang.
5. Setelah posting, halaman detail tampil dengan lencana **Mahasiswa terverifikasi**.
6. Reset demo: **Profil → Keluar & reset demo**.

## Catatan teknis

- **OTP masih simulasi.** Belum tersambung ke Supabase Auth. Kode dibuat di browser (`sendCode()` di `js/app.js`).
- **Data disimpan di `localStorage`** browser masing-masing (key `reuse-s1`), belum ke database.
- **Data kampus & titik COD** ada di konstanta `CAMPUS` di `js/app.js`.
- **Barang contoh** ada di konstanta `SEED` di `js/app.js`.
- Font: Poppins (Google Fonts). Warna utama: `#2D4B33`.

## Menambah fitur di sprint berikutnya

- **Membuka fitur yang dikunci:** hapus atribut `data-lock` dari tombolnya, lalu beri handler sendiri.
- **Menyambungkan Supabase:** ganti `sendCode()` dan pengecekan di `#otpF` dengan `supabase.auth.signInWithOtp` / `verifyOtp`. Lalu ganti `save()` dan `all()` dengan query ke tabel `items`.
- Catat setiap perubahan di `docs/changelog.md`.
