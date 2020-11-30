(function() {

    const p1s = document.querySelector(".p1s");
    const p2s = document.querySelector(".p2s");
    const winningScore = document.querySelector("p span");
    const input = document.querySelector(".inputScore");
    const p1btn = document.querySelector(".p1btn");
    const p2btn = document.querySelector(".p2btn");
    const resetBtn = document.querySelector(".reset");

    let p1score = 0;
    let p2score = 0;
    let winScore = 1;
    let gameOver = false;

    function winner(oldScore, winScore) {
        if (oldScore === winScore) {

            if (p1score === winScore) {
                p1s.classList.add("green");
            } else {
                p2s.classList.add("green");
            }
            gameOver = true;
            p1btn.setAttribute("disabled", "");
            p2btn.setAttribute("disabled", "");
        }
    }

    function reset() {
        p1score = 0;
        p2score = 0;
        gameOver = false;
        p1s.textContent = 0;
        p2s.textContent = 0;
        p1btn.removeAttribute("disabled", "");
        p2btn.removeAttribute("disabled", "");
        p1s.classList.remove("green");
        p2s.classList.remove("green");
    }
    p1btn.addEventListener("click", () => {
        if (!gameOver) {
            //Data change 
            p1score++;
            winner(p1score, winScore);
        }
        //show change data
        p1s.textContent = p1score;
    });
    p2btn.addEventListener("click", () => {
        if (!gameOver) {
            p2score++;
            winner(p2score, winScore);
        }
        p2s.textContent = p2score;
    })


    input.addEventListener("change", () => {
        winScore = Number(input.value);
        winningScore.textContent = input.value;
        input.value = "";
        reset();
    })
    resetBtn.addEventListener("click", reset);
})();