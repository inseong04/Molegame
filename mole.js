
var score=0;
var heart=5;
var time=1000;
var currentMole;
var currentMole2;
var touch = 2;
var level = 1;
var str_heart = [];
str_heart[0] = "❤️";
str_heart[1] = "❤️";
str_heart[2] = "❤️";
str_heart[3] = "❤️";
str_heart[4] = "❤️";

function start(){
    document.getElementById('start_button').style.display="none";
    play_audio();
    random_mole();
    game_model();
}
function game_model(){
    var interval = setInterval(function(){
        if (heart == 0){
            clearInterval(interval);
             game_over();
        }   
        if(score % 10 == 0  && score != 0 && score < 30){
            level++;
            document.getElementById('alarm').innerText=level+"단계가 되어 더 빨라집니다!"
            time-=500;
        }
        else if (score >= 30 ){
            document.getElementById('alarm').innerText="3단계가 넘어 두더지가 \n두마리씩 등장합니다! "   
        }
        if(touch == 0 && score < 30){
            print_heart();
            document.getElementById('heart').innerText=str_heart;
            document.getElementsByTagName('td')[currentMole].innerHTML="<td></td>";
            if (level >= 3)
                document.getElementsByTagName('td')[currentMole2].innerHTML="<td></td>";
        }
        else if(touch <2 && score > 30 ){
            print_heart();
            document.getElementById('heart').innerText=str_heart;
            document.getElementsByTagName('td')[currentMole].innerHTML="<td></td>";
            document.getElementsByTagName('td')[currentMole2].innerHTML="<td></td>";
        }
        random_mole(interval);
    }
    ,time)
}
function random_mole(){
    touch=0;
    currentMole = Math.floor(Math.random()*8)+1;
    var this_table = document.getElementsByTagName('td')[currentMole];
    this_table.style.padding= "0px";
    this_table.innerHTML="<img src='image/mole.png' id ='mole' width ='115px' height = '115px' onclick= 'touch_mole()' />";
    if (level >= 3){
        currentMole2 = Math.floor(Math.random()*8)+1;
        while(currentMole == currentMole2) currentMole2 = Math.floor(Math.random()*8)+1;
        var this_table2 = document.getElementsByTagName('td')[currentMole2];
        this_table2.style.padding= "0px";
        this_table2.innerHTML="<img src='image/mole.png' id ='mole2' width ='115px' height = '115px' onclick= 'touch_mole2()' />";     
    }
}
function touch_mole(){
    touch++;
    score++;
    document.getElementById('score').innerText = "Score : "+score;
    var this_table = document.getElementsByTagName('td')[currentMole];
    this_table.style.padding="60px";
    this_table.innerHTML="<td></td>";
}
function touch_mole2(){
    touch++;
    score++;
    document.getElementById('score').innerText = "Score : "+score;
        var this_table2 = document.getElementsByTagName('td')[currentMole2];
        this_table2.style.padding="60px";
        this_table2.innerHTML="<td></td>"; 
}
function play_audio(obj){
    if(obj == 1){
        audio.pause();
    }
    var audio = new Audio('audio/main_audio.mp3');
    audio.volume = 0.25;
    audio.loop = 5;
    audio.play();
}
function game_over(){
    alert("목숨을 모두 잃었습니다... \n당신의 점수는 "+score+"점입니다\n"+"초기화면으로 이동합니다!");
    window.location.href="index.html";
}

var c_str_heart = [];
c_str_heart[0] = "❤️";
c_str_heart[1] = "❤️";
c_str_heart[2] = "❤️";
c_str_heart[3] = "❤️";
c_str_heart[4] = "❤️";

function print_heart(){

    c_str_heart[heart-1] = "💔"
    str_heart = c_str_heart.toString().replaceAll(",","");
    heart--;
}

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}