const sentence1 = [
    "person 1   -    person 2",
    "Sally      -    Tim",
    "<span class='pink'>the girls</span>  -    <span class='blue'>the boys</span>"
];

const sentence2 = [
    "If they are doing the same (or similar) activity, we say, '<span class='and'>and</span>.'",
    "If they are doing different activities, we say '<span class='but'>but</span>'",
    "Remember! One person <span class='orange'>has</span> to, <span>but</span> two people <span class='orange'>have</span> to."
];
const sentence3 = [
    "E.g I have to walk home everyday, <span class='and'>and</span> my mother does, too.",
    "Sally has to play the piano every day, <span class='but'>but</span> Tim has to play violin.",
    "The girls <span class='orange'>have</span> to run 5km clockwise, <span class='and'>and</span> the boys <span class='orange'>have</span> to run 5km anti-clockwise. <button id='press'>press me</button>"
]

const special = ["The girls <span class='orange'>have</span> to clean the classroom, <span class='but'>but</span> the boys <span class='orange'>have</span> to clean the toilets."]

function showSentences(x){
    
    let paragraphNoBox = document.getElementById('mainSection');
    let paragraphNo = paragraphNoBox.getElementsByTagName('p');
    console.log(paragraphNo.length);
    showSentenceNo(x);
    function showSentenceNo(x){
        for (let i = 0; i < paragraphNo.length; i++){
        let theSentenceNumber = eval("sentence"+(i+1)); 
            paragraphNo[i].innerHTML = theSentenceNumber[x-1];
            
            if(i == 2 && x == 3){
                document.getElementById('press').addEventListener('click', function(){
                    document.getElementById('press').style.display='none';
                    paragraphNo[2].innerHTML = special[0];
                });
            }
        }
    };
    
function listen(){
    
    document.querySelector('footer').addEventListener('click', function(){
        if(event.target.id === "nextPage"){window.location.href="part1c.html"} else
        if(event.target.tagName === 'BUTTON'){
            showSentences(event.target.innerText);
        }
    });
}    
    
    listen();
    
    
    
        
    }

showSentences(1);
    




       
       
        
        
