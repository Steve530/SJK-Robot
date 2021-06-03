module.exports = function(controller) {
    const resume1 = require("../features/resume.json")


    controller.hears(new RegExp(/(references)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'references';
        let references_catagary = resume1[catagary_word][0]
        let keys = Object.keys(references_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = references_catagary[second_word]
            let references = []
            let vals = resume1['references'][0]
            // console.log(vals)
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
            else if (second_word === ''){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else
        await bot.reply(message,{ text: `It is: ${answer}` });
    });
    controller.hears(new RegExp(/(interests)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'interests';
        let interests_catagary = resume1[catagary_word][0]
        let keys = Object.keys(interests_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = interests_catagary[second_word]
            let references = []
            let vals = resume1['interests'][0]
            // console.log(vals)
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
            else if (second_word === ''){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else
        await bot.reply(message,{ text: `It is: ${answer}` });
    });
    controller.hears(new RegExp(/(languages)/gi), ['message','direct_message'], async function(bot, message) {
        let catagary_word = 'languages';
        let languages_catagary = resume1[catagary_word][0]
        let keys = Object.keys(languages_catagary)
        // find the second match word
        let message_str = message.text.toLowerCase()
            let second_word = ''
            keys.forEach((word)=>{
                if (message_str.includes(word)) second_word = word
            })
            answer = languages_catagary[second_word]
            let references = []
            let vals = resume1['languages'][0]
            // console.log(vals)
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
            else if (second_word === ''){
                await bot.reply(message, {
                    text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                    quick_replies: references
                });
            }
            else
        await bot.reply(message,{ text: `It is: ${answer}` });
    });

        controller.hears(new RegExp(/(publications|publication)/gi), ['message','direct_message'], async function(bot, message) {
            let catagary_word = 'publications';
            let publications_catagary = resume1[catagary_word][0]
            let keys = Object.keys(publications_catagary)
            // find the second match word
            let message_str = message.text.toLowerCase()
                let second_word = ''
                keys.forEach((word)=>{
                    if (message_str.includes(word)) second_word = word
                })
                answer = publications_catagary[second_word]
                let references = []
                let vals = resume1['publications'][0]
                // console.log(vals)
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
                if ((second_word === '')&&(message_str !== catagary_word)&& answer ){
                    await bot.reply(message, {
                        text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                        quick_replies: references
                    });
                }
                else if ((second_word !== ''))
            await bot.reply(message,{ text: `It is: ${answer}` });
        });
   

        controller.hears(new RegExp(/(awards|prize|win)/gi), ['message','direct_message'], async function(bot, message) {
            let catagary_word = 'awards';
            let awards_catagary = resume1[catagary_word][0]
            let keys = Object.keys(awards_catagary)
            // find the second match word
            let message_str = message.text.toLowerCase()
                let second_word = ''
                keys.forEach((word)=>{
                    if (message_str.includes(word)) second_word = word
                })
                answer = awards_catagary[second_word]
                let references = []
                let vals = resume1['awards'][0]
                // console.log(vals)
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
                if ((second_word === '')&&(message_str !== catagary_word)&& answer ){
                    await bot.reply(message, {
                        text: `Seems you are talking about my ${catagary_word}. I came from Mars. Please use words below in a longer sentance.`,
                        quick_replies: references
                    });
                }
                else if ((second_word !== ''))
            await bot.reply(message,{ text: `It is: ${answer}` });
        });
        controller.hears(new RegExp(/(volunteer|volunteer experience)/gi), ['message','direct_message'], async function(bot, message) {
            let catagary_word = 'volunteer';
            let volunteer_catagary = resume1[catagary_word][0]
            let keys = Object.keys(volunteer_catagary)
            // find the second match word
            let message_str = message.text.toLowerCase()
                let second_word = ''
                keys.forEach((word)=>{
                    if (message_str.includes(word)) second_word = word
                })
                answer = volunteer_catagary[second_word]
                let references = []
                let vals = resume1['volunteer'][0]
                // console.log(vals)
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