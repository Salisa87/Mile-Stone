// Listing Element 
document.getElementById(`resumeform`)?.addEventListener(`submit`, function(event){
   event.preventDefault();

   //type assertion
   const nameElement = document.getElementById(`name`) as HTMLInputElement;
   const emailElement = document.getElementById(`email`) as HTMLInputElement;
   const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
   const EducationElement = document.getElementById(`Education`) as HTMLInputElement;
   const exprienceElement = document.getElementById(`Exprience`) as HTMLInputElement;
   const skillsElement = document.getElementById(`skills`) as HTMLInputElement;



if (nameElement && emailElement && phoneElement && EducationElement && exprienceElement && skillsElement){

    const name = nameElement.value;
    const  email = emailElement.value
    const  phone = phoneElement.value
    const  Education = EducationElement.value
    const  Exprience = exprienceElement.value
    const  skills = skillsElement.value


}



   // Output
   const resumeoutput = `
   <h2>Resume</h2>
   <p ><strong> Name:</strong> <span id="edit-name" class="editable">${nameElement} </span> </p>
   <p><strong>Email:</strong>  <span id="edit-name" class="editable"> ${emailElement} </p>
   <p><strong>phone Number:</strong>  <span id="edit-name" class="editable"> ${phoneElement} </p>

  
    <h3> Education </h3> 
   <p id="edit-name" class="editable"> ${EducationElement} </p>
    <h3> Exprinece </h3> 
   <p id="edit-name" class="editable"> ${exprienceElement} </p>
   <h3> skills </h3> 
   <p id="edit-skills" class="editable"> ${skillsElement} </p>
   
   `;

   

const resumeoutputElement = document.getElementById('resumeoutput');  
if (resumeoutputElement) {  
   resumeoutputElement.innerHTML = resumeoutput;  // Output the generated resume  
} else {  
   console.error('The resume output element is missing'); // Corrected error message  

}    

   

})



