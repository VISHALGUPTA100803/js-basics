/*var str = "vishal"
let name = "visahl"
const a = 10;
const b = 12;
// constatnt variable cannot be changed
const surname = "gupta"
console.log("ab")
const n = 10;
for(let i =0;i<n;i++)
{
    console.log(i);
}
try{
    if(a>b){
        console.log("a is greater");
    }
    else
    {
        throw new Error("b is greater");
        
    }
}
catch (err) {
    console.log(err)
}
function square(x){
    return x*x
}
console.log(square(10));*/

const cowsay = require("cowsay");
 

const Quote = require('inspirational-quotes');
console.log(Quote.getQuote({ author: false })); // returns quote (text and author)
 // return quote without author
console.log(Quote.getRandomQuote()); 

const cowText = Quote.getQuote();

console.log(cowsay.say({
    text : cowText.text,
    e : "👍",
    T : "❤️ "
}));  







