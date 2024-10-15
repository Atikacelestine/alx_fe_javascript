//Array to hold quotes

const quotes=[
    {text: "The only way to do good work is to love what you do and see it in a better light", category:"Motivation"
    },
    {text:"Success is not the final,failure is not the end of hope .It is te courage to face things and do you're best to find solution",category:"Inspiration"},
    {text:"Believe you can and you are almost there it just a matter of time",category:"Positivity"}
];

//Display random Quotes 
function showRandomQuote(){
    const quoteDisplay= document.getElementById("quoteDisplay");

const randomIndex= Math.floor(Math.random()* quotes.length);
const quote= quotes[randomIndex];
quoteDisplay.innerHtml =`<p>${quote text}</p><p><strong>Category</strong>${quote.category}</p>`;

}
