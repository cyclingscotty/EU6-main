document.querySelector('body').addEventListener('click', function(){
    if(event.target.className == "vehicleType"){
        whichVehicle(event);
       
    }
})

document.querySelector('#nextPageButton').addEventListener('click', function(){
               window.location.href="index2.html";
               });

function whichVehicle(event){
    let vehicleType = event.target.id;
    window.location.href=vehicleType+'.html';
}