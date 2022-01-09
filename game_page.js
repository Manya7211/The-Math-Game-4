var question_turn = "player1";
var answer_turn = "player2";
var real_answer = 

function send() {
    get_number1 = document.getElementById("number_1").value;
    get_number2 = document.getElementById("number_2").value;
    question = "<h4 id = 'word_display'>Q: " + get_number1 + "x" + get_number2 + "</h4>";
    input_box = "<br>Your Answer: <input type = 'text' id = 'check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    get_answer = document.getElementById("check_box").value;
    if(get_answer == real_answer) {
        if(answer_turn == player1) {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
}