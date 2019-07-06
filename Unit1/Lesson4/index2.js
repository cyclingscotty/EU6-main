
const tokyoInfo = [
    "With over 13 million people living there, Tokyo is one of the largest cities in the world. It is also the <span class='blue'>capital</span> of Japan. Tokyo is a <span class='blue'>busy</span> and exciting city with many places to see.",
    "With over 13 million people living there, Tokyo is one of the largest cities in the world. It is also the <span class='blue'>capital</span> of Japan. Tokyo is a <span class='blue'>busy</span> and exciting city with many places to see.",
    "Tokyo Tower is very <span class='blue'>similar</span> to the Eiffel Tower in Paris but is nine metres taller. Tokyo Tower is not next to a train station, but you can catch a taxi or walk instead.",
    "Tokyo Tower is very <span class='blue'>similar</span> to the Eiffel Tower in Paris but is nine metres taller. Tokyo Tower is not next to a train station, but you can catch a taxi or walk instead.",
    "Ueno Zoo is Tokyo's most famous zoo. It has over 2,500 animals, including the popular <span class='blue'>giant panda</span>. To get to Ueno Zoo, take the train to Ueno Station and walk for five minutes through Ueno Park.",
    "Ueno Zoo is Tokyo's most famous zoo. It has over 2,500 animals, including the popular <span class='blue'>giant panda</span>. To get to Ueno Zoo, take the train to Ueno Station and walk for five minutes through Ueno Park.",
    "Meiji Shrine <span class='blue'>honours</span> Japan's Emperor Meiji. You can find it inside a forest near Yoyogi Park. To get to Meiji Shrine, take the train to Harajuku Station and walk to the shrine entrance.",
    "Meiji Shrine <span class='blue'>honours</span> Japan's Emperor Meiji. You can find it inside a forest near Yoyogi Park. To get to Meiji Shrine, take the train to Harajuku Station and walk to the shrine entrance.",
    "Shinagawa Aquarium opened in 1991. You can <span class='blue'>observe</span> penguins, sharks, and seals there. To get to the Shinagawa Aquarium, you can ride a free bus from Oimachi Station.",
    "Shinagawa Aquarium opened in 1991. You can <span class='blue'>observe</span> penguins, sharks, and seals there. To get to the Shinagawa Aquarium, you can ride a free bus from Oimachi Station."
];
const tokyoImg = [
    'images/tokyo1.jpg',
    'images/tokyo1.jpg',
    'images/tokyo2.jpg',
    'images/tokyo2.jpg',
    'images/tokyo3.jpg',
    'images/tokyo3.jpg',
    'images/tokyo4.jpg',
    'images/tokyo4.jpg',
    'images/tokyo5.jpg',
    'images/tokyo5.jpg',
]


const tokyoQ = [
    "What is the population of Tokyo?",
    "Tokyo is the capital of...",
    "What makes Tokyo Tower similar to the Eiffel Tower?",
    "Tokyo tower is _____________ than the Eiffel Tower.",
    "After taking the train, how can we get to Ueno Zoo?",
    "How many animals are in Ueno Zoo?",
    "Where can you find the Meiji Shrine?",
    "Who does the Meiji Shrine honour?",
    "What can we observe at Shinagawa Aquarium?",
    "When was Shinagawa Aquarium? opened?"
    
];

const tokyoA = [
    '<form><input type="radio" name="Q1" id="Q1a" value="1">13,000,000 <input type="radio" name="Q1"  id="Q1b" value="2">Greater than 13,000,000 <input type="radio" name="Q1" id="Q1c" value="3">Less than 13,000,000 </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="2">Japan <input type="radio" name="Q1"  id="Q1b" value="1">Korea <input type="radio" name="Q1" id="Q1c" value="3">Canada </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="1">They are both in Japan <input type="radio" name="Q1"  id="Q1b" value="2">It\'s size AND shape <input type="radio" name="Q1" id="Q1c" value="3">It\'s location  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="1">9 metres shorter <input type="radio" name="Q1"  id="Q1b" value="2">9 metres wider <input type="radio" name="Q1" id="Q1c" value="3">9 metres taller </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="1">Catch a taxi for 5 minutes <input type="radio" name="Q1"  id="Q1b" value="3">Walk for 2 minutes <input type="radio" name="Q1" id="Q1c" value="2">Walk for 5 minutes  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="2">More than 2,500 <input type="radio" name="Q1"  id="Q1b" value="3">Exactly 2,500 <input type="radio" name="Q1" id="Q1c" value="1">Almost 2,500  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="2">Near Yoyogo Park <input type="radio" name="Q1"  id="Q1b" value="3">Inside the Forbidden City <input type="radio" name="Q1" id="Q1c" value="1">Outside Yoyogi Park  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="3">Scott <input type="radio" name="Q1"  id="Q1b" value="2">Emperor Meiji <input type="radio" name="Q1" id="Q1c" value="1">Marco Polo  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="3">Penguins and cats <input type="radio" name="Q1"  id="Q1b" value="1">Lions and tigers <input type="radio" name="Q1" id="Q1c" value="2">penguins, sharks and seals  </form>',
    '<form><input type="radio" name="Q1" id="Q1a" value="3">1891 <input type="radio" name="Q1"  id="Q1b" value="1">2001 <input type="radio" name="Q1" id="Q1c" value="2">1991  </form>'
];

let qq=0;
let qt= tokyoA.length;

function askTheQuestions(){
    document.getElementById('checkAnswer').innerText = 'Check';
    document.getElementById('checkAnswer').style.backgroundColor = "orange";
    
document.getElementById('rightBoxP').innerHTML = tokyoInfo[qq];


    document.getElementById('leftBoxImg').src = tokyoImg[qq];

document.getElementById('rightBoxQ').innerHTML = tokyoQ[qq];
document.getElementById('rightBoxA').innerHTML = tokyoA[qq];
    document.getElementById('checkAnswer').addEventListener('click', checkTheAnswer);

}

function checkTheAnswer(event){
    let radioCheck = document.getElementsByTagName('input');
    //let theValue = 0;
    for (i = 0; i < radioCheck.length; i++){
        if(radioCheck[i].type == 'radio' && radioCheck[i].checked){;
        if(radioCheck[i].value == '2'){
            console.log('correct');
            document.getElementById('checkAnswer').removeEventListener('click', checkTheAnswer);
           
            if(qq < (qt-1)){
            document.getElementById('checkAnswer').innerText = 'Next';
            setTimeout(function(){
                document.getElementById('checkAnswer').addEventListener('dblclick', nextQuestion);
            },1000)
            document.getElementById('checkAnswer').style.backgroundColor = "green";
            }else{
                document.getElementById('checkAnswer').style.display = "none";
            }
        } else {
            console.log('incorrect');
            document.getElementById('checkAnswer').style.backgroundColor = "red";
            setTimeout(function(){
                document.getElementById('checkAnswer').style.backgroundColor = "orange";
            },1000)
        }
    }
}

}

function nextQuestion(){
    document.getElementById('checkAnswer').removeEventListener('dblclick', nextQuestion);
    console.log("nextQ");
    qq++;
    askTheQuestions();
}

askTheQuestions();