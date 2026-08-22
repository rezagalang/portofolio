export const profile = {
  name: 'Reza Galang Kurniawan',
  role: 'Software Engineer',
  location: 'Sidoarjo, Jawa Timur',
  email: 'rezagalang767@gmail.com',
  phone: '+62 812 1414 9934',
  linkedin: 'linkedin.com/in/rezagalang',
  linkedinUrl: 'https://linkedin.com/in/rezagalang',
  // Titik mulai karier profesional dipakai untuk penghitung "uptime" di hero.
  careerStart: '2023-01-01',
  about:
    'Lulusan S1 Teknik Informatika dengan pengalaman lebih dari 2 tahun di bidang pengembangan aplikasi dan teknologi informasi. Terbiasa merancang, mengembangkan, melakukan maintenance, testing, debugging, dan troubleshooting aplikasi berbasis web menggunakan Laravel dan CodeIgniter — mulai dari struktur database, integrasi REST API, sampai pengelolaan server berbasis Linux dan Docker.',
}

export const specs = [
  { label: 'Lokasi', value: 'Sidoarjo, Jawa Timur' },
  { label: 'Pendidikan', value: 'S1 Teknik Informatika — IPK 3.64' },
  { label: 'Kampus', value: 'Universitas 17 Agustus 1945 Surabaya' },
  { label: 'Periode Studi', value: '2020 – 2024' },
]

export const experiences = [
  {
    company: 'Data Digital Center',
    role: 'Software Engineer (Fulltime)',
    period: '2024 — 2026',
    current: true,
    points: [
      'Mengembangkan dan memelihara aplikasi web menggunakan Laravel/CodeIgniter sesuai kebutuhan bisnis.',
      'Mengembangkan fitur baru serta melakukan maintenance dan peningkatan performa aplikasi.',
      'Melakukan debugging, troubleshooting, testing, dan perbaikan bug untuk memastikan stabilitas sistem.',
      'Merancang dan mengoptimalkan struktur database menggunakan MySQL dan PostgreSQL.',
      'Membangun dan mengintegrasikan REST API untuk kebutuhan aplikasi web dan mobile.',
      'Meningkatkan keamanan, efisiensi, dan skalabilitas aplikasi melalui praktik pengembangan yang baik.',
      'Melakukan analisis kebutuhan sistem dan memberikan solusi teknis sesuai kebutuhan pengguna.',
      'Berkolaborasi dengan tim dalam proses perancangan, implementasi, testing, dan maintenance aplikasi.',
      'Mengelola environment aplikasi dan deployment server berbasis Linux.',
    ],
  },
  {
    company: 'PT Jaster Intermedia Network',
    role: 'Web Programmer (Internship)',
    period: '2023',
    current: false,
    points: [
      'Berpartisipasi dalam pengembangan dan maintenance aplikasi web sesuai kebutuhan proyek.',
      'Mengembangkan fitur menggunakan teknologi web dan melakukan perbaikan terhadap sistem yang sudah berjalan.',
      'Melakukan testing, bug tracking, debugging, dan troubleshooting untuk meningkatkan kualitas aplikasi.',
      'Menganalisis kebutuhan sistem serta membantu menentukan solusi teknis yang sesuai.',
      'Merancang alur sistem dan antarmuka aplikasi berdasarkan kebutuhan proyek.',
      'Merancang struktur database serta melakukan implementasi dan optimasi query untuk mendukung performa aplikasi.',
      'Berkolaborasi dengan tim dalam proses pengembangan, evaluasi, dan peningkatan aplikasi.',
    ],
  },
]

export const projects = [
  {
    name: 'Smart Attendance System',
    method: 'GET',
    route: '/projects/smart-attendance-system',
    description:
      'Sistem absensi berbasis wajah dengan deteksi liveness untuk mencegah spoofing, terhubung ke aplikasi mobile lewat REST API.',
    tags: ['Flutter', 'Laravel', 'REST API', 'Face Recognition'],
  },
  {
    name: 'Canteen Management System',
    method: 'GET',
    route: '/projects/canteen-management-system',
    description:
      'Sistem pengelolaan transaksi dan stok kantin, mencakup pencatatan penjualan dan laporan harian.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'Inventory Management System',
    method: 'GET',
    route: '/projects/inventory-management-system',
    description:
      'Sistem pengelolaan stok barang dengan pelacakan keluar-masuk inventaris dan struktur database yang dioptimalkan.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'Delivery Management System',
    method: 'GET',
    route: '/projects/delivery-management-system',
    description:
      'Sistem pengelolaan pengiriman barang, mulai dari penjadwalan hingga pelacakan status pengantaran.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'School Management System',
    method: 'GET',
    route: '/projects/school-management-system',
    description:
      'Sistem administrasi sekolah untuk pengelolaan data siswa, akademik, dan operasional harian.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    name: 'Talenta',
    method: 'GET',
    route: '/projects/talenta',
    description:
      'Sistem penilaian bakat dan potensi siswa dengan integrasi AI untuk membantu proses asesmen.',
    tags: ['Laravel', 'AI Integration'],
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['PHP', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Web Development',
    items: ['Laravel', 'CodeIgniter', 'Bootstrap', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'API',
    items: ['REST API', 'API Integration'],
  },
  {
    title: 'Server & Infrastruktur',
    items: ['Linux', 'Nginx', 'Apache', 'Docker'],
  },
  {
    title: 'IT Support',
    items: ['Troubleshooting', 'System Maintenance', 'Windows Troubleshooting', 'Network Troubleshooting'],
  },
  {
    title: 'Version Control',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'Software Engineering',
    items: ['Debugging', 'Testing', 'Performance Optimization', 'System Analysis'],
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
