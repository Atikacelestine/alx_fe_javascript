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
quoteDisplay.innerHtml =` <div style= "border: 1px solid #ccc;
padding:10px; border-radius: 5px;
background-color:#f9f9f9;">
<p style="text-align:right;
font-weight:bold;">- <span>$ {quote.category}</span></p>
</div>
`;
    //clear previous quotes
    randomQuote.innerHTML="";
}
//Event Listener for the show New Quote Button 
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

//function to add new quote dynamically
function createaddQuoteForm() {
    const newQuoteText= document.getElementById("newQuoteCategory").value;
    if(newQuoteText && newQuoteCategory) {
        quotes:push({ text :newQuoteText, category: newQuoteCategory});
        document.getElementById("newQuoteText").value-"";//Clear input fields

        document.getElementById("newQuoteCategory").value="";
        alert("New quote adde successfully!");
    }else{
        alert("Please fill i both the quote text and category.");
    }
}
//Event listener for the Add quote button
document.getElementById("CreateaddQuoteButton").addEventListener("click",addQuote);
}
