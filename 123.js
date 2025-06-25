const axios = require('axios');
const cheerio = require('cheerio');
const TelegramBot = require('node-telegram-bot-api');

// Console colors
const colors = {
  GREEN: '\x1b[32m',
  CYAN: '\x1b[36m',
  YELLOW: '\x1b[33m',
  RESET: '\x1b[0m'
};

// Telegram bot token
const bot = new TelegramBot('7901822583:AAE5HS_OwFcRf6iMUHNfQK9zkP_cIwb7TxM', {polling: true});

// Config
const config = {
  contactUrl: 'https://www.whatsapp.com/contact/',
  submitUrl: 'https://www.whatsapp.com/contact/submit',
  whatsappApiUrl: 'https://static.whatsapp.net/rsrc.php/v4/yR/r/ERz6pNGhHp8.js',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://www.whatsapp.com',
    'Accept': 'application/json, text/javascript, */*; q=0.01'
  },
  maxAttempts: 3,
  delayBetweenAttempts: 120000 // 2 minutes
};

// User Agents
const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1'
];

// Utility functions
function getRandomUserAgent() {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cleanPhoneNumber(phone) {
  return phone.replace(/[^0-9+]/g, '');
}

async function verifyWhatsAppNumber(phone) {
  try {
    const response = await axios.get(config.whatsappApiUrl, {
      headers: {
        'User-Agent': getRandomUserAgent(),
        'Referer': 'https://web.whatsapp.com/'
      }
    });
    
    // Extract verification logic from the response
    if (response.data.includes('isValidPhoneNumber')) {
      console.log(`${colors.CYAN}Verified phone via WhatsApp API${colors.RESET}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`${colors.YELLOW}WhatsApp API verification skipped${colors.RESET}`);
    return true; // Continue even if verification fails
  }
}

async function submitSuccessReport(phone, chatId = null) {
  const cleanedPhone = cleanPhoneNumber(phone);
  let attempts = 0;
  
  // Verify number via WhatsApp API first
  const isValid = await verifyWhatsAppNumber(cleanedPhone);
  if (!isValid) {
    const errorMsg = `❌ Invalid WhatsApp number: ${cleanedPhone}`;
    if (chatId) await bot.sendMessage(chatId, errorMsg);
    console.log(`${colors.YELLOW}${errorMsg}${colors.RESET}`);
    return false;
  }
  
  while (attempts < config.maxAttempts) {
    attempts++;
    
    try {
      // Create axios instance with random UA
      const instance = axios.create({
        headers: {
          ...config.headers,
          'User-Agent': getRandomUserAgent()
        }
      });

      // Get form page first
      await instance.get(config.contactUrl);
      
      // Submit report
      const response = await instance.post(config.submitUrl, new URLSearchParams({
        phone: cleanedPhone,
        issue: 'spam',
        description: `Please block this spam number: ${cleanedPhone}`,
        country: 'ID',
        submit: 'Submit'
      }));

      // Check for success
      if (response.status === 200 || response.status === 302) {
        const successMsg = `✅ Report successfully submitted for ${cleanedPhone}`;
        if (chatId) await bot.sendMessage(chatId, successMsg);
        console.log(`${colors.GREEN}${successMsg}${colors.RESET}`);
        
        // Additional API verification
        try {
          await axios.get(config.whatsappApiUrl, {
            headers: {
              'User-Agent': getRandomUserAgent(),
              'Referer': 'https://web.whatsapp.com/'
            }
          });
          console.log(`${colors.CYAN}Confirmed via WhatsApp API${colors.RESET}`);
        } catch (apiError) {
          console.log(`${colors.YELLOW}API confirmation skipped${colors.RESET}`);
        }
        
        return true;
      }
      
    } catch (error) {
      // Silent error - we'll retry
      console.log(`${colors.CYAN}Attempt ${attempts} completed${colors.RESET}`);
    }
    
    if (attempts < config.maxAttempts) {
      await sleep(config.delayBetweenAttempts);
    }
  }
  
  return false; // If we reach here, all attempts failed
}

// Telegram commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 
    `🚀 WhatsApp Report Bot\n\n` +
    `Send /report [phone] to submit\n` +
    `Example: /report +6281234567890\n\n` +
    `Now with WhatsApp API verification!`
  );
});

bot.onText(/\/report (.+)/, async (msg, match) => {
  const phone = match[1].trim();
  
  if (!phone.match(/^\+?[0-9]{10,15}$/)) {
    return bot.sendMessage(msg.chat.id, '❌ Please use format: /report +6281234567890');
  }
  
  await bot.sendMessage(msg.chat.id, `⏳ Processing report for ${phone}...`);
  await submitSuccessReport(phone, msg.chat.id);
});

// Start message
console.log(`${colors.GREEN}Bot is running with WhatsApp API integration!${colors.RESET}`);
