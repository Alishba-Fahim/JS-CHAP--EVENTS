var students = [];
var editIndex = -1;

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('student-name').value;
    var age = document.getElementById('student-age').value;
    var grade = document.getElementById('student-grade').value;

    if (editIndex === -1) {
        students.push({ name, age, grade });
    } else {
        students[editIndex] = { name, age, grade };
        editIndex = -1;
    }

    renderTable();
    resetForm();
});

function renderTable() {
    var tbody = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    students.forEach(function(student, index) {
        var row = tbody.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.textContent = student.name;
        cell2.textContent = student.age;
        cell3.textContent = student.grade;
        
        // Edit Button
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function() {
            showEditForm(index);
        };
        cell4.appendChild(editBtn);

        // Delete Button
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            deleteStudent(index);
        };
        cell4.appendChild(deleteBtn);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

function showEditForm(index) {
    var student = students[index];

    document.getElementById('edit-name').value = student.name;
    document.getElementById('edit-age').value = student.age;
    document.getElementById('edit-grade').value = student.grade;

    editIndex = index;
    document.getElementById('edit-form').style.display = 'block';
}

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('edit-name').value;
    var age = document.getElementById('edit-age').value;
    var grade = document.getElementById('edit-grade').value;

    students[editIndex] = { name, age, grade };
    renderTable();
    resetForm();
    document.getElementById('edit-form').style.display = 'none';
});

function resetForm() {
    document.getElementById('student-form').reset();
    document.getElementById('edit-form').reset();
}
