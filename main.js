let options = [];
let votes = {};

// functions to display/hide user/admin interfaces
function showUserInterface() {
    hideAllInterfaces();
    document.getElementById("user-interface").classList.remove("d-none");
}

function showAdminInterface() {
    hideAllInterfaces();
    document.getElementById("admin-interface").classList.remove("d-none");
}

function hideAllInterfaces() {
    document.getElementById("user-interface").classList.add("d-none");
    document.getElementById("admin-interface").classList.add("d-none");
}

// Function to add a new option (Admin Interface)
function addOption() {
    // Open the add option modal
    $("#addOptionModal").modal("show");
}

// Function to create a new vote option (Admin Interface)
function createVoteOption(option) {
    if (!options.includes(option)) {
        options.push(option);
        votes[option] = 0;
    } else {
        console.log(`Option '${option}' already exists.`);
    }
}

// Function to add an option when the modal's "Add Option" button is clicked (Admin Interface)
function addOptionConfirm() {
    const newOption = document.getElementById("newOptionInput").value;
    if (newOption.trim() !== "") {
        createVoteOption(newOption);
        console.log(`New option '${newOption}' added.`);
        // Clear the input field
        newOptionInput.value = "";
        // Close the add option modal
        $("#addOptionModal").modal("hide");
    }
}

// Function to populate the select menu in the html delete modal 
function populateDeleteOptionSelect() {
    const selectElement = document.getElementById("deleteOptionSelect");

    // Clear existing options
    selectElement.innerHTML = "";

    // Add options to the select element
    for (const option of options) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    }
}

function deleteOption() {
    // Populate the select element in the delete option modal
    populateDeleteOptionSelect();
    // Show the delete option modal
    $("#deleteOptionModal").modal("show");
}

// function to delete vote option from option array
function deleteVoteOption(option) {
    const index = options.indexOf(option);
    if (index !== -1) {
        options.splice(index, 1);
        delete votes[option];
        console.log(`Vote option '${option}' deleted.`);
    } else {
        console.log(`Vote option '${option}' does not exist.`);
    }
}

// Function to handle delete
function deleteSelectedOption() {
    const selectedOption = document.getElementById("deleteOptionSelect").value;
    if (selectedOption) {
        // Delete the vote option
        deleteVoteOption(selectedOption);
        // Hide the delete option modal
        $("#deleteOptionModal").modal("hide");
    }
}

// Function to show the modal for browsing votes
function browseVotes() {
    const browseVotesModalBody = document.getElementById("browseVotesModalBody");

    // Clear existing content
    browseVotesModalBody.innerHTML = "";

    // Create a select menu for existing options
    const selectMenu = document.createElement("select");
    selectMenu.classList.add("form-select", "mb-2");
    selectMenu.id = "browseVotesSelect";

    // Add options to the select menu
    for (const option of options) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectMenu.appendChild(optionElement);
    }

    // Create "Vote" button
    const voteButton = document.createElement("button");
    voteButton.type = "button";
    voteButton.classList.add("btn", "btn-success", "mb-2");
    voteButton.textContent = "Äänestä";
    voteButton.addEventListener("click", voteForSelectedOption);

    // Create "View Votes" button
    const viewVotesButton = document.createElement("button");
    viewVotesButton.type = "button";
    viewVotesButton.classList.add("btn", "btn-info", "ml-2", "mb-2");
    viewVotesButton.textContent = "Näytä äänestystilanne";
    viewVotesButton.addEventListener("click", viewVotes);

    // Append elements to the modal body
    browseVotesModalBody.appendChild(selectMenu);
    browseVotesModalBody.appendChild(voteButton);
    browseVotesModalBody.appendChild(viewVotesButton);

    // Open the Browse Votes modal
    $("#browseVotesModal").modal("show");
}

// Function to handle voting for the selected option
function voteForSelectedOption() {
    const selectedOption = document.getElementById("browseVotesSelect").value;

    // Increment the vote count for the selected option
    if (selectedOption && votes.hasOwnProperty(selectedOption)) {
        votes[selectedOption]++;
        console.log(`Vote for option '${selectedOption}' recorded.`);
    } else {
        console.log("Invalid option selected.");
    }

    // Close the Browse Votes modal
    $("#browseVotesModal").modal("hide");
}


// Function to handle choosing a vote
function chooseVote() {
    // Open the Choose Vote modal
    $("#chooseVoteModal").modal("show");
}

// Function to view all votes
function viewVotes() {
    console.log("Viewing all votes:");
    for (const option in votes) {
        console.log(`Option: ${option} - Votes: ${votes[option]}`);
    }
    // creating modal and table for viewing options and votes
    const viewVotesModalBody = document.getElementById("viewVotesModalBody");

    // Clear existing content
    viewVotesModalBody.innerHTML = "";

    // Check if there are any votes
    if (Object.keys(votes).length === 0) {
        viewVotesModalBody.innerHTML = "<p>Äänestysvaihtoehtoja ei ole käytettävissä.</p>";
    } else {
        // Create a table to display votes
        const table = document.createElement("table");
        table.classList.add("table");

        // Create table header
        const headerRow = table.createTHead().insertRow(0);
        const optionHeader = headerRow.insertCell(0);
        const votesHeader = headerRow.insertCell(1);
        optionHeader.textContent = "Äänestysvaihtoehto";
        votesHeader.textContent = "Äänet";

        // Create table body
        const tbody = table.createTBody();

        // Populate table rows with votes
        for (const option in votes) {
            const row = tbody.insertRow();
            const optionCell = row.insertCell(0);
            const votesCell = row.insertCell(1);
            optionCell.textContent = option;
            votesCell.textContent = votes[option];
        }

        // Append the table to the modal body
        viewVotesModalBody.appendChild(table);
    }

    // Open the view votes modal
    $("#viewVotesModal").modal("show");
}