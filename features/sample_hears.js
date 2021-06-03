module.exports = function(controller) {
    const resume1 = require("../features/resume.json")
    // use a function to match a condition in the message
    controller.hears(['cool','awesome','very good','good job','nice','amazing'], ['message'], async (bot, message) => {
        await bot.reply(message, 'Thanks!');
    });
    controller.hears(['goodbye','bye','byebye','see you later'],['message'], async (bot,message) => {
        // do something to respond to message
        

        await bot.reply(message,'Bye. have a nice one!');
      
      });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/(contact|email|phone|social media|basics|basic|address)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'basics';
        let basics_catagary = resume1[catagary_word]
        let keys = Object.keys(basics_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = basics_catagary[second_word]
           

            var references = []
            let vals = resume1['basics']
            Object.keys(vals).forEach ( ele =>
                {
                    Array.isArray(vals[ele]) ? 
                    (references.push({
                        'title': ele,
                        'payload':vals[ele].join(',')
                    }))
                    :
                    (references.push({
                        'title': ele,
                        'payload':vals[ele]
                    }))
                }
             )
            if (message_str === catagary_word){
              
                 await bot.reply(message, {type: 'typing'});
                 setTimeout(async () => {
                  
					await bot.changeContext(message.reference);
					await bot.reply(message, {
                      
						text: `What more about my ${message.text} information?`,
						quick_replies: references
					});
                }, 1000);

            }
            if (/contact you|your contact|reach to you|information/.test(message_str)) {
                await bot.reply(message, {
                    text: `My phone number is:${vals['phone']}, email: ${vals['email']}. Twitter username: ${vals['profiles'][0]['username']}....   But call me maybe!`,
                    quick_replies: references
                });
            }
            if (/do you live|your address/.test(message_str)) {
                await bot.reply(message, {
                    text: `My address is: ${vals['location']['address']}, ${vals['location']['city']} ${vals['location']['postalCode']}  ${vals['location']['countryCode']}.`,
                    quick_replies: references
                });
            }
            if (/social|media/.test(message_str)) {
                await bot.reply(message, {
                    text: `My twitter username is: ${vals['profiles'][0]['username']}, url: ${vals['profiles'][0]['url']}.`,
                    quick_replies: references
                });
            }
            else if (second_word === ''){ }
            else
        await bot.reply(message,{ text: `It is: ${answer}` });
    });
     /////////
    controller.hears(new RegExp(/(framework|coding|stack|programming|skill|tech|code|language)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'skills';
        let skills_catagary = resume1[catagary_word][0]
        let keys = Object.keys(skills_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = skills_catagary[second_word]
            let references = []
            let vals = resume1['skills'][0]
         
            Object.keys(vals).forEach ( ele =>
                {
                    Array.isArray(vals[ele]) ? 
                    (references.push({
                        'title': ele,
                        'payload':vals[ele].join(',')
                    }))
                    :
                    (references.push({
                        'title': ele,
                        'payload':vals[ele]
                    }))
                }
             )
            if (message_str === catagary_word){
                 await bot.reply(message, {type: 'typing'});
                 setTimeout(async () => {
					await bot.changeContext(message.reference);
					await bot.reply(message, {
						text: `What more about my ${message.text} ?`,
						quick_replies: references
					});
                }, 1000);

            }
            if (/years coding|how many years|how long|start coding/.test(message_str)) {
                await bot.reply(message, {
                    text: `I started coding 3 years ago.`,
                    quick_replies: references
                });
            }
            if (/level|how good/.test(message_str)) {
                await bot.reply(message, {
                    text: `I am very good at coding`,
                    quick_replies: references
                });
            }
            if (/language|stack|framework/.test(message_str)) {
                await bot.reply(message, {
                    text: `I am good at ${vals['keywords']}. And your react is? `,
                    quick_replies: references
                });
            }
            if ((second_word === '')&&(message_str !== catagary_word)&& answer ){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else if ((second_word !== ''))
        await bot.reply(message,{ text: `It is: ${answer}` });
    });

    controller.hears(new RegExp(/(school|education|institution|study|gpa)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'education';
        let education_catagary = resume1[catagary_word][0]
        let keys = Object.keys(education_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = education_catagary[second_word]
            let references = []
            let vals = resume1['education'][0]

            Object.keys(vals).forEach ( ele =>
                {
                    Array.isArray(vals[ele]) ? 
                    (references.push({
                        'title': ele,
                        'payload':vals[ele].join(',')
                    }))
                    :
                    (references.push({
                        'title': ele,
                        'payload':vals[ele]
                    }))
                }
             )
            if (message_str === catagary_word){
                 await bot.reply(message, {type: 'typing'});
                 setTimeout(async () => {
					await bot.changeContext(message.reference);
					await bot.reply(message, {
						text: `What more about my ${message.text} ?`,
						quick_replies: references
					});
                }, 1000);  
            }
            if (/education history|education histories|your education|education description|timeline/.test(message_str)) {
                await bot.reply(message, {
                    text: `I went to ${vals['institution']} in ${vals['area']} for my ${vals['studyType']} between ${vals['startDate']} and  ${vals['endDate']}.`,
                    quick_replies: references
                });
            }
            
            else if ((second_word === '')&&(message_str !== catagary_word)&& answer ){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else if ((second_word !== ''))
        await bot.reply(message,{ text: `It is: ${answer}` });
    });
    // controller.hears(new RegExp(/(skill|company|work)/gi), ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I heard ur using a regular expression. for skill!!!' });
    // });
 
    controller.hears(new RegExp(/(job|company|work|position|title|working)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'work';
        let a_catagary = resume1[catagary_word][0]
        let keys = Object.keys(a_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            if (/job title/.test(message_str)) second_word = 'position'
            answer = a_catagary[second_word]
            let references = []
            let vals = resume1['work'][0]
            
            Object.keys(vals).forEach ( ele =>
                {
                    Array.isArray(vals[ele]) ? 
                    (references.push({
                        'title': ele,
                        'payload':vals[ele].join(',')
                    }))
                    :
                    (references.push({
                        'title': ele,
                        'payload':vals[ele]
                    }))
                }
             )
            if (message_str === catagary_word){
                 await bot.reply(message, {type: 'typing'});
                 setTimeout(async () => {
					await bot.changeContext(message.reference);
					await bot.reply(message, {
						text: `What more about my ${message.text} ?`,
						quick_replies: references
					});
                }, 1000);      
            }
            if (/job history|work experience|job histories|your job|job description|timeline/.test(message_str)) {
                await bot.reply(message, {
                    text: `I have worked for ${vals['company']} as a ${vals['position']} between ${vals['startDate']} and  ${vals['endDate']}. `,
                    quick_replies: references
                });
            }

            // if (/ideal|dream/.test(message_str)) {
            //     await bot.reply(message, {
            //         text: `My ideal company is Facebook`,
                
            //     });
            // }
            if ((second_word === '')&&(message_str !== catagary_word)&& answer ){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else if ((second_word !== ''))
        await bot.reply(message,{ text: `It is: ${answer}` });
    });




}