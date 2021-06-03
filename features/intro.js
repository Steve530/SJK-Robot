const resume1 = require("../features/resume.json");

module.exports = function (controller) {

	controller.on('hello, welcome_back', async (bot, message) => {
		let quickies = []
		for (const property in resume1) {
			quickies.push({
			'title': property[0].toUpperCase() + property.substr(1),
				'payload': property
			})
		}
		await bot.reply(message, `Hello, my name is ${resume1.basics.name}.`);
		await bot.reply(message, `I'm broke and looking for work. `); 
		await bot.reply(message, {
			text: 'What would you like to know 🤔? ',
			quick_replies: quickies
		});
		// console.log(quickies);
	});

	

	// let resumeKeys = Object.keys(resume);

	// controller.hears(resumeKeys, 'message', async (bot, message) => {
	// 	references = [];
	// 	categoryVal = resume1[message.text];
	// 	let vals;
	// 	if (Array.isArray(categoryVal)) vals = resume1[message.text][0];
	// 	else vals = resume1[message.text];

	// 	Object.keys(vals).forEach(ele => {
	// 		if (Array.isArray(vals[ele])) {
	// 			references.push({
	// 				'title': ele,
	// 				'payload': vals[ele].join(',')
	// 			});
	// 		} else {
	// 			references.push({
	// 				'title': ele,
	// 				'payload': vals[ele]
	// 			});
	// 		}
	// 	});

	// 	await bot.reply(message, { type: 'typing' });
	// 	setTimeout(async () => {
	// 		await bot.changeContext(message.reference);


	// 		await bot.reply(message, {
	// 			text: `What more about my ${message.text} ?`,
	// 			quick_replies: references
	// 		});
	// 	}, 1000);
	// });


	// let currPath = [];

	// function mapResumeToHears(obj) {
	// 	// let keys = [];
	// 	const arrKeys = {
	// 		profiles: obj => `${obj.username} at ${obj.network}`,
	// 		work: obj => `${obj.position} at ${obj.company}`,
	// 		volunteer: obj => `${obj.position} at ${obj.organization}`,
	// 		education: obj => `${obj.studyType} at ${obj.institution}`,
	// 		awards: obj => `${obj.title} from ${obj.awarder}`,
	// 		publications: obj => `${obj.name}`,
	// 		skills: obj => `${obj.name}`,
	// 		languages: obj => `${obj.language}`,
	// 		interests: obj => `${obj.name}`,
	// 		references: obj => `${obj.name}`,
	// 	};
		
	// 	for (k in obj) {
	// 		let key = k.slice(0);
	// 		// keys.push(key);

	// 		// const currVal = getObj(obj, path);
	// 		if (Array.isArray(obj[key])) {
	// 			if (key in arrKeys) {
	// 				let arrMap = {};

	// 				let quickReplies = [{ 'title': "Back", 'payload': 'back' }];
	// 				for (const idx in obj[key]) {
	// 					const newKey = arrKeys[key](obj[key][idx]);
	// 					arrMap[newKey] = obj[key][idx];
	// 					quickReplies.push({
	// 						'title': newKey,
	// 						'payload': newKey,
	// 					});
	// 				}
	// 				// debugger
	// 				if (key in obj) obj[key] = arrMap;
	// 				// console.log(currObj);
	// 				controller.hears(key, "message", async (bot, message) => {
	// 					let currObj = getObj(resume1, currPath);
	// 					if (key in currObj) {
	// 						currPath.push(key);
	// 						console.log(currPath);

	// 						await bot.reply(message, {
	// 							text: `What more about my ${message.text}`,
	// 							quick_replies: quickReplies,
	// 						})
	// 					}
	// 				});
	// 				mapResumeToHears(arrMap);
	// 			} else {
	// 				let quickReplies = [{ 'title': "Back", 'payload': 'back' }];
	// 				for (const subKey in obj) {
	// 					quickReplies.push({
	// 						'title': subKey[0].toUpperCase() + subKey.substr(1),
	// 						'payload': subKey
	// 					});
	// 				}
	// 				controller.hears(key, "message", async (bot, message) => {
	// 					let currObj = getObj(resume1, currPath);
	// 					if (key in currObj) {
	// 						await bot.reply(message, currObj[key].join(", "));
	// 						await bot.reply(message, {
	// 							text: `What more about my ${message.text}`,
	// 							quick_replies: quickReplies,
	// 						})
	// 					}
	// 				});
	// 			}
	// 		} else if (typeof obj[key] === "object") {
	// 			let quickReplies = [{ 'title': "Back", 'payload': 'back' }];
	// 			for (const subKey in obj[key]) {
	// 				quickReplies.push({
	// 					'title': subKey[0].toUpperCase() + subKey.substr(1),
	// 					'payload': subKey
	// 				});
	// 			}
	// 			controller.hears(key, "message", async (bot, message) => {
	// 				let currObj = getObj(resume1, currPath);
	// 				if (key in currObj) {
	// 					currPath.push(key);
	// 					console.log(currPath);
						
	// 					await bot.reply(message, {
	// 						text: `What more about my ${message.text}`,
	// 						quick_replies: quickReplies,
	// 					})
	// 				}
	// 			});
	// 			mapResumeToHears(obj[key]);
	// 		} else {
	// 			controller.hears(key, "message", async (bot, message) => {
	// 				let currObj = getObj(resume1, currPath);
	// 				let quickReplies = [{ 'title': "Back", 'payload': 'back' }];
	// 				for (const subKey in currObj) {
	// 					quickReplies.push({
	// 						'title': subKey[0].toUpperCase() + subKey.substr(1),
	// 						'payload': subKey
	// 					});
	// 				}
	// 				console.log(currPath);
	// 				// console.log(quickReplies);
	// 				// console.log(currObj);
	// 				if (key in currObj) {
	// 					// currPath.push(key);
	// 					// debugger;
	// 					await bot.reply(message, currObj[key]);
	// 					await bot.reply(message, {
	// 						text: `What more about my ${currPath[currPath.length-1]}`,
	// 						quick_replies: quickReplies,
	// 					})
	// 				}
	// 			});
	// 		}
	// 	}

	// 	// if (path.length > 0) {
	// 	// 	controller.hears(path[path.length-1], "message", async (bot, message) => {
	// 	// 		await bot.reply(message, {
	// 	// 			text: `What more about my ${message.text}`,
	// 	// 			quick_replies: keys,
	// 	// 		})
	// 	// 	})
	// 	// }
	// }

	// controller.hears("back", "message", async (bot, message) => {
	// 	currPath.pop();
	// 	let quickReplies = currPath.length ? [{ 'title': "Back", 'payload': 'back' }] : [];
	// 	for (const subKey in getObj(resume1, currPath)) {
	// 		quickReplies.push({
	// 			'title': subKey[0].toUpperCase() + subKey.substr(1),
	// 			'payload': subKey
	// 		});
	// 	}
	// 	await bot.reply(message, {
	// 		text: `Anything else?`,
	// 		quick_replies: quickReplies,
	// 	})
	// });

	// mapResumeToHears(resume1);

	// function getObj(obj, path) {
	// 	let ref = obj;
	// 	for (let i=0; i<path.length; i++) {
	// 		ref = ref[path[i]];
	// 	}
	// 	return ref;
	// }
	// console.log(getObj(resume1, currPath).basics.profiles);
}
