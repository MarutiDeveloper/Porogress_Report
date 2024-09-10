// script.js
document.getElementById('reportForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get input values
    let studentName = document.getElementById('studentName').value;
    let subject = document.getElementById('subject').value;
    let marks = document.getElementById('marks').value;

    // Generate and display the progress report
    let report = `<h2>Progress Report</h2>
                  <p><strong>Student Name:</strong> ${studentName}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Marks:</strong> ${marks}</p>`;
    
    document.getElementById('progressReport').innerHTML = report;
});
