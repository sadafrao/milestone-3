// script.js

// Generate Resume Functionality
document.getElementById('generateResume').addEventListener('click', function() {
    // Get values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Display the input values in the resume
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayExperience').textContent = experience;

    // Show the resume container
    document.getElementById('resumeContainer').classList.remove('hidden');
});

// Toggle Experience Section
document.getElementById('toggleButton').addEventListener('click', function() {
    const experienceSection = document.getElementById('displayExperienceSection');
    if (experienceSection.classList.contains('hidden')) {
        experienceSection.classList.remove('hidden');
        this.textContent = 'Hide Experience';
    } else {
        experienceSection.classList.add('hidden');
        this.textContent = 'Show Experience';
    }
});
