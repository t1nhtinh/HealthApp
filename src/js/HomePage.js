
function selectPage(){

   var form = document.getElementById("page_select"); //get the form tag
   var accountType = document.getElementById("account_type").value;

   if(accountType == 0){
        alert("Please select the account type");
   }
   else if (accountType == 1) {
        form.action = "#"; //patient
   }
   else if (accountType == 2) {
        form.action = "#"; //Trainer
   }
   else if (accountType == 3) {
        form.action = "./src/html/doctorHome.html"; //doctor
   }

}