/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {
      
        // controller.hears('sample','message,direct_message', async(bot, message) => {
        controller.hears(['hello','howdy','hey','aloha','hola','bonjour','oi'],['message'], async (bot,message) => {
            // do something to respond to message
            let wordstring = 'what is your  emaL phones?'
            // if (/(contact|email|phone|social)/gi.test(wordstring)){
            //     console.log('yes find it!!!!')
            // }

            await bot.reply(message,'Oh hai!');
          
          });

          controller.hears(async(message) => { 
                //  what is your address?

                // resune jason to search 


            return  message.text.split(" ").some(
                  (word) => {
                      let key_words = ['your address','location','postalCode','city','countryCode','region','where do you live',]
                      let alphabet = 'abcdefghijklmnopqrstuvwxyz'
                      if (!alphabet.includes(word.slice(-1)))
                      { word = word.slice(0,-1)}
                      return (key_words.includes(word.toLowerCase()))
            })
          }, 'message', async(bot, message) => { 
              // do something
              
              await bot.reply(message,'my address is: 825 App Academy Street,Sanfrancisco, CA 94112 ');
              
          });
       

}
