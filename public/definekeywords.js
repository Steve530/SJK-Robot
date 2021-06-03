function definekeywords(message) {
   // what is your company!  address
   // change words into [ 'what', 'is', 'your', 'company',  'address']

 //注意！！ .text

    let words = message.split(" ").map((word)=>{
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        if (!alphabet.includes(word.slice(-1)))  { 
               word = word.slice(0,-1)
            }
       return word.toLowerCase()
    })
    wordstring = words.join(' ')
    console.log(wordstring)
    let catagary =''
    let secondword = ''
    // check if the message contains catagary keyword!  (\baddress|contact)
    if (/(job|company|work)/.test(wordstring))
      { catagary = 'work'}
    if (/(education|institution|study)/.test(wordstring))
      { catagary = 'education'}
    if (/(coding|stack|skill|programming)/.test(wordstring))
      { catagary = 'skills'}
    if (/(contact|email|phone|social)/.test(wordstring))
      { catagary = 'basics'}




    console.log(catagary)

   //  return catagary + ' ' + secondword;
}
definekeywords('Show worKing/ sklillyou?')
// export default definekeywords;