import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import Status from '../components/Status.jsx'
import KartuIsi from '../components/KartuIsi.jsx'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  
  return (
    <section>
      <h1>Inventaris Laboratorium</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <Status pesan= "Memuat ringkasan..."/>
      ) : (
        <KartuIsi
          judul="Isi Inventaris Ini Ada" nilai={`${items.length} barang`} keterangan={`Dalam ${jumlahKategori} kategori.`}         
        />
      )}
      <Link to="/koleksi">Lihat semua inventaris</Link>
    </section>
  )
}