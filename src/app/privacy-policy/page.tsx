import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  MapPin,
  Lock,
  Mail,
  ArrowLeft,
  Trash2,
  Smartphone,
  UserCheck,
  CheckCircle2,
  FileText,
  Clock,
  Server,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | KOPI AJOE",
  description:
    "Kebijakan Privasi Resmi Kopi Ajoe untuk Aplikasi Customer dan Kopi Ajoe Sales.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-outfit selection:bg-white selection:text-black">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 md:px-12">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE BERANDA</span>
          </Link>
          <div className="text-lg font-bold tracking-tighter uppercase text-white">
            KOPI AJOE
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-8 md:px-12 max-w-5xl mx-auto border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Lolos Standar Apple App Store & Google Play Console</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Kebijakan Privasi Kopi Ajoe
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
          Privacy Policy untuk Ekosistem Layanan Digital Kopi Ajoe (Aplikasi Customer & Aplikasi Sales)
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Terakhir Diperbarui: <strong>20 September 2026</strong></span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-lg">
            <Building2 className="w-3.5 h-3.5 text-neutral-400" />
            <span>Penerbit: <strong>Kopi Ajoe Indonesia</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-6 py-12 md:px-12 max-w-5xl mx-auto space-y-12">
        {/* Intro Banner */}
        <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 leading-relaxed text-neutral-300 text-sm md:text-base space-y-3">
          <p>
            Selamat datang di <strong>Kopi Ajoe</strong>. Kebijakan Privasi ini menjelaskan bagaimana Kopi Ajoe (&quot;Kami&quot;) mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Pengguna pada ekosistem layanan digital kami, yang mencakup <strong>Aplikasi Kopi Ajoe Customer</strong> (untuk Pelanggan) dan <strong>Aplikasi Kopi Ajoe Sales</strong> (untuk Mitra Operasional/Sales).
          </p>
          <p className="text-neutral-400 text-xs md:text-sm">
            Dengan menggunakan aplikasi kami, Anda menyetujui pengumpulkan dan penggunaan informasi sesuai dengan kebijakan ini.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Informasi yang Kami Kumpulkan
            </h2>
          </div>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed pl-11">
            Kami mengumpulkan beberapa jenis informasi untuk memberikan dan meningkatkan layanan operasional serta pengalaman bertransaksi Anda:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-11 pt-2">
            <div className="p-5 rounded-xl bg-neutral-950 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Data Akun & Identitas</span>
              </div>
              <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-neutral-200">Pelanggan (Customer App):</strong> Nama lengkap, nomor telepon (WhatsApp), alamat email, serta data autentikasi login.
                </li>
                <li>
                  <strong className="text-neutral-200">Mitra Operasional (Sales App):</strong> Nama lengkap, ID karyawan/mitra, nomor telepon, foto profil, serta data absensi/shift kerja.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Data Transaksi & Riwayat</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400">
                Catatan pembelian produk, penukaran voucher/poin loyalitas, serta riwayat penugasan stok gerobak.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 border border-white/10 space-y-3 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Data Lokasi (Presisi & Latar Belakang)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-neutral-400">
                <div className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                  <strong className="text-neutral-200 block mb-1">Aplikasi Customer:</strong>
                  Lokasi presisi saat aplikasi digunakan (Foreground Location) untuk membantu Anda menemukan gerobak Kopi Ajoe terdekat secara akurat.
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                  <strong className="text-neutral-200 block mb-1">Aplikasi Sales:</strong>
                  Lokasi presisi di latar depan maupun latar belakang (Foreground & Background Location) saat shift penugasan/gerobak diaktifkan.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Special Focus on Background Location */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm border border-amber-500/30">
              2
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Penggunaan Khusus Izin Lokasi Latar Belakang (Background Location)
            </h2>
          </div>
          <div className="pl-0 md:pl-11 space-y-4">
            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-neutral-300 text-sm space-y-3">
              <p className="font-medium text-amber-300 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Khusus pada Aplikasi Kopi Ajoe Sales, kami menggunakan izin FOREGROUND_SERVICE_LOCATION dan Background Location:
              </p>
              <div className="space-y-3 text-xs md:text-sm">
                <div>
                  <strong className="text-white block mb-1">a. Tujuan Penggunaan:</strong>
                  Lokasi perangkat mitra sales dilacak secara real-time saat jam kerja/shift aktif untuk memetakan koordinat gerobak Kopi Ajoe keliling. Koordinat ini disinkronkan ke sistem agar Pelanggan di Aplikasi Customer dapat menemukan lokasi gerobak Kopi Ajoe aktif terdekat.
                </div>
                <div>
                  <strong className="text-white block mb-1">b. Transparansi Pelacakan:</strong>
                  Pelacakan lokasi di latar belakang hanya berjalan saat shift tugas aktif dan selalu ditandai dengan notifikasi permanen pada status bar perangkat mitra sales. Pelacakan dapat dihentikan kapan saja dengan mengakhiri shift/clock-out pada aplikasi.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Penggunaan & Penyimpanan Data
            </h2>
          </div>
          <div className="pl-0 md:pl-11 space-y-3 text-neutral-300 text-sm md:text-base">
            <p>Informasi yang dikumpulkan murni digunakan untuk kepentingan operasional Kopi Ajoe, antara lain:</p>
            <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-neutral-400 pl-2">
              <li>Memproses transaksi penjualan, penukaran voucher, dan akumulasi poin loyalitas pelanggan.</li>
              <li>Memantau posisi gerobak keliling dan efisiensi penugasan stok operasional mitra sales.</li>
              <li>Menjaga keamanan sistem, autentikasi akun, dan mencegah kecurangan transaksi.</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-neutral-900 border border-white/10 flex items-center gap-3 text-xs md:text-sm text-neutral-300">
              <Server className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                Kami menyimpan data Anda secara aman menggunakan infrastruktur cloud terenkripsi (Supabase/AWS) dengan standar keamanan industri.
              </span>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Pembagian Data & Keamanan Pihak Ketiga
            </h2>
          </div>
          <div className="pl-0 md:pl-11 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Tidak Ada Penjualan Data</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Data pribadi, riwayat transaksi, maupun lokasi Anda tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga untuk keperluan pemasaran atau iklan pihak luar.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Penyedia Layanan Terbatas</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Data hanya diakses oleh infrastruktur server tepercaya yang membantu operasional langsung Kopi Ajoe (seperti penyedia basis data terenkripsi dan gateway SMS/OTP).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Data Deletion */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm border border-rose-500/30">
              5
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Hak Pengguna & Penghapusan Akun/Data (Data Deletion)
            </h2>
          </div>
          <div className="pl-0 md:pl-11 space-y-4">
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Pengguna berhak untuk mengakses, memperbarui, atau meminta penghapusan data pribadi yang tersimpan di sistem kami.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-base">
                <Trash2 className="w-5 h-5" />
                <span>Prosedur Pengajuan Penghapusan Akun & Data</span>
              </div>
              <p className="text-xs md:text-sm text-neutral-300">
                Jika Anda (Pelanggan atau Mitra Sales) ingin mengajukan penghapusan akun, riwayat transaksi, atau data lokasi secara permanen, Anda dapat mengirimkan permintaan melalui email berikut:
              </p>

              <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Email Resmi:</span>
                  <a
                    href="mailto:admin@kopiajoe.com?subject=Permintaan%20Penghapusan%20Akun%20%26%20Data"
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    admin@kopiajoe.com
                  </a>
                </div>
                <div className="text-neutral-400">
                  <span>Subjek Email:</span>{" "}
                  <code className="bg-neutral-800 text-neutral-200 px-2 py-0.5 rounded text-xs">
                    Permintaan Penghapusan Akun &amp; Data - [Nama/Nomor HP]
                  </code>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  Tim kami akan memproses penutupan akun dan penghapusan data pribadi Anda dalam kurun waktu maksimal <strong>3 x 24 jam kerja</strong> setelah verifikasi identitas selesai.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
              6
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Perubahan Kebijakan Privasi
            </h2>
          </div>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed pl-11">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan pada halaman ini dengan menyertakan tanggal pembaruan terbaru.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
              7
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Hubungi Kami
            </h2>
          </div>
          <div className="pl-0 md:pl-11">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 space-y-3 text-sm">
              <p className="text-neutral-300">
                Jika Anda memiliki pertanyaan, kendala, atau masukan terkait Kebijakan Privasi ini, silakan hubungi kami melalui:
              </p>
              <div className="space-y-2 text-neutral-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Email:</span>
                  <a href="mailto:admin@kopiajoe.com" className="text-emerald-400 hover:underline">
                    admin@kopiajoe.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Layanan Operasional:</span>
                  <strong className="text-white">Kopi Ajoe Indonesia</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Kopi Ajoe Indonesia. All rights reserved.</p>
      </footer>
    </div>
  );
}

