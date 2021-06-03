module.exports = function(controller) {
	const resume1 = require("../features/resume.json")
	 

	
		    let detail_quickies = []
		    for (const catgary_property in resume1) {
                if (!Array.isArray(resume1[catgary_property]) ){
                    level2 = resume1[catgary_property]
                }
                else level2 = resume1[catgary_property][0]
                for (const keys in level2){
                    detail_quickies.push(catgary_property+' '+keys)
                }
            }
       	 //  listen to (catgary_property+' '+keys)        ////
        controller.hears(detail_quickies,'message', async (bot,message) => {
                catgary_property = message.text.split(' ')[0]
                detail_key = message.text.split(' ')[1]
            // console.log(resume1[catgary_property])
            let catgary_val= resume1[catgary_property]
            if (Array.isArray(catgary_val)) {
                catgary_val = catgary_val[0]
            }
            let answers = catgary_val[detail_key]
        
                await bot.reply(message,`The answer is:  ${answers} `);
              
              });
           
	 
	
}
