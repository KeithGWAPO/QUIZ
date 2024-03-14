import{info} from "./info.js"
import{img} from "./img.js"
import{card} from "./card.js"



const data ={
    title       : "THE ANONYMOUS",
    para        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",
    contactBtn  : "Contact Me",
    myImage     : "ano1r.png"
}

const datatwo ={
    titleTwo: "PROJECT COMPLETED",
    imageOne: "OIP.jpg",
    paraOne: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",
    button1:    "Project 1",

    imageTwo: "OIP.jpg",
    paraTwo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",
    button2:    "Project 2",

    imageThree: "OIP.jpg",
    paraThree: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste enim accusamus quaerat nobis doloribus inventore, necessitatibus ducimus sint nihil atque ex debitis vitae recusandae officia. Expedita, illum.",
    button3:    "Project 3"
}

const {title, para, contactBtn, myImage} = data
const {titleTwo, imageOne, paraOne, imageTwo,  paraTwo, imageThree, paraThree, button1, button2, button3} = datatwo

sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))
sectionTwo.append(card(titleTwo, paraOne, paraTwo, paraThree, imageOne, imageTwo, imageThree, button1, button2, button3))
