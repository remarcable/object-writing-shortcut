const fetch = require("node-fetch");
const $ = require("cheerio");

const url = "https://objectwriting.com";

function extractCurrentWord(text) {
    const wordOfTheDayLines = $("table", text)
        .find("script")
        .html()
        .split("\n")
        .filter((text) => text.includes("tips["));

    const today = new Date();
    const currentDay = today.getDate();
    const wordOfTheDayLine = wordOfTheDayLines[currentDay - 1];
    const wordWithHtml = /<h1>.+<\/h1>/.exec(wordOfTheDayLine)[0];
    const word = $(wordWithHtml).text().trim();

    return word;
}

async function handler() {
    const page = await fetch(url);
    const pageContent = await page.text();
    const word = extractCurrentWord(pageContent);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/plain' },
        body: word,
    }
}

module.exports = { handler };
