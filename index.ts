#!/usr/bin/env node

import inquirer from 'inquirer';

// Define the questions and correct answers
const questions = [
    {
        type: 'list',
        name: 'question_1',
        message: 'Q1: What is the capital of Canada?',
        choices: ['a) Toronto', 'b) Vancouver', 'c) Ottawa', 'd) Montreal'],
        correctAnswer: 'c) Ottawa'
    },
    {
        type: 'list',
        name: 'question_2',
        message: 'Q2: Which planet is known as the Red Planet?',
        choices: ['a) Earth', 'b) Mars', 'c) Jupiter', 'd) Venus'],
        correctAnswer: 'b) Mars'
    },
    {
        type: 'list',
        name: 'question_3',
        message: 'Q3: Who wrote the play `Romeo and Juliet`?',
        choices: ['a) Charles Dickens', 'b) William Shakespeare', 'c) Mark Twain', 'd) Jane Austen'],
        correctAnswer: 'b) William Shakespeare'
    },
    {
        type: 'list',
        name: 'question_4',
        message: 'Q4: What is the chemical symbol for gold?',
        choices: ['a) Au', 'b) Ag', 'c) Fe', 'd) Pb'],
        correctAnswer: 'a) Au'
    },
    {
        type: 'list',
        name: 'question_5',
        message: 'Q5: Who was the first President of the United States?',
        choices: ['a) Abraham Lincoln', 'b) Thomas Jefferson', 'c) George Washington', 'd) John Adams'],
        correctAnswer: 'c) George Washington'
    }
];

// Function to evaluate the answers
const evaluateAnswers = (answers: { [key: string]: string }) => {
    let score = 0;

    questions.forEach((question, index) => {
        const answerKey = `question_${index + 1}`;
        if (answers[answerKey] === question.correctAnswer) {
            score++;
        }
    });

    return score;
};

// Main function to run the quiz
const runQuiz = async () => {
    const answers = await inquirer.prompt(questions.map(({ correctAnswer, ...rest }) => rest as inquirer.Question));
    const score = evaluateAnswers(answers);

    console.log(`Your score is: ${score} out of ${questions.length}`);
};

runQuiz();

