require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"gN4RZq+a4j2IMuZjPd6/CPZ0pVztuXrJN7B3HVq3jXk="},"public":{"type":"Buffer","data":"29uLbAIBTTSRKnDqCccGiNaQV+2wUtcHkwZwFtNeLCw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qAGH9kdKjnKbCLWHPBGllVsyVTpBm/ofQCnvx0Ww3E8="},"public":{"type":"Buffer","data":"kof8Gm+WhyA9JdZgyyN5RZEvV8gQdOadd8UA9CTsmD4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EIlpo1WIS5mDs8e45luAYN0z7oT8CYXdG3rq/heIJWw="},"public":{"type":"Buffer","data":"grJ2TO27dkaHbnsNQUPspuDD8UA+CitULZiAeMfFw0A="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"ODG5iFX4w9s2i3dl5Mfy/kWgx5ULqNiBPPPPrQDzFl0="},"public":{"type":"Buffer","data":"pwyjJMrkZ9Cf55tljF9vgfDMRmZLiOlZtt1FhdBNTjU="}},"signature":{"type":"Buffer","data":"csVpsK/cW4uwTDJW1HS5IicERORAMqDVB+ysdqhYT5NRC7UTQouMNPzmtUvgIkxL8rYtItfDXY3/gAaAoNSbjw=="},"keyId":1},"registrationId":218,"advSecretKey":"9LSBdwHrYTixMI+MDtYgSd0uXBbblNIrLbG0hKF6gqM=","processedHistoryMessages":[{"key":{"remoteJid":"254748185432@s.whatsapp.net","fromMe":true,"id":"5483CD1A6FCC0C0C235C4A49AD5B6285"},"messageTimestamp":1753001784}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"FDVV8Q45","me":{"id":"254748185432:19@s.whatsapp.net","name":"𝖘𝖙𝖆𝖓𝖔𝖔","lid":"102641715699848:19@lid"},"account":{"details":"CLXaypgEELDe8sMGGAIgACgA","accountSignatureKey":"ndefrcgkgXDMGoxeHdlCO7+QhBrn4Su/DhTX211ZLGc=","accountSignature":"L5KdO3DNlOvGDjyr3f+wOjujdshvTZdVIvduvURdI6uAWcnjB8tPe2ctkXHUrBCrryg8pARlPKFTIPCPPktQAA==","deviceSignature":"wYyW7tJiXkfGDtgbVoalX8Y5NQwhwpuilMtzaWl3QlhfX5ADNIvRIkmdQ3MPKI8h0bLA9Qg7aRwE9TbKyYrPjQ=="},"signalIdentities":[{"identifier":{"name":"254748185432:19@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZ3Xn63IJIFwzBqMXh3ZQju/kIQa5+Ervw4U19tdWSxn"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIDQ=="},"lastAccountSyncTimestamp":1753001779,"lastPropHash":"2V77qU","myAppStateKeyId":"AAAAAKgw"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
