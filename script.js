function goBackToMainPage() {
    goToLink("https://shauryacomputers.tech");
}

function goToLink(link) {
    window.location = link;
}

function checkInputEmpty(id1, id2, id3) {
    if (document.getElementById(id1).value == "") {
        return false;
    }
    if (document.getElementById(id2).value == "") {
        return false;
    }
    if (document.getElementById(id3).value == "") {
        return false;
    }
}