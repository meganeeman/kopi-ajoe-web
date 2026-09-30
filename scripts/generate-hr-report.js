const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = '/Users/akbar/KopiAjoeApp';
const templatePath = path.join(rootDir, 'Format_Laporan_Kerja_Profesional.docx');
const docxPath = path.join(rootDir, 'Laporan_Mingguan_HR_September_2026.docx');
const pdfPath = path.join(rootDir, 'Laporan_Mingguan_HR_September_2026.pdf');
const tempHtmlPath = path.join(rootDir, '.temp_hr_report.html');

const pythonScript = `
import zipfile, xml.sax.saxutils

def escape(s):
    return xml.sax.saxutils.escape(str(s))

title = 'FORMAT LAPORAN KERJA MINGGUAN (WEEKLY REPORT)'
subtitle = 'Laporan mingguan berfokus pada pelacakan tugas taktis, penyelesaian masalah operasional harian, dan perencanaan jangka pendek.'

info_lines = [
    ('Nama Karyawan: ', 'Dinna Anggreini'),
    ('Departemen: ', 'Human Resource'),
    ('Periode Laporan: ', '21 September 2026 s.d. 28 September 2026'),
    ('Tanggal Diserahkan: ', '28 September 2026')
]

summary_text = 'Fokus utama minggu ini difokuskan pada pemenuhan kebutuhan pengadaan fasilitas keamanan pabrik, rekrutmen tenaga kerja operasional, standarisasi SOP divisi, serta penyebaran media publikasi rekrutmen sales.'

table1_headers = ['No', 'Kategori Tugas / Proyek', 'Deskripsi Aktivitas', 'Status (Selesai / Berjalan / Tertunda)', 'Keterangan / Hasil Output']
table1_widths = [640, 2000, 2800, 1600, 2800]
table1_rows = [
    ['1', 'Fasilitas Pabrik / GA', 'Pengadaan dan Pemasangan CCTV Pabrik', 'Berjalan', 'Barang sudah masuk pengadaan bulan Oktober 2026 dan dipesan di Sarana Smartphone Payakumbuh. Realisasi pemasangan dijadwalkan pada Oktober 2026.'],
    ['2', 'Rekrutmen & SDM', 'Rekrutmen Karyawan Baru', 'Selesai', 'Berhasil merekrut 6 orang karyawan (1 Admin Operasional Pabrik, 4 Driver, dan 1 Petugas Keamanan/Security).'],
    ['3', 'Kebijakan Organisasi', 'Pembuatan Jobdesk dan SOP Karyawan', 'Berjalan', 'Penyusunan jobdesk dan SOP untuk 4 divisi telah selesai disusun dan saat ini menunggu persetujuan Direktur.'],
    ['4', 'Rekrutmen & Promosi', 'Pembuatan dan Distribusi Brosur Lowongan Sales', 'Selesai', 'Brosur lowongan sales selesai dirancang dan telah didistribusikan ke seluruh cabang dan mitra Kopi Ajoe yang membutuhkan.']
]

table2_headers = ['No', 'Isu / Hambatan', 'Dampak Operasional', 'Tindakan (Solusi)', 'Bantuan Dibutuhkan (Eskalasi)']
table2_widths = [640, 2300, 2300, 2300, 2300]
table2_rows = [
    ['1', 'Tidak ada kendala operasional yang signifikan pada periode minggu ini.', 'Seluruh kegiatan operasional dan administratif divisi berjalan lancar.', 'Terus mempertahankan koordinasi aktif antardivisi.', '-']
]

priorities = [
    ('Prioritas 1: ', 'Penghitungan dan penginputan payroll gaji karyawan periode September 2026.'),
    ('Prioritas 2: ', 'Perekapan berkas dan CV calon sales yang telah masuk.'),
    ('Prioritas 3: ', 'Perencanaan jadwal dan pelaksanaan sesi interview calon sales.')
]

def r_font():
    return '<w:rFonts w:ascii=\"Times New Roman\" w:hAnsi=\"Times New Roman\" w:cs=\"Times New Roman\"/>'

def build_p(text, style=None, align=None, bold=False, before=80, after=20, keep_next=False, color=None, size=None):
    pr = '<w:pPr>'
    if style:
        pr += f'<w:pStyle w:val=\"{style}\"/>'
    if align:
        pr += f'<w:jc w:val=\"{align}\"/>'
    if keep_next:
        pr += '<w:keepNext/><w:keepLines/>'
    pr += f'<w:spacing w:before=\"{before}\" w:after=\"{after}\"/>'
    pr += '</w:pPr>'
    
    rpr = '<w:rPr>' + r_font()
    if bold:
        rpr += '<w:b/>'
    if color:
        rpr += f'<w:color w:val=\"{color}\"/>'
    if size:
        rpr += f'<w:sz w:val=\"{size}\"/><w:szCs w:val=\"{size}\"/>'
    rpr += '</w:rPr>'
    
    return f'<w:p>{pr}<w:r>{rpr}<w:t xml:space=\"preserve\">{escape(text)}</w:t></w:r></w:p>'

def build_info_p(pairs):
    runs = []
    for label, val in pairs:
        runs.append(f'<w:r><w:rPr>{r_font()}<w:b/></w:rPr><w:t xml:space=\"preserve\">{escape(label)}</w:t></w:r><w:r><w:rPr>{r_font()}</w:rPr><w:t>{escape(val)}</w:t></w:r><w:r><w:br/></w:r>')
    return f'<w:p><w:pPr><w:spacing w:before=\"40\" w:after=\"40\"/></w:pPr>' + ''.join(runs) + '</w:p>'

def build_table(headers, widths, rows):
    grid = ''.join([f'<w:gridCol w:w=\"{w}\"/>' for w in widths])
    tbl = f'<w:tbl><w:tblPr><w:tblStyle w:val=\"KisiTabel\"/><w:tblW w:w=\"0\" w:type=\"auto\"/><w:tblLook w:val=\"04A0\" w:firstRow=\"1\" w:lastRow=\"0\" w:firstColumn=\"1\" w:lastColumn=\"0\" w:noHBand=\"0\" w:noVBand=\"1\"/></w:tblPr><w:tblGrid>{grid}</w:tblGrid>'
    
    header_cells = []
    for idx, h in enumerate(headers):
        w = widths[idx]
        header_cells.append(f'<w:tc><w:tcPr><w:tcW w:w=\"{w}\" w:type=\"dxa\"/><w:shd w:val=\"clear\" w:color=\"auto\" w:fill=\"E6F4EA\"/></w:tcPr><w:p><w:pPr><w:spacing w:before=\"30\" w:after=\"30\"/></w:pPr><w:r><w:rPr>{r_font()}<w:b/><w:color w:val=\"0F5132\"/></w:rPr><w:t>{escape(h)}</w:t></w:r></w:p></w:tc>')
    tbl += f'<w:tr><w:trPr><w:tblHeader/><w:cantSplit/></w:trPr>' + ''.join(header_cells) + '</w:tr>'
    
    for r in rows:
        row_cells = []
        for idx, cell in enumerate(r):
            w = widths[idx]
            align = 'center' if idx == 0 else 'left'
            jc = f'<w:jc w:val=\"{align}\"/>' if align == 'center' else ''
            row_cells.append(f'<w:tc><w:tcPr><w:tcW w:w=\"{w}\" w:type=\"dxa\"/></w:tcPr><w:p><w:pPr>{jc}<w:spacing w:before=\"30\" w:after=\"30\"/></w:pPr><w:r><w:rPr>{r_font()}</w:rPr><w:t>{escape(cell)}</w:t></w:r></w:p></w:tc>')
        tbl += f'<w:tr><w:trPr><w:cantSplit/></w:trPr>' + ''.join(row_cells) + '</w:tr>'
    
    tbl += '</w:tbl>'
    return tbl

body_parts = []
body_parts.append(build_p(title, style='Judul1', align='center', bold=True, before=0, after=20, keep_next=True, color='0F766E', size='28'))
body_parts.append(build_p(subtitle, before=0, after=40, keep_next=True, color='52525B'))
body_parts.append(build_p('Informasi Umum', style='Judul2', bold=True, before=60, after=20, keep_next=True, color='115E59', size='24'))
body_parts.append(build_info_p(info_lines))
body_parts.append(build_p('1. Ringkasan Status Pekerjaan', style='Judul2', bold=True, before=60, after=20, keep_next=True, color='115E59', size='24'))
body_parts.append(build_p(summary_text, before=20, after=40, keep_next=True))
body_parts.append(build_p('2. Rincian Aktivitas dan Pencapaian (Minggu Ini)', style='Judul2', bold=True, before=60, after=20, keep_next=True, color='115E59', size='24'))
body_parts.append(build_table(table1_headers, table1_widths, table1_rows))
body_parts.append(build_p('3. Kendala Operasional & Tindakan Mitigasi', style='Judul2', bold=True, before=60, after=20, keep_next=True, color='115E59', size='24'))
body_parts.append(build_table(table2_headers, table2_widths, table2_rows))
body_parts.append(build_p('4. Prioritas & Rencana Kerja (Minggu Depan)', style='Judul2', bold=True, before=60, after=20, keep_next=True, color='115E59', size='24'))
for l, v in priorities:
    body_parts.append(f'<w:p><w:pPr><w:pStyle w:val=\"PoinDaftar\"/><w:keepNext/><w:keepLines/><w:spacing w:before=\"20\" w:after=\"20\"/></w:pPr><w:r><w:rPr>{r_font()}<w:b/><w:color w:val=\"115E59\"/></w:rPr><w:t xml:space=\"preserve\">{escape(l)}</w:t></w:r><w:r><w:rPr>{r_font()}</w:rPr><w:t>{escape(v)}</w:t></w:r></w:p>')

body_parts.append('<w:sectPr><w:pgSz w:w=\"12240\" w:h=\"15840\"/><w:pgMar w:top=\"900\" w:right=\"1200\" w:bottom=\"900\" w:left=\"1200\" w:header=\"500\" w:footer=\"500\" w:gutter=\"0\"/><w:cols w:space=\"720\"/><w:docGrid w:linePitch=\"300\"/></w:sectPr>')

xml_content = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\\n<w:document xmlns:wpc=\"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas\" xmlns:cx=\"http://schemas.microsoft.com/office/drawing/2014/chartex\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:wp14=\"http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing\" xmlns:wp=\"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing\" xmlns:w10=\"urn:schemas-microsoft-com:office:word\" xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\" xmlns:w14=\"http://schemas.microsoft.com/office/word/2010/wordml\" xmlns:w15=\"http://schemas.microsoft.com/office/word/2012/wordml\"><w:body>' + ''.join(body_parts) + '</w:body></w:document>'

template_path = '${templatePath}'
out_docx_path = '${docxPath}'

with zipfile.ZipFile(template_path, 'r') as zin:
    with zipfile.ZipFile(out_docx_path, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            if item.filename == 'word/document.xml':
                zout.writestr(item.filename, xml_content.encode('utf-8'))
            else:
                zout.writestr(item.filename, zin.read(item.filename))
`;

const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>FORMAT LAPORAN KERJA MINGGUAN (WEEKLY REPORT)</title>
<style>
  @page {
    size: A4;
    margin: 12mm 15mm 12mm 15mm;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    color: #1f2937;
    line-height: 1.35;
    margin: 0;
    padding: 0;
    font-size: 9.5pt;
    background: #ffffff;
  }
  .title-section {
    text-align: center;
    border-bottom: 2px solid #0f766e;
    padding-bottom: 6px;
    margin-bottom: 10px;
  }
  .title-section h1 {
    font-size: 13pt;
    font-weight: 700;
    color: #0f766e;
    margin: 0 0 2px 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .title-section p {
    font-size: 8.5pt;
    color: #4b5563;
    margin: 0;
    font-style: italic;
  }
  .section-block {
    margin-bottom: 8px;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #115e59;
    margin: 0 0 4px 0;
    padding-bottom: 2px;
    border-bottom: 1px solid #99f6e4;
    page-break-after: avoid;
    break-after: avoid;
  }
  .info-table {
    width: 100%;
    margin-bottom: 6px;
    font-size: 9pt;
    border-collapse: collapse;
  }
  .info-table td {
    padding: 1.5px 0;
    vertical-align: top;
  }
  .info-label {
    width: 180px;
    font-weight: 700;
    color: #134e4a;
  }
  .info-val {
    color: #111827;
  }
  .summary-box {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-left: 3px solid #0f766e;
    padding: 6px 10px;
    font-size: 9pt;
    color: #14532d;
    line-height: 1.4;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.5pt;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .data-table th {
    background-color: #f0fdfa;
    color: #0f5132;
    font-weight: 700;
    text-align: left;
    padding: 5px 8px;
    border: 1px solid #99f6e4;
  }
  .data-table td {
    padding: 4.5px 8px;
    border: 1px solid #cbd5e1;
    vertical-align: top;
    line-height: 1.35;
  }
  .data-table tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .data-table td.center {
    text-align: center;
  }
  .badge {
    display: inline-block;
    padding: 1.5px 5px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 7.5pt;
  }
  .badge-done {
    background-color: #d1fae5;
    color: #065f46;
    border: 1px solid #6ee7b7;
  }
  .badge-progress {
    background-color: #fef9c3;
    color: #854d0e;
    border: 1px solid #fde047;
  }
  .priority-list {
    margin: 4px 0 0 0;
    padding-left: 18px;
  }
  .priority-list li {
    margin-bottom: 3px;
    font-size: 9pt;
    color: #374151;
    line-height: 1.35;
  }
  .footer-note {
    margin-top: 10px;
    padding-top: 6px;
    border-top: 1px solid #ccfbf1;
    font-size: 8pt;
    color: #0f766e;
    display: flex;
    justify-content: space-between;
  }
</style>
</head>
<body>

<div class="title-section">
  <h1>FORMAT LAPORAN KERJA MINGGUAN (WEEKLY REPORT)</h1>
  <p>Laporan mingguan berfokus pada pelacakan tugas taktis, penyelesaian masalah operasional harian, dan perencanaan jangka pendek.</p>
</div>

<div class="section-block">
  <div class="section-title">Informasi Umum</div>
  <table class="info-table">
    <tr><td class="info-label">Nama Karyawan</td><td class="info-val">: Dinna Anggreini</td></tr>
    <tr><td class="info-label">Departemen</td><td class="info-val">: Human Resource</td></tr>
    <tr><td class="info-label">Periode Laporan</td><td class="info-val">: 21 September 2026 s.d. 28 September 2026</td></tr>
    <tr><td class="info-label">Tanggal Diserahkan</td><td class="info-val">: 28 September 2026</td></tr>
  </table>
</div>

<div class="section-block">
  <div class="section-title">1. Ringkasan Status Pekerjaan</div>
  <div class="summary-box">
    Fokus utama minggu ini difokuskan pada pemenuhan kebutuhan pengadaan fasilitas keamanan pabrik, rekrutmen tenaga kerja operasional, standarisasi SOP divisi, serta penyebaran media publikasi rekrutmen sales.
  </div>
</div>

<div class="section-block">
  <div class="section-title">2. Rincian Aktivitas dan Pencapaian (Minggu Ini)</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 4%; text-align: center;">No</th>
        <th style="width: 22%;">Kategori Tugas / Proyek</th>
        <th style="width: 29%;">Deskripsi Aktivitas</th>
        <th style="width: 14%; text-align: center;">Status</th>
        <th style="width: 31%;">Keterangan / Hasil Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="center">1</td>
        <td><strong>Fasilitas Pabrik / GA</strong></td>
        <td>Pengadaan dan Pemasangan CCTV Pabrik</td>
        <td class="center"><span class="badge badge-progress">Berjalan</span></td>
        <td>Barang sudah masuk pengadaan bulan Oktober 2026 dan dipesan di Sarana Smartphone Payakumbuh. Realisasi pemasangan dijadwalkan pada Oktober 2026.</td>
      </tr>
      <tr>
        <td class="center">2</td>
        <td><strong>Rekrutmen &amp; SDM</strong></td>
        <td>Rekrutmen Karyawan Baru</td>
        <td class="center"><span class="badge badge-done">Selesai</span></td>
        <td>Berhasil merekrut 6 orang karyawan (1 Admin Operasional Pabrik, 4 Driver, dan 1 Petugas Keamanan/Security).</td>
      </tr>
      <tr>
        <td class="center">3</td>
        <td><strong>Kebijakan Organisasi</strong></td>
        <td>Pembuatan Jobdesk dan SOP Karyawan</td>
        <td class="center"><span class="badge badge-progress">Berjalan</span></td>
        <td>Penyusunan jobdesk dan SOP untuk 4 divisi telah selesai disusun dan saat ini menunggu persetujuan Direktur.</td>
      </tr>
      <tr>
        <td class="center">4</td>
        <td><strong>Rekrutmen &amp; Promosi</strong></td>
        <td>Pembuatan dan Distribusi Brosur Lowongan Sales</td>
        <td class="center"><span class="badge badge-done">Selesai</span></td>
        <td>Brosur lowongan sales selesai dirancang dan telah didistribusikan ke seluruh cabang dan mitra Kopi Ajoe yang membutuhkan.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-block">
  <div class="section-title">3. Kendala Operasional &amp; Tindakan Mitigasi</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width: 4%; text-align: center;">No</th>
        <th style="width: 26%;">Isu / Hambatan</th>
        <th style="width: 24%;">Dampak Operasional</th>
        <th style="width: 26%;">Tindakan (Solusi)</th>
        <th style="width: 20%;">Bantuan Dibutuhkan (Eskalasi)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="center">1</td>
        <td>Tidak ada kendala operasional yang signifikan pada periode minggu ini.</td>
        <td>Seluruh kegiatan operasional dan administratif divisi berjalan lancar.</td>
        <td>Terus mempertahankan koordinasi aktif antardivisi.</td>
        <td class="center">-</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="section-block">
  <div class="section-title">4. Prioritas &amp; Rencana Kerja (Minggu Depan)</div>
  <ul class="priority-list">
    <li><strong>Prioritas 1:</strong> Penghitungan dan penginputan payroll gaji karyawan periode September 2026.</li>
    <li><strong>Prioritas 2:</strong> Perekapan berkas dan CV calon sales yang telah masuk.</li>
    <li><strong>Prioritas 3:</strong> Perencanaan jadwal dan pelaksanaan sesi interview calon sales.</li>
  </ul>
</div>

<div class="footer-note">
  <span>Ekosistem Kopi Ajoe - Departemen Human Resource</span>
  <span>Tanggal Cetak: 28 September 2026</span>
</div>

</body>
</html>`;

const tempPyPath = path.join(rootDir, '.temp_hr_builder.py');
fs.writeFileSync(tempPyPath, pythonScript, 'utf8');
execSync(`python3 "${tempPyPath}"`);
fs.unlinkSync(tempPyPath);

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (fs.existsSync(chromePath)) {
  try {
    execSync(`"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${tempHtmlPath}" 2>/dev/null`);
  } catch (e) {}
}

if (fs.existsSync(tempHtmlPath)) {
  fs.unlinkSync(tempHtmlPath);
}

console.log(JSON.stringify({
  docx: {
    path: docxPath,
    exists: fs.existsSync(docxPath),
    size: fs.existsSync(docxPath) ? fs.statSync(docxPath).size : 0
  },
  pdf: {
    path: pdfPath,
    exists: fs.existsSync(pdfPath),
    size: fs.existsSync(pdfPath) ? fs.statSync(pdfPath).size : 0
  }
}, null, 2));
