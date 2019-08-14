const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section2divs = document.querySelectorAll('#section2 div');
const section1divs = document.querySelectorAll("#section1 div");
const button1 = document.getElementById('button1');

function startingScreen(){
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'none';
    button1.style.display = 'none';
}

function setupSection2 (){
    section2.style.display = 'flex';
    
    for (let i = 0; i < section2divs.length; i++){
        section2divs[i].style.visibility = 'hidden';
        section1divs[i].addEventListener('click', function(){
            section2divs[i].style.visibility = "visible";
            checkAllPressed();
        })
    }
}

function setupSection4(){
    section4.style.display = 'flex';
    const s4Buttons = document.getElementsByClassName('quests');
    const s4Answers = document.getElementsByClassName('answs');
    console.log(s4Answers);
    for (let i = 0; i < s4Buttons.length; i++){
        s4Answers[i].style.visibility = "hidden";
        s4Buttons[i].addEventListener('click', function(){
            s4Answers[i].style.visibility = "visible";
        });
    }
}


function checkAllPressed(){
    if(section2divs[0].style.visibility == "visible" && section2divs[1].style.visibility == "visible" && section2divs[2].style.visibility == "visible" && section2divs[3].style.visibility == "visible" && section2divs[4].style.visibility == "visible"){
        button1.style.display = 'block';
        button1.addEventListener('click', setupSection4);
    }
}



startingScreen();
setupSection2();

