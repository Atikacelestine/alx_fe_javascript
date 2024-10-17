//Array to hold quotes

const quotes=[
    {text: "The only way to do good work is to love what you do and see it in a better light", category:"Motivation"
    },
    {text:"Success is not the final,failure is not the end of hope .It is te courage to face things and do you're best to find solution",category:"Inspiration"},
    {text:"Believe you can and you are almost there it just a matter of time",category:"Positivity"}
];

//Array to hold quotes,initialize them from the local storage when available
let quotes= 
    JSON>parse(localStorage.getItem('quotes)) ||[
                                    {text:"The only way to do good work is to love what you do.",category:"Motivation"},
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

//Save the last viewed quote in your session
    sessionStorage.setItem('lastQuote',JSON.stringify(quote));
    //clear previous quotes
    randomQuote.innerHTML="";
}
//Event Listener for the show New Quote Button 
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

//function to add new quote dynamically
function createAddQuoteForm() {
    const newQuoteText= document.getElementById("newQuoteCategory").value;
    if(newQuoteText && newQuoteCategory) {
        quotes:push({ text :newQuoteText, category: newQuoteCategory});
        document.getElementById("newQuoteText").value="";//Clear input fields

        document.getElementById("newQuoteCategory").value="";
        alert("New quote adde successfully!");
    }else{
        alert("Please fill i both the quote text and category.");
    }
    document.body.appendChild(createElement);

    //Save the updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));
}
//Event listener for the Add quote button
document.getElementById("CreateaddQuoteButton").addEventListener("click",addQuote);
}
//Dynamically create the form when the page loads
window.onload=fnction(){
createAddQuoteForm();
    const lastQuote=
        JSON.parse(sessionStorage.getItem('last Quote'));
    if(lastQuote){
        const quoteDisplay=document.getElementById("quoteDisplay");
        quoteDisplay.innerHTML= `
        <div style="border: 1px solid #ccc;
        </div>
        }
        };

// Function to export quotes array to a JSON file
function exportQuotesToJson() {
  const dataStr = JSON.stringify(quotes);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'quotes.json';
  downloadLink.click();

  URL.revokeObjectURL(url); // Clean up the URL after the download
}

// Add Export Button
const exportButton = document.createElement('button');
exportButton.textContent = "Export Quotes to JSON";
exportButton.addEventListener('click', exportQuotesToJson);
document.body.appendChild(exportButton);
        
 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
