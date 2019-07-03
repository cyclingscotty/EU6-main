document.querySelector('body').addEventListener('click', function(){
    if(event.target.className == "vehicleType"){
        whichVehicle(event);
       
    }
})

function whichVehicle(event){
    let vehicleType = event.target.id;
    window.location.href=vehicleType+'2.html';
}