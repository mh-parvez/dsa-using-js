/*
1: Find patten's within a string.
2: Validate user input.
3: Search inside text. 
*/

function regexCheaker(text, regex) {

    const testing = regex.test(text) // true or false
    const index = text.search(regex) // single match
    const matchs = text.match(regex) // all matchs value
    const replaced = text.replace(regex,' 👀 ') // replace with match

    console.log(matchs)
    console.log(index)
    console.log(replaced)
    console.log(testing)
}

const text = `Lorem loreum b ipsum dolor? sit amet consectetur adipisicing #8447493 elit. Sit, modi? Officiis excepturi facilis ? Loremmm, lorem ipsum, dolor sit amet consectetur adipisicing elit. he he!
Deserunt, quod. Loreum ipsummm, \t dolor sit amet consectetur adipisicing elit. Consectetur, autem.lorem Consequatur temporibus lOreM ullam illum, placeat sunt corrupti lorUm lore loremarchitecto. Magnam eius eaque Vedio.lorum he he!`

var regex;
regex = /lorem/ //first-match
regex = /lorem/g //all-matchs
regex = /lorem/gi //case-insensitive

regex = /lorem|lorum/gi //or
regex = /(lorem|lorum) ipsum/gi //groping()

regex = /\w/gi //word-charcter, avoid whitespace, newline and number
regex = /\d/gi //digit
regex = /\s/gi //whiteSpace
regex = /\n/gi //new-line
regex = /\t/gi //tab
regex = /./gi  //anthing other than newline

regex = /\W/gi // without wordCharcter 
regex = /\D/gi // without digit
regex = /\S/gi // without digit

regex = /[aBC]/gi // matchs any charcter of into this []
regex = /[a-z]/g  // matchs any charcter of into this [range]
regex = /[a-f]/g 
regex = /[a-fA-F]/g 
regex = /[^abc]/g // negetion

regex = /loreu?m/g   // 'u?' is here, 'u' in 0 or 1 time
regex = /loreu?m*/gi // 'm*' is here, 'm' in 0 or multiple time
regex = /loreu?m+/gi // 'm+' is here, 'm' in 1 or multiple time

regex = /loreu?m{2}/gi // 'm' 2 time
regex = /loreu?m{1,3}/gi // min 1, max 3

regex = /dolor\?/gi // when you search '?' mark also.
regexCheaker(text, regex)

regex = /^Lorem/gi // identify stating 
regex = /he!$/gi // identify ending 

regex = /he he!$/gim  // gim 'm' means multitine cheaking

