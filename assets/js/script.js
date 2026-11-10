const materi = [
  {
    nama: 'Pengenalan Python',
    file: 'pengenalan-python.html',
  },
  {
    nama: 'Google Colab',
    file: 'google-colab.html',
  },
  {
    nama: 'Variabel dan Tipe Data',
    file: 'variabel-tipe-data.html',
  },
  {
    nama: 'Operator',
    file: 'operator.html',
  },
  {
    nama: 'Input dan Output',
    file: 'input-output.html',
  },
  {
    nama: 'Percabangan',
    file: 'percabangan.html',
  },
  {
    nama: 'Perulangan',
    file: 'perulangan.html',
  },
  {
    nama: 'Struktur Data',
    file: 'struktur-data.html',
  },
  {
    nama: 'Fungsi',
    file: 'fungsi.html',
  },
];

function buatMenu() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const halaman = location.pathname.split('/').pop() || 'index.html';

  let html = `
      <h3>▤ &nbsp; Materi Tutorial</h3>
      <span class="menu-label">PYTHON DASAR</span>
  `;

  materi.forEach((item, index) => {
    const nomor = String(index + 1).padStart(2, '0');

    html += `
          <a href="${item.file}"
             class="${halaman === item.file ? 'active' : ''}">
              <span class="nomor">${nomor}.</span>
              ${item.nama}
          </a>
      `;
  });

  html += `

      <div>
        <a
        href="#"
        target="_blank"
        class="ta-button"
        >
        <strong>TUGAS AKHIR</strong>
        </a>
      </div>

      <div class="sidebar-info">
          <h3>Pengumpulan Tugas</h3>
          Silakan kumpulkan hasil pengerjaan tugas melalui tautan berikut.

          <a href="https://forms.gle/BexDaqPnhvqvkYW69" id="tombol-pengumpulan">
              <strong>Pengumpulan Tugas 📤</strong>
          </a>
      </div>

      <div class="sidebar-info">
          <h3>Belajar sambil praktik</h3>
          Jalankan contoh program melalui Google Colab.

          <a href="https://colab.research.google.com/#create=true"
             target="_blank">
              Buka Google Colab ↗
          </a>
      </div>
  `;

  sidebar.innerHTML = html;
}

function buatNavigasi() {
  const navigasi = document.getElementById('navigation');
  if (!navigasi) return;

  const halaman = location.pathname.split('/').pop();
  const index = materi.findIndex((item) => item.file === halaman);

  if (index === -1) return;

  const sebelumnya =
    index > 0
      ? `<a href="${materi[index - 1].file}">
           ← ${String(index).padStart(2, '0')}.
           ${materi[index - 1].nama}
         </a>`
      : '<span></span>';

  const berikutnya =
    index < materi.length - 1
      ? `<a href="${materi[index + 1].file}">
           ${String(index + 2).padStart(2, '0')}.
           ${materi[index + 1].nama} →
         </a>`
      : '<span></span>';

  navigasi.innerHTML = sebelumnya + berikutnya;
}

document.addEventListener('DOMContentLoaded', () => {
  buatMenu();
  buatNavigasi();
});
