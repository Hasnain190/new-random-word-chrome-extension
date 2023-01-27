"use strict";
const wordHTML = document.getElementById("word");
const pinyinHTML = document.getElementById("pinyin");
const meaningHTML = document.getElementById("meaning");
const url = 'http://ccdb.hemiola.com/characters/?filter=gb&sort-by-additional&fields=string%2CkMandarin%2CkDefinition';
const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        const data = json;
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
let chineseWords;
(async function () {
    chineseWords = await fetchData(url);
    let randomIndex = Math.floor(Math.random() * chineseWords.length);
    let word = chineseWords[randomIndex].string;
    let pinyin = chineseWords[randomIndex].kMandarin;
    let meaning = chineseWords[randomIndex].kDefinition;
    wordHTML.innerHTML = word;
    pinyinHTML.innerHTML = pinyin;
    meaningHTML.innerHTML = meaning;
    console.log(meaning);
})();
