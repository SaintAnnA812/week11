function clickMe() {
    let catNameInput =
        document.getElementById('catName');
    console.log(catNameInput.value);

    //console.log(document.getElementsByName('feed'));
    let checks = document.getElementsByName('feed');
    console.log(checks[0].checked);
    console.log(checks[1].checked);
    console.log(checks[2].checked);
}

function changeMe() {
    let catImage = document.getElementById('catimage');
    catImage.src = 'https://happypik.ru/wp-content/uploads/2019/09/njashnye-kotiki4.jpg.webp';
}
