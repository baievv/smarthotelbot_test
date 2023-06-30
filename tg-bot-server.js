require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { USER_TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${USER_TOKEN}`;
const URI = `/webhook/${USER_TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

// const TelegramBot = require('node-telegram-bot-api');
// const webAppUrl = 'https://singular-griffin-2b9bc4.netlify.app';

const app = express();
app.use(bodyParser.json());

const init = async () => {
	const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
	console.log(res.data);
};

app.post(URI, async (req, res) => {
	console.log(req.body);

	const chatId = req.body.message.chat.id;
	const text = req.body.message.text;

	await axios.post(`${TELEGRAM_API}/sendMessage`, {
		chat_id: chatId,
		text: text,
	});
	return res.send();
});

app.listen(process.env.PORT || 8443, async () => {
	console.log('app running on port-', process.env.PORT || 8443);
	await init();
});

// const userbot = new TelegramBot(userToken, { polling: true });

// userbot.on('message', async msg => {
// 	const userchatId = msg.chat.id;
// 	const text = msg.text;

// 	if (text === '/start') {
// 		await userbot.sendMessage(userchatId, 'Welcome to Yarocka Smart Hotel', {
// 			reply_markup: {
// 				keyboard: [
// 					[{ text: 'Manage your aparts', web_app: { url: webAppUrl } }],
// 				],
// 				resize_keyboard: true,
// 			},
// 		});
// 	}

// 	await userbot.sendMessage(userchatId, `Ваш айди - ${userchatId}`);
// 	await userbot.forwardMessage(
// 		(chatId = '909198449'),
// 		(fromChatId = msg.chat.id),
// 		(messageId = msg.message_id)
// 	);

// console.log(msg.from);

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
