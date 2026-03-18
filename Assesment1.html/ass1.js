let students = [];

function clearInputFields() {
    document.getElementById("name").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
}

function renderTable(studentList, title) {
    if (studentList.length === 0) return `<p style="text-align:center;color:#777;">No students in this category</p>`;

    let html = `<h3>${title}</h3><table><thead><tr>
        <th>Name</th><th>Roll</th><th>Math</th><th>Science</th><th>English</th><th>Total</th><th>Avg</th>
    </tr></thead><tbody>`;

    for (let s of studentList) {
        html += `<tr>
            <td>${s.name}</td><td>${s.rollNo}</td><td>${s.math}</td>
            <td>${s.science}</td><td>${s.english}</td><td>${s.total}</td>
            <td>${s.average.toFixed(2)}</td>
        </tr>`;
    }
    html += `</tbody></table>`;
    return html;
}

function addStudent() {
    // 1. Read all input values
    let name    = document.getElementById("name").value.trim();
    let rollNo  = document.getElementById("rollNo").value.trim();
    let math    = parseFloat(document.getElementById("math").value);
    let science = parseFloat(document.getElementById("science").value);
    let english = parseFloat(document.getElementById("english").value);

    // 2. Basic validation
    if (!name || !rollNo || isNaN(math) || isNaN(science) || isNaN(english)) {
        alert("Please fill all fields correctly!");
        return;
    }
    if (math < 0 || math > 100 || science < 0 || science > 100 || english < 0 || english > 100) {
        alert("Marks must be 0–100!");
        return;
    }

    // 3. Calculate total & average
    let total = math + science + english;
    let avg = total / 3;

    // 4. Create student object
    let student = {
        name: name,
        rollNo: rollNo,
        math: math,
        science: science,
        english: english,
        total: total,
        average: avg
    };

    // 5. Save to array
    students.push(student);

    // 6. Clean form & show success
    clearInputFields();
    document.getElementById("output-title").textContent = "Success!";
    document.getElementById("output").innerHTML = 
        `<div style="background:#d4edda; padding:15px; border-radius:8px; text-align:center;">
            Added <b>${name}</b> (Roll ${rollNo}) — Avg: ${avg.toFixed(2)}
        </div>`;
}

// Show all students in table
function displayAllStudents() {
    document.getElementById("output-title").textContent = "All Students";
    document.getElementById("output").innerHTML = renderTable(students, "Student List");
}

// Sum of all marks of all students
function calculateTotalMarks() {
    let sum = 0;
    for (let s of students) sum += s.total;
    document.getElementById("output-title").textContent = "Total Marks";
    document.getElementById("output").innerHTML = 
        `<div style="text-align:center; font-size:2rem; padding:30px;">
            <b style="color:#fd7e14;">${sum}</b><br><small>All subjects • All students</small>
        </div>`;
}

// Average marks per student in the class
function calculateAverageMarks() {
    if (students.length === 0) {
        document.getElementById("output").innerHTML = "<p>No students yet</p>";
        return;
    }
    let sum = 0;
    for (let s of students) sum += s.total;
    let classAvg = sum / (students.length * 3);
    document.getElementById("output-title").textContent = "Class Average";
    document.getElementById("output").innerHTML = 
        `<div style="text-align:center; font-size:2rem; padding:30px;">
            <b style="color:#6f42c1;">${classAvg.toFixed(2)}</b><br><small>Per student</small>
        </div>`;
}

// Show only students with average > 80
function showHighAverage() {
    let good = students.filter(s => s.average > 80);
    document.getElementById("output-title").textContent = "High Achievers (Avg > 80)";
    document.getElementById("output").innerHTML = renderTable(good, "Outstanding Performance");
}

// Show students who failed (average < 40)
function showFailedStudents() {
    let failed = students.filter(s => s.average < 40);
    document.getElementById("output-title").textContent = "Failed Students (Avg < 40)";
    document.getElementById("output").innerHTML = renderTable(failed, "Needs Improvement");
}

// Just show the count
function countTotalStudents() {
    document.getElementById("output-title").textContent = "Total Students";
    document.getElementById("output").innerHTML = 
        `<div style="text-align:center; font-size:4rem; padding:40px; color:#007bff;">
            ${students.length}
        </div>`;
}

// Delete everything (with confirmation)
function clearAllData() {
    if (confirm("Delete ALL students?")) {
        students = [];
        document.getElementById("output").innerHTML = 
            `<div style="background:#f8d7da; padding:15px; text-align:center; border-radius:8px;">
                All data cleared.
            </div>`;
    }
}      