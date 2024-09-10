<!-- process.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentName = $_POST['studentName'];
    $subject = $_POST['subject'];
    $marks = $_POST['marks'];

    // Example report generation
    echo "<h2>Progress Report</h2>";
    echo "<p><strong>Student Name:</strong> $studentName</p>";
    echo "<p><strong>Subject:</strong> $subject</p>";
    echo "<p><strong>Marks:</strong> $marks</p>";
}
?>
