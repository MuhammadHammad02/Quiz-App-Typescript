
import inquirer from "inquirer";







async function AskQuestion() {


    const answers = await inquirer.prompt([{
        type: "list",
        name: "questionno1",
        choices: ["Amazon", "Microsoft","Oracle","Typescript"],
        message: " Which of the following companies has developed TypeScript?",

    },
    {
        type: "list",
        name: "questionno2",
        choices: ["Gradual", "Duck","Dynamic","All of the Above"],
        message: "What is the typing principle of typescript ?",

    },
    {
        type: "list",
        name: "questionno3",
        choices: [".tt", ".tsx",".nod",".ts"],
        message: "Which of the following filenames is the extension for typescript? ",
    },
    {
        type: "list",
        name: "questionno4",
        choices: ["Javascript", "C#","Java","All of the Above"],
        message: "Which of the computer programming languages below has influenced the creation of typescript?",
    },


    ])

    const marks = 10;
    const fail = 0
    if (answers.questionno1 === "Microsoft") {
        console.log("Answer is correct");
    }

    else () => {
        console.log("Answer is not correct");

    }
    if (answers.questionno2 === "Dynamic") {
        console.log("Answer is correct ");
    }
    else {
        console.log("Answer is not correct");

    }
    if (answers.questionno3 === ".ts") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");

    }
     if (answers.questionno4 === "Javascript") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");

    }

}
AskQuestion()
