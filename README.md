# Portofolio — Reza Galang Kurniawan

Portofolio satu halaman: **React (Vite) + Tailwind CSS v4 + GSAP + Lenis**.
Konsep visual: dashboard status sistem / dokumentasi REST API — cocok dengan
profil kamu sebagai backend engineer yang kerja dengan Laravel, REST API, dan
server Linux. Nav pakai gaya route (`/about`, `/projects`, dst), pengalaman
kerja tampil sebagai log dengan status "active", proyek tampil sebagai
endpoint yang bisa difilter per tag teknologi.

## Kenapa React, bukan Vue

- Skill kamu di CV sudah mencantumkan JavaScript dan Node.js — ekosistem
  React langsung nyambung.
- Lowongan software engineer di Indonesia jauh lebih sering minta React
  dibanding Vue, jadi repo ini juga jadi contoh kerja yang relevan untuk
  lamaran kamu.
- Vite memberi dev server cepat + build production ringan tanpa konfigurasi
  tambahan.

## Kenapa animasinya begini, bukan efek generik "AI slop"

Sengaja **dihindari**: gradient blob mengambang, kartu miring 3D saat
hover, cursor custom, confetti, atau reveal fade-up yang sama persis di
semua elemen tanpa alasan. Yang dipakai justru animasi yang **fungsional
dan sesuai konsep** halaman ini:

| Elemen | Kenapa begini |
|---|---|
| Nama di hero "mengetik" karakter per karakter (GSAP `SplitText`) | Meniru sistem yang sedang boot — pas dengan font mono & tema terminal, bukan sekadar fade generik |
| Progress bar tipis di atas | Fungsional — menunjukkan posisi scroll, bukan hiasan gradient |
| Indikator aktif di nav yang meluncur mengikuti section | Menegaskan metafora "route" (`/about`, `/projects`) yang sudah dipakai sejak awal |
| Hover di kartu proyek memunculkan `200 OK · 42ms` | Konsisten dengan framing kartu sebagai "endpoint", bukan tilt/zoom acak |
| Reveal saat scroll pakai stagger nyata (bukan delay acak) | Grup elemen (kartu, baris skill) muncul berurutan sesuai struktur datanya |
| Smooth scroll (Lenis) | Terasa premium tanpa mengganggu — otomatis nonaktif kalau OS diset "reduce motion" |

Semua animasi menghormati `prefers-reduced-motion`: kalau pengguna
mengaktifkan itu di OS-nya, animasi dimatikan dan konten langsung tampil
penuh — tidak ada yang tersembunyi atau rusak.

## Struktur folder

```
portfolio-reza/
├─ public/
│  ├─ CV_Reza_Galang_Kurniawan.pdf   ← tombol "Unduh CV" mengambil file ini
│  └─ favicon.svg
├─ src/
│  ├─ components/                    ← satu file per bagian halaman
│  │  ├─ Nav.jsx        (indikator aktif meluncur via GSAP)
│  │  ├─ Hero.jsx       (entrance sequence via GSAP + SplitText)
│  │  ├─ About.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Projects.jsx   (filter tag + hover "response status")
│  │  ├─ Skills.jsx
│  │  └─ Contact.jsx
│  ├─ data/content.js                ← SEMUA teks & data CV ada di sini
│  ├─ lib/
│  │  ├─ gsap.js                     ← setup GSAP + ScrollTrigger + SplitText
│  │  └─ smoothScroll.js             ← setup Lenis, sinkron ke GSAP ticker
│  ├─ hooks.js                       ← reveal scroll, active nav, counter (GSAP)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css                      ← theme Tailwind v4 (tanpa config JS terpisah)
├─ index.html
├─ vite.config.js                    ← plugin @tailwindcss/vite
└─ package.json
```

> Catatan: Tailwind v4 tidak lagi butuh `tailwind.config.js` atau
> `postcss.config.js` untuk setup dasar seperti ini — semua token warna &
> font didefinisikan langsung di `src/index.css` lewat blok `@theme`, dan
> plugin `@tailwindcss/vite` menangani scanning class otomatis.

## Langkah menjalankan

1. **Ekstrak folder ini**, lalu buka terminal di dalamnya:
   ```bash
   cd portfolio-reza
   ```

2. **Install dependency** (sekali saja):
   ```bash
   npm install
   ```

3. **Jalankan mode development**:
   ```bash
   npm run dev
   ```
   Vite akan menampilkan URL lokal, biasanya `http://localhost:5173`.

4. **Build untuk production**:
   ```bash
   npm run build
   ```
   Hasilnya ada di folder `dist/`.

5. **Preview hasil build** (opsional):
   ```bash
   npm run preview
   ```

## Cara deploy (gratis)

- **Vercel**: `npm i -g vercel` → jalankan `vercel` di folder ini.
- **Netlify**: drag-and-drop folder `dist/` (setelah `npm run build`) ke
  [app.netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages**: push ke repo GitHub, pakai `gh-pages` atau GitHub
  Actions untuk publish folder `dist/`.

## Cara mengubah konten

Edit `src/data/content.js` — semua nama, pengalaman kerja, proyek, dan
skill terpusat di sana. Tidak perlu sentuh komponen React untuk update
data CV.

Untuk ubah warna/font, edit blok `@theme` di `src/index.css`:

```css
@theme {
  --color-ink: #10141F;
  --color-amber: #E8A33D;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  /* ... */
}
```

Setiap `--color-nama` otomatis jadi class `bg-nama`, `text-nama`,
`border-nama` — tidak perlu daftar ulang di file config terpisah.

## Fitur interaktif

- Navigasi aktif otomatis mengikuti scroll, dengan indikator pil yang
  meluncur halus (GSAP).
- Entrance sequence di hero: badge status, nama (efek "boot"), subteks,
  tombol, dan statistik muncul berurutan.
- Angka statistik animasi hitung naik saat pertama kali terlihat, plus
  penghitung "uptime karier" real-time.
- Kartu pengalaman kerja bisa diklik untuk expand/collapse detail tugas.
- Grid proyek bisa difilter berdasarkan tag teknologi.
- Hover di kartu proyek memunculkan status respons ala API (`200 OK`).
- Tombol salin email dengan feedback visual.
- Smooth scroll (Lenis) + progress bar scroll tipis di atas halaman.
- Elemen muncul dengan stagger saat discroll, menghormati
  `prefers-reduced-motion`.
- Fully responsive dari mobile (menu hamburger) sampai desktop.
