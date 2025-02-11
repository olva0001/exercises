const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  },  {    bad: "marquee",    good: "just don't",  },];

document.getElementById("SFW").addEventListener("click", MakeTextSafeForWork);

let wordsReplaced = false;

function MakeTextSafeForWork() {
    let textElement = document.getElementById("text-content");
    let originalText = textElement.innerHTML;
    let modifiedText = originalText;

    if (!wordsReplaced) {
        curseWords.forEach(({ bad, good }) => {
            const regex = new RegExp(`\\b${bad}\\b`, "g");
            modifiedText = modifiedText.replace(regex, `<span class="styled-good-word">${good}</span>`);
        });

        if (modifiedText !== originalText) {
            textElement.innerHTML = modifiedText;
            wordsReplaced = true;
        }
    } else {
        openDialog();
    }
}

function openDialog() {
    document.getElementById("confirmationDialog").showModal();
}