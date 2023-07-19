function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    member.style.display = "block";
    skills.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#2ECC71";
}