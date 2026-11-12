# Sprint 1 · 6–13 Nov 2026 · 19 SP

**Sprint goal:** Mahasiswa terverifikasi bisa memposting barang dan melihat detailnya.

## Sprint events

- Planning: 6 Nov
- Daily stand-up 15 menit (online)
- Review & demo: 13 Nov
- Retrospective: 13 Nov

## Sprint backlog

| ID | Item | SP | PIC |
|---|---|---|---|
| PBI-01 | Registrasi, OTP email kampus, pilih kampus | 5 | Dev · Wella |
| PBI-02 | Post Item dengan foto & titik COD | 8 | Dev · Fikriyyah |
| PBI-03 | Mode Sell / Swap / Donate | 3 | Dev · Casiella |
| PBI-04 | Detail barang + lencana verifikasi | 3 | Dev · Fikriyyah |

## Increment

PWA dengan alur daftar → posting → detail barang.

## Acceptance criteria yang sudah terpenuhi

**PBI-01**
- Hanya email berakhiran `.ac.id` yang diterima.
- OTP terdiri dari 6 digit. Bisa kirim ulang setelah 30 detik. Setelah 3x salah, harus minta kode baru.
- Kampus disarankan otomatis dari domain email.

**PBI-02**
- Foto minimal 1, maksimal 5. Foto pertama jadi sampul. Ukuran gambar dikecilkan otomatis ke 800 px.
- Titik COD dipilih dari peta mini atau dari daftar titik di kampus.
- Validasi berlaku untuk semua field wajib.

**PBI-03**
- **Sell:** wajib mengisi harga, minimal Rp1.000.
- **Swap:** wajib mengisi "ingin ditukar dengan".
- **Donate:** barang otomatis gratis.
- Beranda bisa difilter per mode.

**PBI-04**
- Halaman detail berisi galeri foto, mode, kategori, kondisi, harga, penjual, dan titik COD.
- Lencana **Mahasiswa terverifikasi** tampil di kartu barang, detail barang, dan profil.

## Di luar cakupan (dikunci)

Chat dengan pemilik, pencarian, favorit, bagikan, dan edit profil.

## Dependensi

Konfigurasi Supabase Auth (OTP) dan skema database dari Sprint 0. Di prototipe ini keduanya **masih disimulasikan**.

## Catatan

Kolom Increment di slide menyebut "chat owner berjalan di PWA", padahal chat tidak ada di backlog Sprint 1. Perlu dikonfirmasi saat review.
