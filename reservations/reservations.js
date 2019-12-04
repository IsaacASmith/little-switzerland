let queryString = window.location.search.substring(1);
let queryPieces = queryString.split("&");

for(let i = 0; i < queryPieces.length; i++){
    let queryName = queryPieces[i].split("=")[0];
    if(queryName === "cabin1"){
        document.getElementsByName("cabin1")[0].checked = true;
    }
    if(queryName === "cabin2"){
        document.getElementsByName("cabin2")[0].checked = true;
    }
    if(queryName === "cabin3"){
        document.getElementsByName("cabin3")[0].checked = true;
    }
    if(queryName === "cabin4"){
        document.getElementsByName("cabin4")[0].checked = true;
    }
    if(queryName === "cabin5"){
        document.getElementsByName("cabin5")[0].checked = true;
    }
}


function submitReservation()
{
    document.getElementById('submit-reservation').style.display = 'none';
    document.getElementById('loading-indicator').style.display = 'block';

    var request = new XMLHttpRequest();
    request.open("POST", "https://switz-email-handler.azurewebsites.net/api/EmailReservation");

    var formData = {
        name: document.getElementsByName('name')[0].value,
        address: document.getElementsByName('address')[0].value,
        cityState: document.getElementsByName('citystate')[0].value,
        zip: document.getElementsByName('zip')[0].value,
        email: document.getElementsByName('email')[0].value,
        phone: document.getElementsByName('phone')[0].value,
        nAdults: document.getElementsByName('adultnumber')[0].value,
        nChildren: document.getElementsByName('childrennumber')[0].value,
        cabin1: document.getElementsByName('cabin1')[0].checked,
        cabin2: document.getElementsByName('cabin2')[0].checked,
        cabin3: document.getElementsByName('cabin3')[0].checked,
        cabin4: document.getElementsByName('cabin4')[0].checked,
        cabin5: document.getElementsByName('cabin5')[0].checked,
        arrivalDate: document.getElementsByName('arrivaldate')[0].value,
        departureDate: document.getElementsByName('departuredate')[0].value,
        petsYes: document.getElementsByName('pets')[0].checked,
        petsNo: document.getElementsByName('pets')[1].checked,
        comments: document.getElementsByName('comments')[0].value,
    }

    request.send(JSON.stringify(formData));

    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            document.getElementById('reservation-form').style.display = 'none';
            document.getElementById('reservation-complete').style.display = 'block';
        }
        else if(request.status === 400){
            document.getElementById('user-error-text').innerHTML = request.responseText;
            document.getElementById('loading-indicator').style.display = 'none';
            document.getElementById('user-error-text').style.display = 'block';
            document.getElementById('submit-reservation').style.display = 'block';
        }
        else if(request.status === 500){
            document.getElementById('loading-indicator').style.display = 'none';
            document.getElementById('server-error-text').style.display = 'block';
            document.getElementById('submit-reservation').style.display = 'block';
        }
    };
}