// Function to display saved gift cards
function displaySavedGiftCards() {
    const giftCardsContainer = document.getElementById('giftCardsContainer');
    giftCardsContainer.innerHTML = ''; // Clear previous content
    const giftCards = JSON.parse(localStorage.getItem('giftCards')) || [];
    giftCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
      
        cardElement.textContent = `כרטיס מתנה ${index + 1}: ${card.company} - סכום: ${card.amount}, תאריך תפוגה: ${card.expiry}`;
        
      // Function to check if a card has expired
function isCardExpired(expiryDate) {
    const today = new Date();
    const cardExpiry = new Date(expiryDate);
    return today.getTime() > cardExpiry.getTime();
}

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>'; // Edit icon
        editButton.addEventListener('click', () => editGiftCard(index));
        cardElement.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete icon
        deleteButton.addEventListener('click', () => deleteGiftCard(index));
        cardElement.appendChild(deleteButton);

        giftCardsContainer.appendChild(cardElement);
    });
}

// Function to save gift card
function saveGiftCard(company, amount, expiry) {
    let giftCards = JSON.parse(localStorage.getItem('giftCards')) || [];
    giftCards.push({ company, amount: amount + '₪', expiry });
    localStorage.setItem('giftCards', JSON.stringify(giftCards));
    displaySavedGiftCards(); // Update displayed cards
}

// Add event listener to "Save Gift Card" button
document.getElementById('saveGiftCard').addEventListener('click', function() {
    const company = document.getElementById('giftCardCompany').value;
    const amount = document.getElementById('giftCardAmount').value;
    const expiry = document.getElementById('giftCardExpiry').value;
    if (company && amount && expiry) {
        saveGiftCard(company, amount, expiry);
        clearGiftCardForm(); // Clear input fields
        alert('כרטיס מתנה נשמר בהצלחה!');
    } else {
        alert('אנא מלא את כל השדות.');
    }
});

// Function to edit a gift card
function editGiftCard(index) {
    // Retrieve the gift cards from local storage
    let giftCards = JSON.parse(localStorage.getItem('giftCards')) || [];
    // Retrieve the specific gift card to edit
    const cardToEdit = giftCards[index];
    // Use the card data to pre-fill the edit form fields
    document.getElementById('editGiftCompany').value = cardToEdit.company;
    document.getElementById('editGiftAmount').value = cardToEdit.amount;
    document.getElementById('editGiftExpiry').value = cardToEdit.expiry;
    // Save the index of the card being edited to local storage
    localStorage.setItem('editGiftIndex', index);
    // Show the edit modal
    document.getElementById('editGiftModal').style.display = 'block';
}

// Function to delete a gift card
function deleteGiftCard(index) {
    // Retrieve the gift cards from local storage
    let giftCards = JSON.parse(localStorage.getItem('giftCards')) || [];
    // Remove the specified gift card from the array
    giftCards.splice(index, 1);
    // Save the updated gift cards array to local storage
    localStorage.setItem('giftCards', JSON.stringify(giftCards));
    // Re-display the gift cards
    displaySavedGiftCards();
}

// Function to display saved credit cards
function displaySavedCreditCards() {
    const creditCardsContainer = document.getElementById('creditCardsContainer');
    creditCardsContainer.innerHTML = ''; // Clear previous content
    const creditCards = JSON.parse(localStorage.getItem('creditCards')) || [];
    creditCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = `כרטיס אשראי ${index + 1}: ${card.company} - סוג: ${card.type}, תאריך תפוגה: ${card.expiry}`;
        
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>'; // Edit icon
        editButton.addEventListener('click', () => editCreditCard(index));
        cardElement.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete icon
        deleteButton.addEventListener('click', () => deleteCreditCard(index));
        cardElement.appendChild(deleteButton);

        creditCardsContainer.appendChild(cardElement);
    });
}
// Function to save credit card
function saveCreditCard(company, type, expiry) {
    let creditCards = JSON.parse(localStorage.getItem('creditCards')) || [];
    creditCards.push({ company, type, expiry });
    localStorage.setItem('creditCards', JSON.stringify(creditCards));
    displaySavedCreditCards(); // Update displayed cards
}

// Add event listener to "Save Credit Card" button
document.getElementById('saveCreditCard').addEventListener('click', function() {
    const company = document.getElementById('creditCardCompany').value;
    const type = document.getElementById('creditCardType').value;
    const expiry = document.getElementById('creditCardExpiry').value;
    if (company && type && expiry) {
        saveCreditCard(company, type, expiry);
        clearCreditCardForm(); // Clear input fields
        alert('כרטיס אשראי נשמר בהצלחה!');
    } else {
        alert('אנא מלא את כל השדות.');
    }
});

// Function to edit a credit card
function editCreditCard(index) {
    // Retrieve the credit cards from local storage
    let creditCards = JSON.parse(localStorage.getItem('creditCards')) || [];
    // Retrieve the specific credit card to edit
    const cardToEdit = creditCards[index];
    // Use the card data to pre-fill the edit form fields
    document.getElementById('editCreditCompany').value = cardToEdit.company;
    document.getElementById('editCreditType').value = cardToEdit.type;
    document.getElementById('editCreditExpiry').value = cardToEdit.expiry;
    // Save the index of the card being edited to local storage
    localStorage.setItem('editCreditIndex', index);
    // Show the edit modal
    document.getElementById('editCreditModal').style.display = 'block';
}

// Function to delete a credit card
function deleteCreditCard(index) {
    // Retrieve the credit cards from local storage
    let creditCards = JSON.parse(localStorage.getItem('creditCards')) || [];
    // Remove the specified credit card from the array
    creditCards.splice(index, 1);
    // Save the updated credit cards array to local storage
    localStorage.setItem('creditCards', JSON.stringify(creditCards));
    // Re-display the credit cards
    displaySavedCreditCards();
}

// Function to display saved clubs
function displaySavedClubs() {
    const clubsContainer = document.getElementById('clubsContainer');
    clubsContainer.innerHTML = ''; // Clear previous content
    const clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    clubs.forEach((club, index) => {
        const clubElement = document.createElement('div');
        clubElement.classList.add('card');
        clubElement.textContent = `מועדון ${index + 1}: ${club.company} - תאריך התחלה: ${club.startDate}`;
        
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>'; // Edit icon
        editButton.addEventListener('click', () => editClub(index));
        clubElement.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete icon
        deleteButton.addEventListener('click', () => deleteClub(index));
        clubElement.appendChild(deleteButton);

        clubsContainer.appendChild(clubElement);
    });
}
// Function to save club
function saveClub(company, startDate) {
    let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    clubs.push({ company, startDate });
    localStorage.setItem('clubs', JSON.stringify(clubs));
    displaySavedClubs(); // Update displayed clubs
}

// Add event listener to "Save Club" button
document.getElementById('saveClub').addEventListener('click', function() {
    const company = document.getElementById('clubCompany').value;
    const startDate = document.getElementById('clubStartDate').value;
    if (company && startDate) {
        saveClub(company, startDate);
        clearClubForm(); // Clear input fields
        alert('מועדון נשמר בהצלחה!');
    } else {
        alert('אנא מלא את כל השדות.');
    }
});

// Function to edit a club
function editClub(index) {
    // Retrieve the clubs from local storage
    let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    // Retrieve the specific club to edit
    const clubToEdit = clubs[index];
    // Use the club data to pre-fill the edit form fields
    document.getElementById('editClubCompany').value = clubToEdit.company;
    document.getElementById('editClubStartDate').value = clubToEdit.startDate;
    // Save the index of the club being edited to local storage
    localStorage.setItem('editClubIndex', index);
    // Show the edit modal
    document.getElementById('editClubModal').style.display = 'block';
}

// Function to delete a club
function deleteClub(index) {
    // Retrieve the clubs from local storage
    let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    // Remove the specified club from the array
    clubs.splice(index, 1);
    // Save the updated clubs array to local storage
    localStorage.setItem('clubs', JSON.stringify(clubs));
    // Re-display the clubs
    displaySavedClubs();
}

// Function to clear gift card form fields
function clearGiftCardForm() {
    document.getElementById('giftCardCompany').value = '';
    document.getElementById('giftCardAmount').value = '';
    document.getElementById('giftCardExpiry').value = '';
}

// Function to clear credit card form fields
function clearCreditCardForm() {
    document.getElementById('creditCardCompany').value = '';
    document.getElementById('creditCardType').value = '';
    document.getElementById('creditCardExpiry').value = '';
}

// Function to clear club form fields
function clearClubForm() {
    document.getElementById('clubCompany').value = '';
    document.getElementById('clubStartDate').value = '';
}
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the submitCompany button
    document.getElementById('submitCompany').addEventListener('click', function () {
        // Get the selected company from the dropdown
        const companySelect = document.getElementById('companySelect');
        const selectedCompany = companySelect.options[companySelect.selectedIndex].value;

        // Validate if a company is selected
      if (selectedCompany) {
            // Check if there's a matching gift card or club card for the selected company
            const savedGiftCards = JSON.parse(localStorage.getItem('giftCards')) || [];
            const savedClubCards = JSON.parse(localStorage.getItem('clubs')) || [];
            const matchingGiftCard = savedGiftCards.find(card => card.company.toLowerCase() === selectedCompany.toLowerCase());
            const matchingClubCard = savedClubCards.find(card => card.company.toLowerCase() === selectedCompany.toLowerCase());

            // Display a pop-up alert if there's a matching gift card or club card
            if (matchingGiftCard) {
                alert(`Great! You have a gift card for ₪${selectedCompany} with a balance of ${matchingGiftCard.amount}.`);
            } else if (matchingClubCard) {
                alert(`Great! You have a club card for ₪${selectedCompany}.`);
            } else {
                alert(`You don't have any gift card or club card for ₪${selectedCompany}.`);
            }


            // Reset the dropdown to its default option
            companySelect.selectedIndex = 0;
        } else {
            // Show an alert if no company is selected
            alert('Please select a company.');
        }
    });

});

// Display saved cards and clubs on page load
displaySavedGiftCards();
displaySavedCreditCards();
displaySavedClubs();
