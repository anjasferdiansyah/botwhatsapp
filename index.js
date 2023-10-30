const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client({
  puppeteer: {
    headless: false,
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("disconnected", () => {
  console.log("Client is disconnected!");
});

client.initialize();

client.on("message", async (message) => {
  console.log(message.body);
});

client.on("message", async (message) => {
  switch (message.body) {
    case "#":
      client.sendMessage(
        message.from,
        `*INFO SOLIDARITAS*

            Pilih informasi sesuai dengan nomor diawali tanda #:
            
            *#1* _Info Sekretariat_
            *#2* _Info Anggota PSI_
            *#3* *_Daftar Bacaleg PSI_*
            *#4* _Info Kartu Sakti_
            *#5* _Info Media Sosial_
            *#6* *_Daftar Saksi PSI_*
            *#0* _Hubungi Kami_
            
            _Untuk kembali ke menu awal tekan *#*_`
      );
      break;
    case "#0":
      //client.sendMessage(message.from, tumpeng1);
      client.sendMessage(
        message.from,
        `Terima kasih telah menghubungi kami anda dapat mengirimkan pesan melalui:
  
  Email : 
  dpdkotatasikmalaya@psi.id
  DM Instagram : @dpdpsikotatasik
  
  _Untuk kembali ke menu awal tekan #_`
      );
      break;
    case "#1":
      //client.sendMessage(message.from, tumpeng1);
      client.sendMessage(
        message.from,
        `*INFO SEKRETARIAT*
  
  Sekretariat *PSI*
  DEWAN PERWAKILAN DAERAH
  Kota Tasikmalaya
  
  Jl. Tundagan
  Komplek Perumahan
  Pesona Kahyangan No. 9, 
  Linggajaya, Mangkubumi 
  Kota Tasikmalaya
  
  Link Google Map untuk menuju lokasi sekretariat:
  https://goo.gl/maps/HUHrDgEPyB2W4ZjA8
  
  _Untuk kembali ke menu awal tekan #_
  `
      );
      break;
    case "#2":
      //client.sendMessage(message.from, tumpeng5);
      client.sendMessage(
        message.from,
        `*INFO ANGGOTA PSI* 
  
  Menjadi anggota merupakan bentuk dukungan anda atas keberadaan PSI.
  
  Silahkan klik link tautan berikut ini untuk proses pendaftaran:
  https://psi.id/menjadi-anggota/`
      );
      break;
    case "#3":
      //client.sendMessage(message.from, tumpeng4);
      client.sendMessage(
        message.from,
        `*INFO BACALEG PSI*
  
  PSI membuka kesempatan kepada seluas-luasnya bagi masyarakat yang berminat menjadi BACALEG PSI untuk DPRD Tingkat Kota, Provinsi dan DPR RI.
  
  *TANPA BAYAR MAHAR*
  *TANPA POTONG GAJI*
  
  Untuk pendaftaran silahkan gunakan link:
  https://psi.id/daftar-bacaleg-psi/
  
  Persyaratan terbuka untuk umum minimal pendidikan SLTA atau sederajat.
  
  _Untuk kembali ke menu awal tekan #_
  `
      );
      break;
    case "#4":
      //client.sendMessage(message.from, tumpeng8);
      //client.sendMessage(message.from, tumpeng7);
      client.sendMessage(
        message.from,
        `*INFO KARTU SAKTI*
  
  Informasi KARTU SAKTI
  Silahkan klik link berikut:
  
  https://psi.id/kartusakti/
  `
      );
      break;
    case "#5":
      //client.sendMessage(message.from, tumpeng6);
      client.sendMessage(
        message.from,
        `*INFO MEDIA SOSIAL*
  
  *Media Sosial PSI*
  
  DPD Kota Tasikmalaya
  
  Follow Instagram:
  @dpdpsikotatasik
  
  Email:
  dpdkotatasikmalaya@psi.id
  
  Website:
  https://tasik.psi.id
  https://psi.id
  
  `
      );
      break;
    case "#6":
      //client.sendMessage(message.from, tumpeng6);
      client.sendMessage(
        message.from,
        `*PENDAFTARAN* 
  *CALON SAKSI*
  *PSI KOTA TASIKMALAYA*
  
  Silahkan isi FORM PENDAFTARAN 
  BAKAL CALON SAKSI melalui link berikut ini:
  
  https://penjuang.psi.id
  
  _Untuk kembali ke menu awal tekan *#*_`
      );
      break;
    default:
      client.sendMessage(
        message.from,
        `_Selamat Datang_ 
  _Dilayanan Virtual_
  
  *PARTAI*
  *SOLIDARITAS*
  *INDONESIA*
  DPD KOTA TASIKMALAYA
  
  Untuk informasi selengkapnya silahkan masuk melalui:
  
  *INFO SOLIDARITAS* 
  *_TEKAN tanda #_*
  
  _Untuk menghubungi kami_
  *_TEKAN #0_*`
      );
      break;
  }
});
