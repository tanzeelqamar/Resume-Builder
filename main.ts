const form=document.getElementById('resume-form') as HTMLFormElement;
const generateResumeElement=document.getElementById('generate-resume') as HTMLDivElement;

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const socialMediaAccounts = (document.getElementById('socialMediaAccounts') as HTMLInputElement).value
    const objective = (document.getElementById('objective') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value 

    const getResume=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
     <p><strong> Name: </strong> ${name}</p>
      <p><strong>Email </strong> ${email}</p>
       <p><strong> Contact: </strong> ${contact}</p>
        <p><strong>Social Media Accounts: </strong> ${socialMediaAccounts}</p>
        <h3>Objective</h3>
         <p>${objective}</p>
         <h3>Education </h3>
          <p>${education}</p>
          <h3>Experience</h3>
           <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>`;

            if(generateResumeElement){
                generateResumeElement.innerHTML=getResume;}
            else{
                console.error('The resume Element is missing')
            }
            
})