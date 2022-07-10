export function getColors() {
    return $.getJSON('./src/js/colors.json', function (data) {
        console.log(data);
    });
}

export function setBackgroundColor() {
    // const randomColor = Math.floor(Math.random()*16777214).toString(16);
    // const configRandomColor = `#${randomColor}`;
    // const btn = document.getElementById('new-quote');
    //
    // return btn.addEventListener('click', function onClick(event) {
    //     document.body.style.backgroundColor = '#' + randomColor;
    // })

    // return document.getElementById("new-quote").style.backgroundColor = '#' + randomColor;
}