"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  MapPin,
  ArrowLeft,
  ChevronDown,
  Building2,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Lock,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "login-sales",
    category: "Akun & Login",
    question: "Bagaimana jika Mitra Sales mengalami kendala login atau lupa kata sandi?",
    answer:
      "Jika Anda mitra sales Kopi Ajoe dan mengalami kendala login (seperti lupa kata sandi atau nomor telepon tidak terverifikasi), pastikan ID Mitra/Nomor HP yang digunakan sudah terdaftar di sistem operasional PT Ajoe Perdana Indonesia. Anda dapat menghubungi Tim Admin melalui WhatsApp CS atau email admin@kopiajoe.com dengan melampirkan ID Mitra dan nama lengkap.",
  },
  {
    id: "location-tracking",
    category: "Aplikasi Sales",
    question: "Mengapa aplikasi Kopi Ajoe Sales memerlukan izin lokasi latar belakang (Background Location)?",
    answer:
      "Izin lokasi latar belakang (FOREGROUND_SERVICE_LOCATION) digunakan khusus pada Aplikasi Sales saat shift gerobak keliling diaktifkan. Hal ini bertujuan agar posisi gerobak Kopi Ajoe dapat dipetakan secara real-time di Aplikasi Customer sehingga pelanggan dapat menemukan gerobak Kopi Ajoe terdekat. Pelacakan ditandai dengan notifikasi di status bar dan otomatis berhenti saat Anda mengakhiri shift (clock-out).",
  },
  {
    id: "transaction-issues",
    category: "Transaksi & Stok",
    question: "Apa yang harus dilakukan jika terjadi kendala transaksi atau penukaran voucher?",
    answer:
      "Apabila transaksi gagal atau jumlah stok gerobak tidak tersinkronisasi, lakukan langkah berikut: (1) Pastikan koneksi internet perangkat stabil, (2) Lakukan refresh halaman transaksi, (3) Jika saldo atau voucher terpotong namun transaksi belum tercatat, segera hubungi CS Layanan Operasional via WhatsApp dengan melampirkan tanggal, jam, dan bukti transaksi.",
  },
  {
    id: "data-deletion",
    category: "Privasi & Akun",
    question: "Bagaimana cara mengajukan penghapusan akun dan data pribadi?",
    answer:
      "Pengguna (Pelanggan maupun Mitra Sales) dapat mengajukan penghapusan akun dan data pribadi kapan saja dengan mengirimkan email ke admin@kopiajoe.com dengan subjek 'Permintaan Penghapusan Akun & Data - [Nama/Nomor HP]'. Permintaan akan diproses dalam waktu maksimal 3 x 24 jam kerja.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("login-sales");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white font-outfit selection:bg-white selection:text-black">
      {/* Navigation Header */}
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
          <HelpCircle className="w-4 h-4" />
          <span>Pusat Bantuan & Layanan Operasional</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Pusat Bantuan Kopi Ajoe
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
          Layanan dukungan pelanggan dan panduan penanganan kendala aplikasi Kopi Ajoe Sales &amp; Customer.
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-lg">
            <Building2 className="w-3.5 h-3.5 text-neutral-400" />
            <span>Perusahaan: <strong>PT AJOE PERDANA INDONESIA</strong></span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 py-12 md:px-12 max-w-5xl mx-auto space-y-12">
        {/* Contact Cards Section */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <span>Kontak Layanan Pelanggan</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email Support */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Email Support</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Untuk pertanyaan umum, kendala akun, dan permohonan data.
                  </p>
                </div>
              </div>
              <a
                href="mailto:admin@kopiajoe.com"
                className="inline-flex items-center justify-between text-xs font-semibold text-amber-400 hover:underline pt-2 border-t border-white/5"
              >
                <span>admin@kopiajoe.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* WhatsApp CS */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">WhatsApp CS</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Respon cepat kendala operasional &amp; transaksi Mitra Sales.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/628212691657?text=Halo%20Tim%20CS%20Kopi%20Ajoe,%20saya%20membutuhkan%20bantuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-semibold text-emerald-400 hover:underline pt-2 border-t border-white/5"
              >
                <span>+62 821-2691-657</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Registered Office */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Alamat Kantor Resmi</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    <strong>PT AJOE PERDANA INDONESIA</strong><br />
                    Tanjung Munti, Desa/Kelurahan Sungai Beringin, Kec. Payakumbuh, Kab. Lima Puluh Kota, Provinsi Sumatera Barat, 26251
                  </p>
                </div>
              </div>
              <div className="text-xs text-neutral-500 pt-2 border-t border-white/5">
                Jam Operasional: Senin - Sabtu (08:00 - 17:00 WIB)
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Pertanyaan Sering Diajukan (FAQ)</span>
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm">
              Panduan mandiri penyelesaian kendala login, pelacakan shift sales, dan transaksi.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-neutral-900 border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-neutral-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-semibold tracking-wider text-amber-400">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-sm md:text-base text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs md:text-sm text-neutral-300 leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="p-6 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-semibold text-white text-base flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Kebijakan Privasi &amp; Penghapusan Akun</span>
            </h3>
            <p className="text-xs text-neutral-400">
              Pelajari tentang perlindungan data pribadi dan prosedur pengajuan penghapusan akun.
            </p>
          </div>
          <Link
            href="/privacy-policy"
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex-shrink-0"
          >
            Baca Kebijakan Privasi
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} PT AJOE PERDANA INDONESIA. All rights reserved.</p>
      </footer>
    </div>
  );
}

