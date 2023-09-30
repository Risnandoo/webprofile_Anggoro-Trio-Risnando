//navbar
function toggleNav() {
    const nav = document.getElementById("myNav");
    const isOpen = nav.style.width === "250px";
    nav.style.width = isOpen ? "0" : "250px";
}

//darkmode
const body = document.body;
const modeIcon = document.getElementById('mode-icon');

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
});

function setDarkMode(isDark) {
    body.classList.toggle('dark-mode', isDark);
    modeIcon.classList.toggle('fa-moon', !isDark);
    modeIcon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('darkMode', isDark);
}

function toggleDarkMode() {
    setDarkMode(!body.classList.contains('dark-mode'));
}

//download CV
function downloadCV() {
    const cvUrl = 'https://drive.google.com/file/d/1EqoU0E1gTOQ_2rsTrWU6x8KBoRltn6mH/view?usp=sharing';

    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.target = '_blank';
    downloadLink.download = 'Anggoro_Trio_Risnando_CV.pdf';

    downloadLink.click();
}


//buka Folder career
var folderStatus = {};

function toggleDescription(folderName) {
    var description = document.getElementById(folderName + "Description");
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = 'block';
        folderStatus[folderName] = 'open';
    } else {
        description.style.display = 'none';
        folderStatus[folderName] = 'closed';
    }
    
    localStorage.setItem('folderStatus', JSON.stringify(folderStatus));
}

window.onload = function() {
    folderStatus = JSON.parse(localStorage.getItem('folderStatus')) || {};

    for (var folderName in folderStatus) {
        if (folderStatus[folderName] === 'open') {
            document.getElementById(folderName + 'Description').style.display = 'block';
        }
    }
};