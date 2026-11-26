const base = import.meta.env?.BASE_URL ?? '/'

export const profile = {
  name: 'Reza Galang Kurniawan',
  role: 'Software Engineer',
  location: 'Sidoarjo, Jawa Timur',
  email: 'rezagalang767@gmail.com',
  phone: '+62 812 1414 9934',
  linkedin: 'linkedin.com/in/rezagalang',
  linkedinUrl: 'https://linkedin.com/in/rezagalang',
  cvUrl: `${base}CV_Reza_Galang_Kurniawan.pdf`,
  cvFileName: 'CV_Reza_Galang_Kurniawan.pdf',
  intro:
    'Membangun aplikasi web dan REST API dengan Laravel, dari rancangan database sampai deployment di server Linux. Pengalaman lebih dari dua tahun, termasuk aplikasi mobile Flutter yang sudah rilis di Google Play.',
}

export const about = {
  summary: [
    'Lulusan S1 Teknik Informatika dengan pengalaman lebih dari dua tahun di pengembangan aplikasi dan teknologi informasi. Pengalaman saya berpusat pada aplikasi web berbasis Laravel dan CodeIgniter: dari analisis kebutuhan dan rancangan database, integrasi REST API, sampai pengelolaan server Linux dan Docker.',
    'Saya terbiasa bekerja dalam tim, menerjemahkan kebutuhan bisnis menjadi solusi teknis yang aman dan efisien, lalu merawatnya lewat testing, debugging, dan troubleshooting.',
  ],
  focus: [
    { title: 'Aplikasi web', detail: 'Laravel dan CodeIgniter' },
    { title: 'REST API', detail: 'Untuk kebutuhan aplikasi web dan mobile' },
    { title: 'Database', detail: 'MySQL dan PostgreSQL, desain struktur dan optimasi query' },
    { title: 'Server', detail: 'Linux, Nginx, Apache, dan Docker' },
    { title: 'Mobile', detail: 'Flutter, termasuk Detags yang rilis di Google Play' },
  ],
  education: {
    school: 'Universitas 17 Agustus 1945 Surabaya',
    degree: 'S1 Teknik Informatika',
    period: '2020 — 2024',
    gpa: 'IPK 3.64',
  },
  openTo: [
    'Software Engineer',
    'Backend Developer',
    'Web Developer',
    'Flutter Developer',
    'IT Support / Technical Support',
  ],
}

export const heroStack = ['Laravel', 'CodeIgniter', 'REST API', 'MySQL', 'PostgreSQL', 'Flutter', 'Linux', 'Docker']

export const experiences = [
  {
    company: 'Data Digital Center',
    role: 'Software Engineer',
    type: 'Fulltime',
    period: '2024 — 2026',
    points: [
      'Mengembangkan dan memelihara aplikasi web menggunakan Laravel/CodeIgniter sesuai kebutuhan bisnis.',
      'Mengembangkan fitur baru serta melakukan maintenance dan peningkatan performa aplikasi.',
      'Membangun dan mengintegrasikan REST API untuk kebutuhan aplikasi web dan mobile.',
      'Merancang dan mengoptimalkan struktur database menggunakan MySQL dan PostgreSQL.',
      'Melakukan debugging, troubleshooting, testing, dan perbaikan bug untuk memastikan stabilitas sistem.',
      'Meningkatkan keamanan, efisiensi, dan skalabilitas aplikasi melalui praktik pengembangan yang baik.',
      'Melakukan analisis kebutuhan sistem dan memberikan solusi teknis sesuai kebutuhan pengguna.',
      'Berkolaborasi dengan tim dalam proses perancangan, implementasi, testing, dan maintenance aplikasi.',
      'Mengelola environment aplikasi dan deployment server berbasis Linux.',
    ],
  },
  {
    company: 'PT Jaster Intermedia Network',
    role: 'Web Programmer',
    type: 'Internship',
    period: '2023',
    points: [
      'Berpartisipasi dalam pengembangan dan maintenance aplikasi web sesuai kebutuhan proyek.',
      'Mengembangkan fitur menggunakan teknologi web dan melakukan perbaikan terhadap sistem yang sudah berjalan.',
      'Merancang struktur database serta melakukan implementasi dan optimasi query untuk mendukung performa aplikasi.',
      'Melakukan testing, bug tracking, debugging, dan troubleshooting untuk meningkatkan kualitas aplikasi.',
      'Menganalisis kebutuhan sistem serta membantu menentukan solusi teknis yang sesuai.',
      'Merancang alur sistem dan antarmuka aplikasi berdasarkan kebutuhan proyek.',
      'Berkolaborasi dengan tim dalam proses pengembangan, evaluasi, dan peningkatan aplikasi.',
    ],
  },
]

export const featuredProject = {
  name: 'Detags',
  eyebrow: 'Rilis di Google Play',
  headline: 'Pemesanan makanan kantin Untag Surabaya',
  description:
    'Pelanggan memilih kantin dan menu, membayar (termasuk QRIS), lalu memantau pesanan; kasir memproses pesanan dan kurir mengantarnya. Dilengkapi program poin.',
  tags: ['Flutter', 'Firebase', 'REST API'],
  url: 'https://play.google.com/store/apps/details?id=com.kantinuntagsby.detags',
  urlLabel: 'Lihat di Google Play',
  screenshot: null,
  flow: [
    { title: 'Pilih kantin dan menu', actor: 'Pelanggan', state: 'done' },
    { title: 'Bayar, termasuk QRIS', actor: 'Pelanggan', state: 'done' },
    { title: 'Pesanan diproses', actor: 'Kasir', state: 'active' },
    { title: 'Pesanan diantar', actor: 'Kurir', state: 'next' },
  ],
}

export const projects = [
  {
    name: 'Smart Attendance System',
    description:
      'Sistem absensi berbasis wajah dengan deteksi liveness untuk mencegah spoofing, terhubung ke aplikasi mobile lewat REST API.',
    tags: ['Flutter', 'Laravel', 'REST API', 'Face Recognition'],
    highlight: true,
  },
  {
    name: 'Talenta',
    description:
      'Sistem penilaian bakat dan potensi siswa dengan integrasi AI untuk membantu proses asesmen.',
    tags: ['Laravel', 'AI Integration'],
    highlight: true,
  },
  {
    name: 'Canteen Management System',
    description: 'Sistem pengelolaan transaksi dan stok kantin, mencakup pencatatan penjualan dan laporan harian.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'Inventory Management System',
    description:
      'Sistem pengelolaan stok barang dengan pelacakan keluar-masuk inventaris dan struktur database yang dioptimalkan.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'Delivery Management System',
    description: 'Sistem pengelolaan pengiriman barang, mulai dari penjadwalan hingga pelacakan status pengantaran.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'School Management System',
    description: 'Sistem administrasi sekolah untuk pengelolaan data siswa, akademik, dan operasional harian.',
    tags: ['Laravel', 'MySQL'],
  },
]

export const skillGroups = [
  { title: 'Programming Languages', items: ['PHP', 'JavaScript', 'Python', 'SQL'] },
  { title: 'Backend Development', items: ['Laravel', 'CodeIgniter', 'Node.js'] },
  { title: 'Frontend Development', items: ['Bootstrap', 'Tailwind CSS'] },

  { title: 'Mobile Development', items: ['Flutter', 'Firebase'] },
  { title: 'Database', items: ['MySQL', 'PostgreSQL', 'Database Design', 'Query Optimization'] },
  { title: 'API Integration', items: ['REST API', 'API Integration'] },
  { title: 'Server & Infrastructure', items: ['Linux', 'Nginx', 'Apache', 'Docker'] },
  {
    title: 'Development Tools',
    items: ['Git', 'GitHub', 'Debugging', 'Testing', 'Performance Optimization', 'System Analysis'],
  },
  {
    title: 'IT Support',
    items: ['Troubleshooting', 'System Maintenance', 'Windows Troubleshooting', 'Internet & Network Troubleshooting'],
  },
]

export const softSkills = [
  'Communication',
  'Analytical Skills',
  'Problem Solving',
  'Adaptability',
  'Teamwork',
  'Creativity',
  'Time Management',
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
