# Portofolio — Reza Galang Kurniawan

React (Vite) + Tailwind CSS v4 + GSAP + Lenis + Lucide React.

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke dist/
npm run preview  # pratinjau hasil build
```

## Struktur

```
public/                      CV_Reza_Galang_Kurniawan.pdf (tombol Download CV), favicon
src/data/content.js          SEMUA teks & data (profil, pengalaman, proyek, skill)
src/index.css                design token (@theme) + utilitas dasar
src/components/              Nav, Hero, About, Experience, Projects, Skills, Contact, ui
src/lib/                     setup GSAP + Lenis
src/hooks.js                 scroll reveal, nav aktif
```

## Design system

- Warna: graphite hangat (`bg`, `surface`, `raised`) + satu aksen tembaga (`accent`).
- Tipografi: Instrument Serif (judul), Inter (isi), JetBrains Mono (label teknis).
- Animasi: entrance hero singkat, scroll reveal halus, garis pemisah yang tergambar,
  Lenis smooth scroll. Semua dimatikan otomatis bila OS memakai `prefers-reduced-motion`.

## Mengubah konten

Edit `src/data/content.js`. Untuk menampilkan tangkapan layar asli Detags di frame ponsel,
taruh gambar di `public/` lalu isi `featuredProject.screenshot` (mis. `'/detags-home.png'`).
Jika kosong, yang tampil adalah ilustrasi alur pesanan.

## Mode dark & light

- Default selalu **dark**; pilihan pengunjung disimpan di `localStorage` (kunci `theme`).
- Tema dipasang lewat atribut `data-theme` pada `<html>` (skrip kecil di `index.html` mencegah kedipan).
- Token dark ada di `@theme`, token light di blok `:root[data-theme="light"]` pada `src/index.css`.
- Palet light varian ini: **Abu terang dingin**. Posisi toggle: **navbar (desktop + header mobile)**.
- Logika: `src/theme.js`, tombol: `src/components/ThemeToggle.jsx`.