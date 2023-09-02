const validate = (event) => {
    //picking fields
    let FirstName = document.registration.firstname
    let LastName = document.registration.lastname
    let date = document.registration.date
    let gender = document.registration.gender
    let country = document.registration.country
    let state = document.registration.state
    let town = document.registration.town
    let zipcode = document.registration.zipcode
    let phone1 = document.registration.phone1
    let phone2 = document.registration.phone2
    let email = document.registration.email


    


    //picking error fields
    let firstNameError = document.getElementById("firstname-error")
    let lastNameError = document.getElementById("lastname-error")
    let dateError = document.getElementById("date-error");
    let genderError = document.getElementById("gender-error");
    let countryError = document.getElementById("country-error");
    let stateError = document.getElementById("state-error");
    let townError = document.getElementById("town-error");
    let zipcodeError = document.getElementById("zip-error");
    let phone1Error = document.getElementById("phone1-error");
    let phone2Error = document.getElementById("phone2-error");
    let emailError = document.getElementById("email-error");

    

    let error=0;

    //validating for first name
    if(FirstName.value ==""){
        FirstName.style.border = "2px solid red";
        firstNameError.textContent = "first name is required";
        firstNameError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
        FirstName.focus();
        error++;
        return false
     }
     
     else if (FirstName.value.length <2 ){
         FirstName.style.border = "2px solid red";
         firstNameError.textContent = "First name must be at least 2 characters";
         firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
         FirstName.focus();
         error++;
         return false
     }
     else if (FirstName.value.length >255){
         FirstName.style.border = "1px solid red";
         firstNameError.textContent = "First name must no be greater than 255 characters";
         firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
         FirstName.focus();
         error++;
         return false
     }else if (!/^[A-Z][a-zA-Z]*$/.test(FirstName.value)) {
         FirstName.style.border = "2px solid red";
         firstNameError.textContent = "First name should start with a capital letter and contain only alphabetic characters";
         firstNameError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
         FirstName.focus();
         error++;
         return false
     }else{
         FirstName.style.border = "1px solid green";
         firstNameError.textContent = "";
         LastName.focus(); 
     }

     if (LastName.value == "") {
        LastName.style.border = "1px solid red";
        lastNameError.textContent = "Last name is required";
        lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        LastName.focus();
        error++;
        return false
      } else if (!/^[A-Z][a-zA-Z]*$/.test(LastName.value)) {
        LastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name should start with a capital letter and contain only alphabetic characters";
        lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        LastName.focus();
        error++;
        return false
      }
      else if (LastName.value.length < 2) {
        LastName.style.border = "2px solid red";
        lastNameError.textContent = "First name must be at least 2 characters";
        lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        LastName.focus();
        error++;
        return false
      }
      else if (LastName.value.length > 255) {
        LastName.style.border = "1px solid red";
        lastNameError.textContent = "First name must no be greater than 255 characters";
        lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        LastName.focus();
        error++;
        return false
      }
      else {
        LastName.style.border = "1px solid green";
        lastNameError.textContent = "";
        LastName.focus();
      }

      if (date.value.trim() === "") {
        date.style.border = "1px solid red";
        dateError.textContent = "Date is required";
        dateError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        date.focus();
        error++;
        return false;
      } else {
        date.style.border = "1px solid green";
        dateError.textContent = "";
      }


      if (phone1.value.trim() === "") {
        phone1.style.border = "1px solid red";
        phone1Error.textContent = "phone1 is required";
        phone1Error.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        phone1.focus();
        error++;
      } else {
        phone1.style.border = "1px solid green";
        phone1Error.textContent = "";
      }

      if (phone2.value.trim() === "") {
        phone2.style.border = "1px solid red";
        phone2Error.textContent = "phone2 is required";
        phone2Error.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        phone2.focus();
        error++;
        return false
      } else {
        phone2.style.border = "1px solid green";
        phone2Error.textContent = "";
      }

      if (email.value.trim() === "") {
        email.style.border = "1px solid red";
        emailError.textContent = "email is required";
        emailError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        email.focus();
        error++;
        return false
      } else {
        email.style.border = "1px solid green";
        emailError.textContent = "";
      }
    
      if(gender.value === "") {
        gender.style.border = "1px solid red";
        genderError.textContent = "Please select a gender";
        genderError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        gender.focus();
        error++;
        return false
      } else {
        gender.style.border = "1px solid green";
        genderError.textContent = "";
      }

      if(country.value ==""){
        country.style.border = "2px solid red";
        countryError.textContent = "country is required";
        countryError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
        country.focus();
        error++;
        return false
     }
     
     else if (country.value.length <2 ){
         country.style.border = "2px solid red";
         countryError.textContent = "country must be at least 2 characters";
         countryError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
         country.focus();
         error++;
         return false
     }
     else if (country.value.length >255){
         country.style.border = "1px solid red";
         countryError.textContent = "country must no be greater than 255 characters";
         countryError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
         country.focus();
         error++;
         return false
     }else if (!/^[A-Z][a-zA-Z]*$/.test(country.value)) {
         country.style.border = "2px solid red";
         countryError.textContent = "country should start with a capital letter and contain only alphabetic characters";
         countryError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
         country.focus();
         error++;
         return false
     }else{
         country.style.border = "1px solid green";
         countryError.textContent = "";
         LastName.focus(); 
     }

     if(state.value ==""){
      state.style.border = "2px solid red";
      stateError.textContent = "state is required";
      stateError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
      state.focus();
      error++;
      return false
   }
   
   else if (state.value.length <2 ){
       state.style.border = "2px solid red";
       stateError.textContent = "state must be at least 2 characters";
       stateError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
       state.focus();
       error++;
       return false
   }
   else if (state.value.length >255){
       state.style.border = "1px solid red";
       stateError.textContent = "state must no be greater than 255 characters";
       stateError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
       state.focus();
       error++;
       return false
   }else if (!/^[A-Z][a-zA-Z]*$/.test(state.value)) {
       state.style.border = "2px solid red";
       stateError.textContent = "state should start with a capital letter and contain only alphabetic characters";
       stateError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
       state.focus();
       error++;
       return false
   }else{
       state.style.border = "1px solid green";
       stateError.textContent = "";
       LastName.focus(); 
   }

   if(town.value ==""){
    town.style.border = "2px solid red";
    townError.textContent = "town is required";
    townError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
    town.focus();
    error++;
    return false
 }
 
 else if (town.value.length <2 ){
     town.style.border = "2px solid red";
     townError.textContent = "town must be at least 2 characters";
     townError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
     town.focus();
     error++;
     return false
 }
 else if (town.value.length >255){
     town.style.border = "1px solid red";
     townError.textContent = "town must no be greater than 255 characters";
     townError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
     town.focus();
     error++;
     return false
 }else if (!/^[A-Z][a-zA-Z]*$/.test(town.value)) {
     town.style.border = "2px solid red";
     townError.textContent = "town should start with a capital letter and contain only alphabetic characters";
     townError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
     town.focus();
     error++;
     return false
 }else{
     town.style.border = "1px solid green";
     townError.textContent = "";
     LastName.focus(); 
 }


 if(zipcode.value ==""){
  zipcode.style.border = "2px solid red";
  zipcodeError.textContent = "zipcode is required";
  zipcodeError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
  zipcode.focus();
  error++;
  return false
}

else if (zipcode.value.length <2 ){
   zipcode.style.border = "2px solid red";
   zipcodeError.textContent = "zipcode must be at least 2 characters";
   zipcodeError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
   zipcode.focus();
   error++;
   return false
}
else if (zipcode.value.length >255){
   zipcode.style.border = "1px solid red";
   zipcodeError.textContent = "zipcode must no be greater than 255 characters";
   zipcodeError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
   zipcode.focus();
   error++;
   return false
}else{
   zipcode.style.border = "1px solid green";
   zipcodeError.textContent = "";
   LastName.focus(); 
}


      
     if (error > 0) {
        event.preventDefault();
    
      }
}