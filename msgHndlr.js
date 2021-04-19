// const { decryptMedia } = require('@open-wa/wa-decrypt')
// const fs = require('fs-extra')
// //const axios = require('axios')
// const moment = require('moment-timezone')
// //const get = require('got')
// var colors = require('colors');
// const { exec } = require('child_process')
// const { stdout } = require('process')

// moment.tz.setDefault('Europe/Rome').locale('id')

// module.exports = msgHandler = async (client, message) => {
// 	try {
// 		const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
// 		let { body } = message
// 		const { name, formattedTitle } = chat
// 		let { pushname, verifiedName } = sender
// 		pushname = pushname || verifiedName
// 		const commands = caption || body || ''
// 		var withNoDigits = ""
// 		const command = commands.toLowerCase().split(' ')[0] || ''
// 		const time = moment(t * 1000).format('DD/MM HH:mm:ss')
// 		const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
// 		if (isMedia && type === 'image') {
// 			console.log(moment().format("H:mm:ss").green + " Sticker " + message.from);
// 			client.reply(from, 'Your Sticker is being made, pls be patient', id)
// 			const mediaData = await decryptMedia(message, uaOverride)
// 			console.log(moment().format("H:mm:ss").green + " I have decoded the photo " + message.from);
// 			const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
// 			await client.sendImageAsSticker(from, imageBase64)
// 			console.log(moment().format("H:mm:ss").green + " sticker made " + message.from);
// 		}
// 		if (isMedia && (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)) {
// 			const mediaData = await decryptMedia(message, uaOverride)
// 			console.log(moment().format("H:mm:ss").green + " Sticker  " + message.from);
// 			client.reply(from, 'Your Sticker is being made, pls be patient', id)
// 			const filename = `./media/input.${mimetype.split('/')[1]}`
// 			console.log(moment().format("H:mm:ss").green + " I have decoded the video " + message.from);
// 			await fs.writeFileSync(filename, mediaData)
// 			console.log(moment().format("H:mm:ss").green + " saved video " + message.from);
// 			await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
// 				console.log(moment().format("H:mm:ss").green + " video converted to gif " + message.from);
// 				const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
// 				await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
// 				console.log(moment().format("H:mm:ss").green + " sticker sent " + message.from);
// 			})
// 		}
// 		if (command === "!Help") {
// 			console.log(moment().format("H:m:ss").green + ": Guide " + message.from);
// 			client.sendText(message.from, 'Connect to the site https://giphy.com/ \n\nChoose your gif\n\nHold and click "Share" if you are on safari\nHold and then click "open image in other tab"  if you are on chrome\n\nThen send that link');
// 			client.sendText(message.from, "https://youtu.be/aGc8Po8G0Bo  \n\n\nHere is a little safari video guide\n");
// 			client.sendText(message.from, "https://youtu.be/YBe_7KzvQ_g \n\n\nHere is a little chrome video guide\n");
// 			client.sendText(message.from, "If you want a static sticker instead, send a photo\n\nIt could take only the central part of the photo");
// 			client.sendText(message.from, "From today you can send a video / gif and it will become an animated sticker");

// 		}
// 		if (command === "!Link") {
// 			console.log(moment().format("H:m:ss").green + ": Creator " + message.from);
// 			client.sendText(message.from, "Use this link to access google drive resources and recorded lectures \n\n\n https://drive.google.com/drive/folders/1TnsZJdZ_gISnefClnIUURAO-Oydshemm?usp=sharing");
// 		}

// 		if (command === "!Creator") {
// 			console.log(moment().format("H:m:ss").green + ": Link " + message.from);
// 			client.sendText(message.from, "https://www.instagram.com/shlaize/ \n\n\n https://github.com/shl3sh \n\n\nContact me for any bot problems, or if you want to contribute to its growth");
// 		}
// 		if (body.includes("media")) {
// 			console.log(moment().format("H:mm:ss").green + " giphy " + message.from);
// 			if (!isNaN(body.charAt(13))) {
// 				console.log(moment().format("H:mm:ss").green + " link with number, I remove the number " + message.from);
// 				withNoDigits = body.replace(/\d+/, "");
// 				console.log(moment().format("H:mm:ss").green + withNoDigits);
// 				console.log(moment().format("H:mm:ss").green + " number removed " + message.from);
// 			} else {
// 				console.log(moment().format("H:mm:ss").green + " no number " + message.from);
// 				withNoDigits = body;
// 				console.log(moment().format("H:mm:ss").green + withNoDigits);
// 				console.log(moment().format("H:mm:ss").green + " link" + message.from);
// 			}
// 			client.sendGiphyAsSticker(message.from, withNoDigits);
// 			client.sendText(message.from, "Alright! Wait a moment");
// 			console.log(moment().format("H:mm:ss").green + "Sticker sent" + message.from);
// 		}
// 	} catch (err) {
// 		console.log("error".red)
// 		//client.kill().then(a => console.log(a))
// 	}
// }

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
//const axios = require('axios')
const moment = require('moment-timezone')
//const get = require('got')
var colors = require('colors');
const { exec } = require('child_process')
const { stdout } = require('process')

moment.tz.setDefault('Europe/Rome').locale('id')

module.exports = msgHandler = async (client, message) => {
	try {
		const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
		let { body } = message
		const { name, formattedTitle } = chat
		let { pushname, verifiedName } = sender
		pushname = pushname || verifiedName
		const commands = caption || body || ''
		var withNoDigits = ""
		const command = commands.toLowerCase().split(' ')[0] || ''
		const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
		if (isMedia && type === 'image') {
			console.log(moment().format("H:mm:ss").green + " Sticker " + message.from);
			client.reply(from, 'Your Sticker is being made, pls be patient', id)
			const mediaData = await decryptMedia(message, uaOverride)
			console.log(moment().format("H:mm:ss").green + " decripto la foto " + message.from);
			const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
			await client.sendImageAsSticker(from, imageBase64)
			console.log(moment().format("H:mm:ss").green + " sticker inviato " + message.from);
		}
		if (isMedia && (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)) {
			const mediaData = await decryptMedia(message, uaOverride)
			console.log(moment().format("H:mm:ss").green + " Sticker Animato " + message.from);
			client.reply(from, 'Your Sticker is being made, pls be patient', id)
			const filename = `./media/input.${mimetype.split('/')[1]}`
			console.log(moment().format("H:mm:ss").green + " decripto il video " + message.from);
			await fs.writeFileSync(filename, mediaData)
			console.log(moment().format("H:mm:ss").green + " video salvato " + message.from);
			await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
				console.log(moment().format("H:mm:ss").green + " video convertito in gif " + message.from);
				const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
				await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
				console.log(moment().format("H:mm:ss").green + " sticker inviato " + message.from);
			})//
		}
		if (command == '!guida' || command == "!help") {
			console.log(moment().format("H:m:ss").green + ": Guida " + message.from);
			client.sendText(message.from, 'Collegati al sito https://giphy.com/ \n\nScegli la gif da te preferita\n\nTieni premuto e clicca "Condividi" Se ti trovi su safari\nTieni premuto e clicca "immagine in altra scheda"  Se ti trovi su chrome\n\nPoi invia quel link');
			client.sendText(message.from, "https://youtu.be/aGc8Po8G0Bo  \n\n\nEcco a te una piccola videoguida per safari\n");
			client.sendText(message.from, "https://youtu.be/YBe_7KzvQ_g \n\n\nEcco a te una piccola videoguida per chrome\n");
			client.sendText(message.from, "Se invece vuoi uno sticker statico, manda una foto\n\nN.B. potrebbe prendere solo la parte centrale della foto");
			client.sendText(message.from, "Da oggi puoi anche inviare un video/gif ed esso diventerà uno sticker animato");

		}
		if (command === "!Creator") {
			console.log(moment().format("H:m:ss").green + ": Creator " + message.from);
			client.sendText(message.from, "https://www.instagram.com/whataboutclaxl/ \n\n\n https://github.com/Claxl \n\n\nContattami per qualsiasi problema sul bot, se vuoi contribuire alla sua crescita");
		}
		if (body.includes("media")) {
			console.log(moment().format("H:mm:ss").green + " giphy " + message.from);
			if (!isNaN(body.charAt(13))) {
				console.log(moment().format("H:mm:ss").green + " link con numero, tolgo il numero " + message.from);
				withNoDigits = body.replace(/\d+/, "");
				console.log(moment().format("H:mm:ss").green + withNoDigits);
				console.log(moment().format("H:mm:ss").green + " numero tolto " + message.from);
			} else {
				console.log(moment().format("H:mm:ss").green + " nessun numero " + message.from);
				withNoDigits = body;
				console.log(moment().format("H:mm:ss").green + withNoDigits);
				console.log(moment().format("H:mm:ss").green + " link" + message.from);
			}
			client.sendGiphyAsSticker(message.from, withNoDigits);
			client.sendText(message.from, "Tutto ok! Attendi un attimo");
			console.log(moment().format("H:mm:ss").green + " sticker inviato " + message.from);
		}
	} catch (err) {
		console.log("errore".red)
		//client.kill().then(a => console.log(a))
	}
}