const TelegramBot = require('node-telegram-bot-api');
const userToken = '6286289860:AAHX2Kr5P9gF8G5r0R1Ft0KFC8XAvyQ6hIc';
const adminToken = '5977204907:AAGASrwZ_VloKQs2Wu24wlRt6yfAKuZK-ZM';
const webAppUrl = 'https://singular-griffin-2b9bc4.netlify.app';

// const userbot = new TelegramBot(userToken, { polling: true });
const adminbot = new TelegramBot(adminToken, { polling: true });
const adminChatId = null;

const reSend = (chatId, msg) => {
	userbot.sendMessage(chatId, msg);
	adminbot.sendMessage(adminChatId, msg);
};

// userbot.on('message', async msg => {
// 	const chatId = msg.chat.id;
// 	const text = msg.text;

// 	if (text === '/start') {
// 		await userbot.sendMessage(chatId, 'Welcome to Yarocka Smart Hotel', {
// 			reply_markup: {
// 				keyboard: [
// 					[{ text: 'Manage your aparts', web_app: { url: webAppUrl } }],
// 				],
// 				resize_keyboard: true,
// 			},
// 		});
// 	}

// 	reSend(chatId, text);

// 	if (msg?.web_app_data?.data) {
// 		try {
// 			const data = JSON.parse(msg?.web_app_data?.data);
// 			console.log(data);
// 			await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
// 			await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
// 			await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);

// 			setTimeout(async () => {
// 				await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
// 			}, 3000);
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}
// });

adminbot.on('message', async msg => {
	const chatId = msg.chat.id;
	console.log(msg);
	// const text = msg.text;
	// adminChatId = chatId;
	await adminbot.sendMessage(chatId, `Ваш айди - ${chatId}`);
});
