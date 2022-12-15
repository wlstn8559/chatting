//채팅 추가하는 영역
let bodyLine = document.getElementById("body-task");
//전송 버튼
let talkButton = document.getElementById("talk-button");
//전송할 입력창
let talkInput = document.getElementById("talk");

//버튼 이벤트
talkButton.addEventListener("click", addTalk)
//엔터키 이벤트
talkInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTalk();
    }
});



//채팅 저장 배열
let talkList = [];


function addTalk(){
    talkList.push(talkInput.value);
    talkInput.value = "";
    sendTalk();
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function sendTalk(){
    let resultHTML = "";
    for(let i=0; i<talkList.length; i++){
        if(i%2 == 0){
            resultHTML += 
            `<div class="talk-box">
                <div class="talk-true">${talkList[i]}</div>
             </div>`;
        }else{
            resultHTML += 
            `<div class="talk-box">
                <div class="talk-false">${talkList[i]}</div>
             </div>`;
        }
        
    }

    bodyLine.innerHTML = resultHTML;
}

