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

// Array to hold quotes, initialize from local storage if available
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Inspiration" },
  { text: "Believe you can and you're halfway there.", category: "Positivity" }
];

// Function to dynamically populate the category dropdown
function populateCategories() {
  const categoryDropdown = document.getElementById('categoryFilter');
  const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];  // Get unique categories

  // Clear any existing categories in the dropdown
  categoryDropdown.innerHTML = '<option value="all">All Categories</option>';

  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryDropdown.appendChild(option);
  });

  // Restore the last selected category from local storage
  const lastSelectedCategory = localStorage.getItem('lastSelectedCategory');
  if (lastSelectedCategory) {
    categoryDropdown.value = lastSelectedCategory;
    filterQuotes();  // Apply the filter with the last saved selection
  }
}

// Function to filter quotes based on the selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Save the selected category to local storage
  localStorage.setItem('lastSelectedCategory', selectedCategory);

  // Filter quotes
  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  // Clear previous quotes displayed
  quoteDisplay.innerHTML = '';

  // Display filtered quotes
  filteredQuotes.forEach(quote => {
    quoteDisplay.innerHTML += `
      <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #f9f9f9; margin-bottom: 10px;">
        <p style="font-style: italic; font-size: 1.2em;">"${quote.text}"</p>
        <p style="text-align: right; font-weight: bold;">- <span>${quote.category}</span></p>
      </div>
    `;
  });
}

// Function to dynamically create the Add Quote form
function createAddQuoteForm() {
  const formContainer = document.createElement('div');
  
  formContainer.innerHTML = `
    <input id="newQuoteText" type="text" placeholder="Enter new quote" style="margin: 5px 0;" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" style="margin: 5px 0;" />
    <button id="addQuoteButton" style="margin: 5px 0;">Add Quote</button>
  `;

  document.body.appendChild(formContainer);

  // Event listener for the "Add Quote" button
  document.getElementById("addQuoteButton").addEventListener("click", addQuote);
}

// Function to add a new quote dynamically and update web storage with category data
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Save the updated quotes array to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes));

    // Repopulate the categories in case a new category was introduced
    populateCategories();

    document.getElementById("newQuoteText").value = '';  // Clear input fields
    document.getElementById("newQuoteCategory").value = '';
    alert("New quote added successfully!");
  } else {
    alert("Please fill in both the quote text and category.");
  }
}

// Dynamically create the form when the page loads
window.onload = function() {
  createAddQuoteForm();  // Call the function to create the form on page load
  populateCategories();  // Populate categories on load

  // Event listener for the category filter dropdown
  document.getElementById("categoryFilter").addEventListener("change", filterQuotes);
};
