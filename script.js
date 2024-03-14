document.getElementById('resumeForm').addEventListener('input', updatePreview);

function updatePreview() {
    const personalInfo = {
        name: document.querySelector('input[placeholder="Full Name"]').value,
        email: document.querySelector('input[placeholder="Email"]').value,
        phone: document.querySelector('input[placeholder="Phone Number"]').value
    };
    
    const education = {
        degree: document.querySelector('input[placeholder="Degree"]').value,
        institution: document.querySelector('input[placeholder="Institution"]').value,
        graduationYear: document.querySelector('input[placeholder="Graduation Year"]').value
    };
    
    const workExperience = {
        jobTitle: document.querySelector('input[placeholder="Job Title"]').value,
        company: document.querySelector('input[placeholder="Company Name"]').value,
        duration: document.querySelector('input[placeholder="Duration"]').value
    };
    
    const skills = [
        document.querySelector('input[placeholder="Skill 1"]').value,
        document.querySelector('input[placeholder="Skill 2"]').value,
        document.querySelector('input[placeholder="Skill 3"]').value
    ];
    
    const previewContent = `
        <strong>${personalInfo.name}</strong><br>
        ${personalInfo.email} | ${personalInfo.phone}<br><br>
        
        <h3>Education</h3>
        ${education.degree} - ${education.institution} (${education.graduationYear})<br><br>
        
        <h3>Work Experience</h3>
        ${workExperience.jobTitle} at ${workExperience.company} - ${workExperience.duration}<br><br>
        
        <h3>Skills</h3>
        ${skills.join(', ')}
    `;
    
    document.getElementById('previewContent').innerHTML = previewContent;
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const previewContent = document.getElementById('previewContent').innerText;
    const blob = new Blob([previewContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});