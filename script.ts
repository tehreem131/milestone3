const form = document.getElementById(`Rasume-form`) as HTMLElement;

form.addEventListener(`submit`, (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById(`name`) as HTMLInputElement).value
    const email = (document.getElementById(`email`) as HTMLInputElement).value
    const phone = (document.getElementById(`phone`) as HTMLInputElement).value
    const Education = (document.getElementById(`Education`) as HTMLInputElement).value
    const Experince = (document.getElementById(`Experince`) as HTMLInputElement).value
    const skills = (document.getElementById(`skills`) as HTMLInputElement).value

    const resumeHTML = `
            <h2><b>Resume</h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b>${name}</p>
            <p><b>email:</b>${email}</p>
            <p><b>phone:</b>${phone}</p>

            <h3>Education</h3>
            <p>${Education}</p>

            <h3>Experince</h3>
            <p>${Experince}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        if (document.getElementById(`Rasume-display`) as HTMLDivElement){
            (document.getElementById(`Rasume-display`) as HTMLDivElement).innerHTML = resumeHTML;
        }else {
            console.error(`The resume display element is missing.`);
            
        }

});
