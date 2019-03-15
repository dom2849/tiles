let MAX_RGB_VALUE = 255

let containers = document.getElementsByClassName('flex-container');

addEventListenersForContainers();

function addEventListenersForContainers(){
    for (let i = 0; i<containers.length; i++){
        containers[i].addEventListener('click', changeBoxColor);
    }
}

function changeBoxColor(e){
    rgbValue1 = generateNumber(MAX_RGB_VALUE + 1)
    rgbValue2 = generateNumber(MAX_RGB_VALUE + 1)
    rgbValue3 = generateNumber(MAX_RGB_VALUE + 1)

    color = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
    e.target.style.background = color;

}

function generateNumber(upperbound){
    return Math.floor(Math.random() * upperbound)
}