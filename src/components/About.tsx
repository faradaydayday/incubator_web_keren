const posts = [
  {
    id: 6,
    title: 'Apa Itu Incubator?',
    href: '#',
    description:
      'Incubator merupakan salah satu Ekskul yang ada di Sekolah SMK Telkom Makassar, semua divisi dalam Ekskul ini Berfokus pada pelajaran Jurusan IT , dengan menjadi Member Incubator kalian bisa menjadi Web Developer untuk Lulusan divisi Web dan menjadi Network Engineer untuk divisi Networking',
    date: 'Des 06, 2024',
    datetime: '2020-03-16',
    category: { title: 'Incubator', href: '#' },
  },
    {
      id: 1,
      title: 'Apa itu Website?',
      href: '#',
      description:
        'Website adalah kumpulan halaman yang saling terhubung dan dapat diakses melalui internet. Website berisi informasi atau konten tertentu yang ditampilkan dalam bentuk teks, gambar, video, atau elemen lainnya',
      date: 'Des 06, 2024',
      datetime: '2020-03-16',
      category: { title: 'Divisi Web Developer', href: '#' },
    },
    {
      id: 2,
      title: 'Bagaimana dengan Web Developer?',
      href: '#',
      description:
        'Web developer atau pengembang website adalah profesional yang bertugas membuat, mengembangkan, dan memelihara situs web. Web developer juga bisa mengembangkan aplikasi dan software.',
      date: 'Des 06, 2024',
      datetime: '2020-03-16',
      category: { title: 'Divisi Web Developer', href: '#' },
    },
    {
      id: 3,
      title: 'Apa itu Network?',
      href: '#',
      description:
        'Network atau jaringan adalah kumpulan perangkat yang terhubung untuk berbagi data. Perangkat yang terhubung dalam jaringan dapat berupa komputer, tablet, telepon pintar, dan perangkat lainnya.',
      date: 'Des 06, 2024',
      datetime: '2020-03-16',
      category: { title: 'Divisi Networking', href: '#' },
    },
    {
      id: 4,
      title: 'Web Dev Ngapain Aja?',
      href: '#',
      description:
        'Web Developer adalah perancang sebuah website / www. Web Developer merancang sebuah website dari awal sekali, menciptakan coding dsb, atau bisa juga seorang Web Developer mengembangkan sebuah website yang sudha ada. Web Developer bisa bekerja secara terikat dengan perusahaan, atau menjadi pekerja lepas (freelancer).',
      date: 'Des 06, 2024',
      datetime: '2020-03-16',
      category: { title: 'Divisi Web Developer', href: '#' },
    },
    {
      id: 5,
      title: 'Networking Ngapain Aja?',
      href: '#',
      description:
        'Sebagai Network Engineer, Anda akan bekerja dalam tim infrastruktur IT. Diharapkan Anda dapat menggunakan pengetahuan dan pengalaman yang Anda miliki untuk membangun, mengembangkan, dan mengoperasikan perangkat jaringan yang ada. Tanggung jawab Anda untuk memastikan layanan jaringan berjalan dengan baik.',
      date: 'Des 06, 2024',
      datetime: '2020-03-16',
      category: { title: 'Divisi Networking', href: '#' },
    },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Informasi Lebih Dalam</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Buat diri anda lebih paham tentang Incubator</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  