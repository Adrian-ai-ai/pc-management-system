
// const machineArray =  JSON.parse(localStorage.getItem('entrylistdiv')) ||[
//     [1,3000,'adrian',977436168,'johnbanda@gmail.com','Toshiba satelite pro c650','No display on screen','screws missing from housing','power-adaptor'],[1,3000,'adrian',977436168,'johnbanda@gmail.com','Toshiba satelite pro c650','No display on screen','screws missing from housing','power-adaptor'],[1,3000,'adrian',977436168,'johnbanda@gmail.com','Toshiba satelite pro c650','No display on screen','screws missing from housing','power-adaptor'],[1,3000,'adrian',977436168,'johnbanda@gmail.com','Toshiba satelite pro c650','No display on screen','screws missing from housing','power-adaptor']
   
        

//     ]

//     let row = null;
// //CRUD OPERATION FOR INVENTORY

// // CREATE ENTRY
// function createNewClient(){
//     let formDataEntered = retrieveFormData();
    
//     //let readData = readFromLocalStorage(formDataEntered);
//     console.log(formDataEntered);
//     console.log(machineArray);
// }
// //Retrieve user input from form and push to machineArray
// function retrieveFormData(){
// let newId  = document.getElementById('numb').value;
//     let newJobNo = document.getElementById('job').value;
//     let newClientName = document.getElementById('client-name').value.toLowerCase();
//     let newGender= document.getElementById('gender').value.toLowerCase();
//     let newContact = document.getElementById('contact-num').value.toLowerCase();
//     let newEmail = document.getElementById('email').value.toLowerCase();
//     let newMacDes = document.getElementById('mac-des').value.toLowerCase();
//     let newFauDes = document.getElementById('fault-des').value.toLowerCase();
//     let newInitDamages = document.getElementById('init-damages').value.toLowerCase();
//     // let  newAcc = document.getElementById('acc').value.toLowerCase();
//     let  newAcc =[];
//     let  newDateIn = document.getElementById('date-in').value.toLowerCase();
//     let  newTimeIn = document.getElementById('time-in').value.toLowerCase();
//     let  newDateOut = document.getElementById('date-out').value.toLowerCase();
//     let  newTimeOut = document.getElementById('time-out').value.toLowerCase();
//     let  newDelBy = document.getElementById('del-by').value.toLowerCase();
//     let  newRecBy = document.getElementById('rec-by').value.toLowerCase();
//     let newStatus = document.getElementById('status-drop').value.toLowerCase();
//     let newSerialNumber = document.getElementById('sn').value.toLowerCase();
//     let  newCurrentProgress = document.getElementById('cp').value.toLowerCase();
   

   
//     let newClient =[newId,newJobNo, newClientName,newGender,newContact,newEmail,newMacDes, newFauDes,newInitDamages,newAcc,newDateIn, newTimeIn,newDateOut,newTimeOut,newDelBy,newRecBy,newStatus,newSerialNumber,newCurrentProgress];
    
//      machineArray.push(newClient);
//     localStorage.setItem('entrylistdiv', JSON.stringify(machineArray));
    
//     // document.getElementById('msg').innerText = 'Submission Successfull!';
// }
// //READ
// function insert(){
//    for(i=0;i < machineArray.length; i++){
        
//        let tableBody = document.getElementById('machine-table');
           
//        let row = tableBody.insertRow();
//         let cell1 = row.insertCell(0);
//        let cell2 = row.insertCell(1);
//        let cell3 = row.insertCell(2);
//        let cell4 = row.insertCell(3);
//        let cell5 = row.insertCell(4);
//        let cell6 = row.insertCell(5);
//        let cell7 = row.insertCell(6);
//        let cell8 = row.insertCell(7);
//        let cell9 = row.insertCell(8);
//        let cell10 = row.insertCell(9);
//        let cell11 = row.insertCell(10);
//        let cell12 = row.insertCell(11);
//        let cell13 = row.insertCell(12);
//        let cell14 = row.insertCell(13);
//        let cell15 = row.insertCell(14);
//        let cell16 = row.insertCell(15);
//        let cell17 = row.insertCell(16);
//        let cell18 = row.insertCell(17);
//        let cell19 = row.insertCell(18);
    
   
//        cell1.innerHTML = machineArray[i][0];
//        cell2.innerHTML = machineArray[i][1];
//        cell3.innerHTML = machineArray[i][2];
//        cell4.innerHTML = machineArray[i][3];
//        cell5.innerHTML = machineArray[i][4];
//        cell6.innerHTML = machineArray[i][5];
//        cell7.innerHTML = machineArray[i][6];
//        cell8.innerHTML = machineArray[i][7];
//        cell9.innerHTML = machineArray[i][8];
//        cell10.innerHTML = machineArray[i][9];
//        cell11.innerHTML = machineArray[i][10];
//        cell12.innerHTML = machineArray[i][11];
//        cell13.innerHTML = machineArray[i][12];
//        cell14.innerHTML = machineArray[i][13];
//        cell15.innerHTML = machineArray[i][14];
//        cell16.innerHTML = machineArray[i][15];
//        cell17.innerHTML = machineArray[i][16];
//        cell18.innerHTML = machineArray[i][17];
//        cell19.innerHTML = `<button id ='editbtn'type ='button' onClick='edit(this)'>E</button><button id='removebtn' type ='button' onClick='remove(this)'>D</button>
//        `
       
//    }
   
//    }

// // EDIT
// function edit(td){
//     let entryForm = document.getElementById('entry-form');
//     userTable.style.display='none';
//     entryForm.style.display='block';

//     row=td.parentElement.parentElement;
//     document.getElementById('job').value =row.cells[0].innerHTML;
//     document.getElementById('job').value =row.cells[0].innerHTML;
//     document.getElementById('client-name').value =row.cells[1].innerHTML;
//     document.getElementById('gender').value =row.cells[2].innerHTML;
//     document.getElementById('contact-num').value =row.cells[3].innerHTML;
//     document.getElementById('email').value =row.cells[4].innerHTML;
//     document.getElementById('mac-des').value =row.cells[5].innerHTML;
//     document.getElementById('fault-des').value =row.cells[6].innerHTML;
//     document.getElementById('init-damages').value =row.cells[7].innerHTML;
//     document.getElementById('acc').value =row.cells[8].innerHTML;
//     document.getElementById('date-in').value =row.cells[9].innerHTML;
//     document.getElementById('time-in').value =row.cells[10].innerHTML;
//     document.getElementById('date-out').value =row.cells[11].innerHTML;
//     document.getElementById('time-out').value =row.cells[12].innerHTML;
//     document.getElementById('del-by').value =row.cells[13].innerHTML;
//     document.getElementById('rec-by').value =row.cells[14].innerHTML;
//     document.getElementById('status-drop').value =row.cells[15].innerHTML;
//     document.getElementById('sn').value =row.cells[16].innerHTML;
//     document.getElementById('cp').value =row.cells[17].innerHTML;
    
    
// }
let row=null;
function create(){
    let form= document.getElementById('entry-form');
    form.style.display='block';
    document.getElementById('msg').innerHTML='';
}
// Function to save form data to local storage and display in table
function createNewClient() {
    let id = document.getElementById('numb').value;
    let jobNo = document.getElementById('job').value;
    let clientName = document.getElementById('client-name').value;
    let gender = []
    let genderOps = document.getElementsByName('gender');
    for(let i =0; i < genderOps.length;i++){
        if(genderOps[i].checked){
            gender.push(genderOps[i].value)
        }
        // alert(genderOps[i].value);
    }
    let contactNumber = document.getElementById('contact-num').value;
    let email = document.getElementById('email').value;
    let machineDescription = document.getElementById('mac-des').value;
    let faultDescription = document.getElementById('fault-des').value;
    let initialDamages = document.getElementById('init-damages').value;
    let accessories = [];
    let accessoryCheckboxes = document.getElementsByName('acc');
    for(let i=0;i < accessoryCheckboxes.length;i++){
        if(accessoryCheckboxes[i].checked){
            accessories.push(accessoryCheckboxes[i].value)
        }
        // alert('The Values:' + accessories.toString());
    }
    

    // accessoryCheckboxes.forEach(function (checkbox) {
    //     if (checkbox.checked) {
    //         accessories.push(checkbox.value);
            
    //         console.log(accessories)
           
    //     }
    // });
    let dateIn = document.getElementById('date-in').value;
    let timeIn = document.getElementById('time-in').value;
    let deliveredBy = document.getElementById('del-by').value;
    let receivedBy = document.getElementById('rec-by').value;
    let status = document.getElementById('status-drop').value;
    let serialNumber = document.getElementById('sn').value;
    let currentProgress = document.getElementById('cp').value;

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${jobNo}</td>
        <td>${clientName}</td>
        <td>${gender}</td>
        <td>${contactNumber}</td>
        <td>${email}</td>
        <td>${machineDescription}</td>
        <td>${faultDescription}</td>
        <td>${initialDamages}</td>
        <td>${accessories.join(', ')}</td>
        <td>${dateIn}</td>
        <td>${timeIn}</td>
        <td>${deliveredBy}</td>
        <td>${receivedBy}</td>
        <td>${status}</td>
        <td>${serialNumber}</td>
        <td>${currentProgress}</td>
        <td><button onclick="edit(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button></td>
    `;
    
    
      
    
   

    let form= document.getElementById('entry-form');

    form.style.display='none';
    
    document.getElementById('msg').innerHTML='CLIENT SUBMITTED SUCCESSFULLY!';
   

    let tableBody = document.getElementById('t-body');
    tableBody.appendChild(newRow);

    // Clear form fields after creating entry
    document.getElementById('entry-form').reset();
}
function closeForm(){
     let form= document.getElementById('entry-form');
    form.style.display='none';
     let updateForm= document.getElementById('updateform');
    updateForm.style.display='none';
    document.getElementById('msg').innerHTML='';
}

// Function to delete table row
function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    document.getElementById('msg').innerHTML='CLIENT DELETED SUCCESSFULLY'
}

// Function to insert saved form data on page load
function insert() {
    let formDataJSON = localStorage.getItem('clientinfo');
    if (formDataJSON) {
        let formData = JSON.parse(formDataJSON);
        createTableRow(formData);
    }
}

function edit(td){
    
    let entryForm = document.getElementById('entry-form');
    // userTable.style.display='none';
    entryForm.style.display='none';
    let updateForm = document.getElementById('updateform');
    updateForm.style.display='block'
    document.getElementById('msg').innerHTML='EDIT CLIENT';

    row=td.parentElement.parentElement;
    document.getElementById('unumb').value =row.cells[0].innerHTML;
    document.getElementById('ujob').value =row.cells[1].innerHTML;
    document.getElementById('uclient-name').value =row.cells[2].innerHTML;
    document.getElementsByName('ugender').value =row.cells[3].innerHTML;
    document.getElementById('uemail').value =row.cells[4].innerHTML;
    document.getElementById('ucontact-num').value =row.cells[5].innerHTML;
    
    document.getElementById('umac-des').value =row.cells[6].innerHTML;
    document.getElementById('ufault-des').value =row.cells[7].innerHTML;
    document.getElementById('uinit-damages').value =row.cells[8].innerHTML;
    document.getElementsByName('uacc').value =row.cells[9].innerHTML;

    document.getElementById('udate-in').value =row.cells[10].innerHTML;
    document.getElementById('utime-in').value =row.cells[11].innerHTML;
    
    document.getElementById('udel-by').value =row.cells[13].innerHTML;
    document.getElementById('urec-by').value =row.cells[14].innerHTML;
    document.getElementById('ustatus-drop').value =row.cells[15].innerHTML;
    document.getElementById('usn').value =row.cells[16].innerHTML;
    document.getElementById('ucp').value =row.cells[17].innerHTML;
    
    
}
function update(){

    let entryForm = document.getElementById('entry-form');
    // userTable.style.display='none';
    entryForm.style.display='none';
    let updateForm = document.getElementById('updateform');
    updateForm.style.display='none'
    document.getElementById('msg').innerHTML='CLIENT UPDATED SUCCESSFULLY';

    row.cells[0].innerHTML = document.getElementById('unumb').value;
    row.cells[1].innerHTML = document.getElementById('job').value;
    row.cells[2].innerHTML = document.getElementById('uclient-name').value;
    row.cells[3].innerHTML = document.getElementById('ugender').value;
    row.cells[4].innerHTML = document.getElementById('ucontact-num').value;
    row.cells[5].innerHTML = document.getElementById('uemail').value;
    row.cells[6].innerHTML = document.getElementById('umac-des').value;
    row.cells[7].innerHTML = document.getElementById('ufault-des').value;
    row.cells[8].innerHTML = document.getElementById('uinit-damages').value;
    row.cells[9].innerHTML = document.getElementById('uacc').value;
    row.cells[10].innerHTML = document.getElementById('udate-in').value;
    row.cells[11].innerHTML = document.getElementById('utime-in').value;
    
    row.cells[13].innerHTML = document.getElementById('udel-by').value;
    row.cells[14].innerHTML = document.getElementById('urec-by').value;
    row.cells[15].innerHTML = document.getElementById('ustatus-drop').value;
    row.cells[16].innerHTML = document.getElementById('usn').value;
    row.cells[17].innerHTML = document.getElementById('ucp').value;

    row =null;

    document.getElementById('updateform').reset();
    updateForm.style.display='none';
   
}