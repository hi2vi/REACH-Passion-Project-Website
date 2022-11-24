function goBackToMainPage() {
    goToLink("https://shauryacomputers.tech");
}

function goToLink(link) {
    window.location = link;
}

document.getElementById('icon-citation').addEventListener('click', function (e) {
    goToLink('https://www.flaticon.com/free-icon/binary-code_2115955');
});
