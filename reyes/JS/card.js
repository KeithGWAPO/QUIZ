
const card = (titleTwo, paraOne, paraTwo, paraThree, imageOne, imageTwo, imageThree, button1, button2, button3) => {
    let div = document.createElement("div")
    div.className = "ClassC"
    div.innerHTML = `<h1 style="text-align: center; margin-bottom: 50px;">${titleTwo}</h1>

                     <ul class="ul1">
                        <li><img src ="./images/${imageOne}" class="imgbt" ></li>
                        <li>${paraOne}</li>
                        <li><button>${button1}</button></li>
                     </ul>

                     <ul class="ul1">
                        <li><img src ="./images/${imageTwo}" class="imgbt" ></li>
                        <li>${paraTwo}</li>
                        <li><button>${button2}</button></li>
                     </ul>

                     <ul class="ul1">
                        <li><img src ="./images/${imageThree}" class="imgbt" ></li>
                        <li>${paraThree}</li>
                        <li><button>${button1}</button></li>
                     </ul>`
                     
    return div
}

export {card}