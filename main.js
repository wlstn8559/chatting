//회원가입 버튼
let signInButton = document.getElementById("signIn-button");
//확인 버튼
let okButton = document.getElementById("ok-button");
// 로그인과 회원가입이 뜨는 자리
let loginText = document.getElementById("login-text");
//아이디 입력창
let idText = document.getElementById("profile-id");
//비밀번호 입력창
let pwText = document.getElementById("profile-pw");
//회원가입 버튼 눌렀는지 확인
let isProfile = false;


//버튼 이벤트
signInButton.addEventListener("click", signIn);
okButton.addEventListener("click", okB);

//엔터키 이벤트
pwText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      okB();
    }
});

//회원 정보 배열
let profile = [];

//회원가입 버튼 눌렀을때
function signIn(){
    isProfile = true;

    //로그인 글자를 회원가입으로 바꾸고 사이즈 조정
    loginText.innerHTML = "회원가입";
    loginText.style.fontSize = "70px";

    //회원가입 버튼 지우기
    signInButton.style.display = 'none';

    //확인버튼 조정
    okButton.style.marginLeft = '90px';
}

//확인 버튼 눌렀을때
function okB(){
    if(isProfile == true){
        //회원 정보 저장
        if(profile.length == 0){
            let profileIn = { id: idText.value, pw: pwText.value };
            profile.push(profileIn);
            isProfile = false;
            alert("회원가입이 성공적으로 완료되었습니다.");
            loginGo();
        }else{
            for(let i=0; i<profile.length; i++){
                if(profile[i].id != idText.value){
                    let profileIn = { id: idText.value, pw: pwText.value };
                    profile.push(profileIn);
                    console.log(profile);
                    isProfile = false;
                    alert("회원가입이 성공적으로 완료되었습니다.");
                    loginGo();
                }else{
                    alert("중복되는 아이디 입니다.");
                }
            }
        }
    }else{
        if(profile.length == 0){
            alert("회원가입 하세유~")
        }
        for(let i=0; i<profile.length; i++){
            if(profile[i].id == idText.value && profile[i].pw == pwText.value){
                //로그인 완료하면 다음 페이지로 넘어간다.
                alert(`환영합니다. '${profile[i].id}'님`)
                window.location.href = 'index.html';
            }else{
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            }
        }
    }
    
}

function loginGo(){
    loginText.innerHTML = "로그인";
    loginText.style.fontSize = "90px";
    signInButton.style.display = 'inline-block';
    okButton.style.marginLeft = '0px';
}