module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    let jokes = ["knock,knock",'lock lock','lock,lock','knock knock','knockknock','knockknock!','knock knock?']
    controller.hears(jokes, 'message', async (bot, message) => {

        await bot.reply(message, 'Who is it?');
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {

            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: `Nice one! ha ha har`,
               
            });
        }, 6000);

    })



    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });


}