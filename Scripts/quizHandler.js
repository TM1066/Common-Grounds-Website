const quizContainer = document.getElementsByClassName('quiz-answer-container')

document.getElementById("quiz-form").addEventListener("submit", function(e) {
    e.preventDefault(); //stops the page from reloading

    const answers = { // basically make an object with each question and it's value as a property
      Q1: document.querySelector('input[name="Q1"]:checked')?.value,
      Q2: document.querySelector('input[name="Q2"]:checked')?.value,
      Q3: document.querySelector('input[name="Q3"]:checked')?.value,
      Q4: document.querySelector('input[name="Q4"]:checked')?.value,
    };

    // Print out the chosen answers to the console for debugging
    console.log("Chosen answers:", answers);

    //Logic for picked coffee!!!

    let resultImage = "Images/friends-cafe-coffee.avif";
    let resultTitle = "ARABICAAA"
    let resultText = "test test test";
    // handling decaf
    if (answers.Q4 == "4A") {
        resultImage = "Images/quiz/decafresult.jpg";
        resultTitle = "Any Decaf Coffee!"
        resultText = "Now, come on. Its a coffee shop. Me and you both know VERY WELL all decaf tastes exactly the same. if you like chemicals, don't let me stop what floats your boat but DONT COME TO MY SHOP!!!\n\nTry adding some "
        switch (answers.Q3)
        {
            case "3A":
                resultText += "Lemon "
                break;
            case "3B":
                resultText += "Chocolate "
                break;
            case "3C":
                resultText += "Peaches "
                break;
            case "3D":
                resultText += "Flower Petals "
                break;
        }
        resultText += "on top or something I don't know."
    }
    //handling strong coffee - Robusta Beans
    else if (answers.Q4 == "4B"){
        resultImage = "Images/quiz/robusta.jpg";
        resultTitle = "Robusta Blends!"
        resultText = "Your predilection for stronger blends means you'll likely be a big fan of some of our Robusta Coffees!"

        switch (answers.Q3)
        {
            case "3A":
                resultText += "Lemon "
                break;
            case "3B":
                resultText += "Chocolate "
                break;
            case "3C":
                resultText += "Peaches "
                break;
            case "3D":
                resultText += "Flower Petals "
                break;
        }
    }
    //handle light coffee/also catch edge cases - All goe to Arabica
    else {
        resultImage = "Images/quiz/robusta.jpg";
        resultTitle = "Arabica Blends!"
        resultText = ""
    }

    // Hide the quiz questions
    document.querySelector(".quiz-container").style.display = "none";

    // Show the result
    document.getElementById("result-image").src = resultImage;
    document.getElementById("result-title").textContent = resultTitle;
    document.getElementById("result-description").textContent = resultText;
    document.querySelector(".quiz-result-container").style.display = "block";

    });

