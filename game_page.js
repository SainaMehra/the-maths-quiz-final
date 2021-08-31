player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+ player2_name;

function send()
{
    num_1=document.getElementById("num1").value;
    num_2=document.getElementById("num2").value;
    product=Number(num_1)*Number(num_2)
    question_tag="<h4 id='word_display'> Question : "+num_1+" X " + num_2 + "</h4> <br>";
    input_tag="Answer: <input id='input_box' class='form-control'> <br> " ;
    button_tag="<button class='btn btn-info' onclick='check()'>Check </button> <br>"
    row= question_tag+input_tag+button_tag ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}
function check() 
{
answer=document.getElementById("input_box").value;
console.log("answer: "+answer);
if(answer==product) {
    if(answer_turn=="player1") {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score; 
    }
}
if(answer_turn=="player1") {
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn-"+ player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn-"+ player1_name;
}
if(question_turn=="player1") {
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question Turn-"+ player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn-"+ player1_name;
}
document.getElementById("output").innerHTML="";
}