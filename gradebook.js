// Fetch grade data from the server using the Fetch API
function fetchGradeData() {
    console.log("Fetching grade data...");
    const apiRoute = "http://localhost:5000/api/grades";
    fetch(apiRoute)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not get grades. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            populateGradebook(data);
        })
        .catch(error => {
            console.error("Error fetching grade data:", error);
        });
}

// Populate the table with grade data
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    const tableElm = document.getElementById("gradebook");
    
    data.forEach(assignment => {
        const row = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = `${assignment.last_name}, ${assignment.first_name}`;

        const gradeTd = document.createElement("td");
        gradeTd.textContent = assignment.total_grade;

        row.appendChild(nameTd);
        row.appendChild(gradeTd);
        tableElm.appendChild(row);
    });
}

// Kick off the data fetch process
fetchGradeData();

