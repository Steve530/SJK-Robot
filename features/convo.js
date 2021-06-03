const { BotkitConversation } = require('botkit');
const resume = require("./resume.json");

module.exports = function (controller) {
    // let convo = new BotkitConversation('resume', controller);

    // function generateThreads(obj, ctx="default") {
    //     let quickReplies = [
    //         {
    //             title: "back",
    //             payload: "back",
    //         }
    //     ];
    //     let answers = [
    //         {
    //             pattern: "back",
    //             handler: async function (response, convo, bot) {
    //                 await convo.gotoThread(ctx);
    //             },
    //         }
    //     ];
    //     for (key in obj) {
    //         console.log(key, ctx);
    //         quickReplies.push({
    //             title: key,
    //             payload: key,
    //         });

    //         answers.push({
    //             pattern: key,
    //             handler: async function (response, convo, bot) {
    //                 console.log("hit answer");
    //                 debugger;
    //                 await convo.gotoThread(response.text).then(() => console.log("past answer"))
    //             },
    //         });

    //         if (Array.isArray(obj[key])) {

    //         } else if (typeof obj[key] === 'object' && obj[key] !== null) {
    //             generateThreads(obj[key], key);
    //         } else {
    //             convo.addMessage({ text: obj[key] }, key);
    //             convo.addAction(ctx, key);
    //         }
    //     }
    //     // console.log(quickReplies, answers);
    //     convo.addQuestion(
    //         {
    //             text: `What else would you like to know?`,
    //             quick_replies: async () => quickReplies,
    //         }, answers, ctx, ctx
    //     );
    // }
    // // debugger
    // generateThreads(resume);
        
    
    
    
    

    // // job-thread
    // convo.addMessage({
    //     text: 'I did jobs abc',
    // }, 'job-thread');
    // convo.addAction('default', 'job-thread');

    // // work-thread
    // convo.addMessage({
    //     text: 'I studied xyz',
    // }, 'work-thread');
    // convo.addAction('default', 'work-thread');

    // // project-thread
    // convo.addMessage({
    //     text: "These are the projects that I've done",
    // }, 'project-thread');
    // convo.addAction('default', 'project-thread');

    // // create a path where neither option was matched
    // // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
    // convo.addMessage({
    //     text: 'Sorry I did not understand.',
    //     action: 'default',
    // }, 'bad-response');


    // // Create a question in the default thread...
    // convo.addQuestion(
    //     {
    //         text: 'Would else would you like to know?',
    //         quick_replies: async (template, vars) => {
    //             return [
    //                 {
    //                     title: 'Job History',
    //                     payload: 'Tell me about your job history'
    //                 },
    //                 {
    //                     title: 'Work History',
    //                     payload: "I'd like to know about your work history"
    //                 },
    //                 {
    //                     title: 'Projects',
    //                     payload: "Let's look at your projects"
    //                 }
    //             ]
    //         }
    //     },
    //     [
    //         {
    //             pattern: 'Tell me about your job history',
    //             handler: async function (response, convo, bot) {
    //                 await convo.gotoThread('job-thread');
    //             },
    //         },
    //         {
    //             pattern: "I'd like to know about your work history",
    //             handler: async function (response, convo, bot) {
    //                 await convo.gotoThread('work-thread');
    //             },
    //         },
    //         {
    //             pattern: "Let's look at your projects",
    //             handler: async function (response, convo, bot) {
    //                 await convo.gotoThread('project-thread');
    //             },
    //         },
    //         {
    //             default: true,
    //             handler: async function (response, convo, bot) {
    //                 await convo.gotoThread('bad-response');
    //             },
    //         }
    //     ],
    //     'main', 'default');
    // console.log(convo.script.default);

    // controller.addDialog(convo);
    // console.log(convo.script.basics);

    // controller.hears("qw", 'message', async (bot, message) => {
    //     // await bot.reply(message, `Hello, I'm insert name here`);
    //     // debugger
    //     await bot.beginDialog('resume');
    // });
}
