const base = import.meta.env?.BASE_URL ?? '/'

export const LANGS = ['id', 'en']
export const DEFAULT_LANG = 'id'

/* ---------- Data yang sama di semua bahasa ---------- */

const shared = {
  name: 'Reza Galang Kurniawan',
  role: 'Software Engineer',
  email: 'rezagalang767@gmail.com',
  phone: '+62 812 1414 9934',
  linkedin: 'linkedin.com/in/rezagalang',
  linkedinUrl: 'https://linkedin.com/in/rezagalang',
}

export const heroStack = ['Laravel', 'CodeIgniter', 'REST API', 'MySQL', 'PostgreSQL', 'Flutter', 'Linux', 'Docker']

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

/* ---------- Bahasa Indonesia ---------- */

const id = {
  htmlLang: 'id',
  meta: {
    title: 'Reza Galang Kurniawan — Software Engineer',
    description:
      'Portofolio Reza Galang Kurniawan, Software Engineer di Sidoarjo. Pengembangan aplikasi web Laravel, REST API, Flutter, dan pengelolaan server Linux.',
    ogDescription: 'Aplikasi web Laravel, REST API, Flutter, dan server Linux. Lihat proyek dan pengalaman kerja.',
  },
  profile: {
    ...shared,
    location: 'Sidoarjo, Jawa Timur',
    cvUrl: `${base}CV_Reza_Galang_Kurniawan.pdf`,
    cvFileName: 'CV_Reza_Galang_Kurniawan.pdf',
    intro:
      'Membangun aplikasi web dan REST API dengan Laravel, dari rancangan database sampai deployment di server Linux. Pengalaman lebih dari dua tahun, termasuk aplikasi mobile Flutter yang sudah rilis di Google Play.',
  },
  about: {
    title: { pre: 'Membangun sistem yang ', em: 'dipakai', post: ' orang sungguhan.' },
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
  },
  experiences: [
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
  ],
  experienceTitle: { pre: 'Pengalaman ', em: 'kerja', post: '' },
  featuredProject: {
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
  },
  projectsTitle: { pre: 'Proyek ', em: 'nyata', post: ', dari ide sampai rilis.' },
  projects: [
    {
      name: 'Smart Attendance System',
      description:
        'Sistem absensi berbasis wajah dengan deteksi liveness untuk mencegah spoofing, terhubung ke aplikasi mobile lewat REST API.',
      tags: ['Flutter', 'Laravel', 'REST API', 'Face Recognition'],
      highlight: true,
    },
    {
      name: 'Talenta',
      description: 'Sistem penilaian bakat dan potensi siswa dengan integrasi AI untuk membantu proses asesmen.',
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
  ],
  skillsTitle: { pre: 'Stack dan ', em: 'kemampuan', post: ' teknis' },
  contactTitle: { pre: 'Mari berdiskusi tentang ', em: 'peran', post: ' atau proyek berikutnya.' },
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: {
    skipToContent: 'Lewati ke konten',
    backToTopAria: (name) => `${name} — kembali ke atas`,
    mainNav: 'Navigasi utama',
    mobileNav: 'Navigasi seluler',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    cvShort: 'CV',
    downloadCv: 'Download CV',
    viewProjects: 'View Projects',
    mainStack: 'Stack utama',
    profileAria: 'Ringkasan profil dalam format JSON',
    aboutFocus: 'Fokus',
    aboutEducation: 'Pendidikan',
    aboutOpenTo: 'Terbuka untuk',
    collapse: 'Ringkas',
    seeMore: (n) => `Lihat ${n} tanggung jawab lainnya`,
    flowTitle: 'Alur pesanan',
    pointsProgram: '+ Program poin',
    flowDisclaimer: 'Ilustrasi alur — bukan tangkapan layar',
    screenshotAlt: (name) => `Tampilan aplikasi ${name}`,
    otherProjects: 'Proyek lainnya',
    techAria: 'Teknologi',
    filterAria: 'Filter teknologi',
    all: 'Semua',
    contactIntro:
      'Saya terbuka untuk posisi Software Engineer, Backend, Web, Flutter, maupun IT Support. Kirim email atau hubungi lewat LinkedIn, saya akan membalas secepatnya.',
    sendEmail: 'Kirim email',
    phone: 'Telepon',
    copyEmail: 'Salin alamat email',
    emailCopied: 'Email disalin',
    backToTop: 'Kembali ke atas ↑',
    themeToLight: 'Beralih ke mode terang',
    themeToDark: 'Beralih ke mode gelap',
    langGroup: 'Pilih bahasa',
  },
}

/* ---------- English ---------- */

const en = {
  htmlLang: 'en',
  meta: {
    title: 'Reza Galang Kurniawan — Software Engineer',
    description:
      'Portfolio of Reza Galang Kurniawan, Software Engineer in Sidoarjo. Laravel web applications, REST APIs, Flutter, and Linux server management.',
    ogDescription: 'Laravel web apps, REST APIs, Flutter, and Linux servers. Explore projects and work experience.',
  },
  profile: {
    ...shared,
    location: 'Sidoarjo, East Java',
    cvUrl: `${base}CV_Reza_Galang_Kurniawan_EN.pdf`,
    cvFileName: 'CV_Reza_Galang_Kurniawan_EN.pdf',
    intro:
      'I build web applications and REST APIs with Laravel, from database design to deployment on Linux servers. Over two years of experience, including a Flutter mobile app already released on Google Play.',
  },
  about: {
    title: { pre: 'Building systems that real people ', em: 'actually use', post: '.' },
    summary: [
      "Informatics Engineering graduate with over two years of experience in application development and information technology. My work centers on Laravel and CodeIgniter web applications: from requirements analysis and database design to REST API integration, Linux server management, and Docker.",
      'I am used to working in a team, turning business needs into secure and efficient technical solutions, and keeping them healthy through testing, debugging, and troubleshooting.',
    ],
    focus: [
      { title: 'Web applications', detail: 'Laravel and CodeIgniter' },
      { title: 'REST API', detail: 'For web and mobile applications' },
      { title: 'Database', detail: 'MySQL and PostgreSQL, structure design and query optimization' },
      { title: 'Server', detail: 'Linux, Nginx, Apache, and Docker' },
      { title: 'Mobile', detail: 'Flutter, including Detags, released on Google Play' },
    ],
    education: {
      school: 'Universitas 17 Agustus 1945 Surabaya',
      degree: "Bachelor's in Informatics Engineering",
      period: '2020 — 2024',
      gpa: 'GPA 3.64',
    },
    openTo: [
      'Software Engineer',
      'Backend Developer',
      'Web Developer',
      'Flutter Developer',
      'IT Support / Technical Support',
    ],
  },
  experiences: [
    {
      company: 'Data Digital Center',
      role: 'Software Engineer',
      type: 'Fulltime',
      period: '2024 — 2026',
      points: [
        'Developed and maintained web applications with Laravel/CodeIgniter based on business requirements.',
        'Built new features and handled maintenance and performance improvements.',
        'Built and integrated REST APIs for web and mobile applications.',
        'Designed and optimized database structures using MySQL and PostgreSQL.',
        'Performed debugging, troubleshooting, testing, and bug fixing to keep the system stable.',
        'Improved the security, efficiency, and scalability of applications through good development practices.',
        'Analyzed system requirements and recommended technical solutions that fit user needs.',
        'Collaborated with the team on design, implementation, testing, and maintenance of applications.',
        'Managed application environments and deployments on Linux-based servers.',
      ],
    },
    {
      company: 'PT Jaster Intermedia Network',
      role: 'Web Programmer',
      type: 'Internship',
      period: '2023',
      points: [
        'Contributed to the development and maintenance of web applications based on project requirements.',
        'Built features with web technologies and improved systems that were already running.',
        'Designed database structures and implemented and optimized queries to support application performance.',
        'Performed testing, bug tracking, debugging, and troubleshooting to improve application quality.',
        'Analyzed system requirements and helped determine suitable technical solutions.',
        'Designed system workflows and application interfaces based on project requirements.',
        'Collaborated with the team on development, evaluation, and improvement of applications.',
      ],
    },
  ],
  experienceTitle: { pre: 'Work ', em: 'experience', post: '' },
  featuredProject: {
    name: 'Detags',
    eyebrow: 'Released on Google Play',
    headline: 'Canteen food ordering for Untag Surabaya',
    description:
      'Customers pick a canteen and menu, pay (including QRIS), and track their order; cashiers process orders and couriers deliver them. Includes a points program.',
    tags: ['Flutter', 'Firebase', 'REST API'],
    url: 'https://play.google.com/store/apps/details?id=com.kantinuntagsby.detags',
    urlLabel: 'View on Google Play',
    screenshot: null,
    flow: [
      { title: 'Choose canteen and menu', actor: 'Customer', state: 'done' },
      { title: 'Pay, including QRIS', actor: 'Customer', state: 'done' },
      { title: 'Order processed', actor: 'Cashier', state: 'active' },
      { title: 'Order delivered', actor: 'Courier', state: 'next' },
    ],
  },
  projectsTitle: { pre: 'Real ', em: 'projects', post: ', from idea to release.' },
  projects: [
    {
      name: 'Smart Attendance System',
      description:
        'Face-based attendance system with liveness detection to prevent spoofing, connected to a mobile app through a REST API.',
      tags: ['Flutter', 'Laravel', 'REST API', 'Face Recognition'],
      highlight: true,
    },
    {
      name: 'Talenta',
      description: "Student talent and potential assessment system with AI integration to support the assessment process.",
      tags: ['Laravel', 'AI Integration'],
      highlight: true,
    },
    {
      name: 'Canteen Management System',
      description: 'Canteen transaction and stock management system, covering sales records and daily reports.',
      tags: ['Laravel', 'MySQL'],
    },
    {
      name: 'Inventory Management System',
      description: 'Stock management system that tracks inventory in and out, with an optimized database structure.',
      tags: ['Laravel', 'MySQL'],
    },
    {
      name: 'Delivery Management System',
      description: 'Delivery management system, from scheduling to tracking delivery status.',
      tags: ['Laravel', 'MySQL'],
    },
    {
      name: 'School Management System',
      description: 'School administration system for managing student data, academics, and daily operations.',
      tags: ['Laravel', 'MySQL'],
    },
  ],
  skillsTitle: { pre: 'Technical ', em: 'stack', post: ' and skills' },
  contactTitle: { pre: "Let's talk about your next ", em: 'role', post: ' or project.' },
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: {
    skipToContent: 'Skip to content',
    backToTopAria: (name) => `${name} — back to top`,
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cvShort: 'CV',
    downloadCv: 'Download CV',
    viewProjects: 'View Projects',
    mainStack: 'Main stack',
    profileAria: 'Profile summary in JSON format',
    aboutFocus: 'Focus',
    aboutEducation: 'Education',
    aboutOpenTo: 'Open to',
    collapse: 'Show less',
    seeMore: (n) => `Show ${n} more ${n === 1 ? 'responsibility' : 'responsibilities'}`,
    flowTitle: 'Order flow',
    pointsProgram: '+ Points program',
    flowDisclaimer: 'Flow illustration — not a screenshot',
    screenshotAlt: (name) => `${name} app screenshot`,
    otherProjects: 'Other projects',
    techAria: 'Technologies',
    filterAria: 'Technology filter',
    all: 'All',
    contactIntro:
      'I am open to Software Engineer, Backend, Web, Flutter, and IT Support roles. Send an email or reach out on LinkedIn, and I will reply as soon as I can.',
    sendEmail: 'Send email',
    phone: 'Phone',
    copyEmail: 'Copy email address',
    emailCopied: 'Email copied',
    backToTop: 'Back to top ↑',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    langGroup: 'Choose language',
  },
}

export const content = { id, en }