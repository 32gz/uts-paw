import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Alat Optik', kodeAlat: '', jumlah: '1', kondisi: 'Baik', }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Barang Inventaris Laboratorium</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Alat Optik</option>
        <option>Alat Gelas</option>
        <option>Alat Ukur dan Transfer</option>
        <option>Alat Ukur</option>
        <option>Alat Pemanas</option>
      </select>

      <label htmlFor="kodeAlat">Kode Alat</label>
      <input id="kodeAlat" name="kodeAlat" value={form.kodeAlat} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="jumlah">Jumlah</label>
      <input id="jumlah" type="number" min="0" name="jumlah" value={form.jumlah} onChange={ubah} />


      <label htmlFor="kondisi">Kondisi</label>
      <select id="kondisi" name="kondisi" value={form.kondisi} onChange={ubah}>
        <option>Baik</option>
        <option>Rusak Ringan</option>
        <option>Rusak Berat</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}