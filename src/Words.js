import words from './words.txt';
export const boardDefault=[
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];

export const generateWordSet = async() => {
    let wordSet;
    let todayWord;
    await fetch(words)
        .then((response)=>response.text())
        .then((result)=>{
            const wordArr=result.split("\n");
            todayWord=wordArr[Math.floor(Math.random()*wordArr.length)]
            wordSet=new Set(wordArr);
        });
    return {wordSet,todayWord};
};