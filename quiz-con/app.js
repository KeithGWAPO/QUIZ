import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "SOLO LEVELING",
    para:       "Solo Leveling (나 혼자만 레벨업) is a Korean web novel written by Chu-Gong (추공). It was first serialized by Papyrus on November 4, 2016 and ended with 14 volumes and 270 chapters. On April 13, 2018, a webtoon serialization was released on KakaoPage, drawn by artists Gi So-Ryeong (기소령) and Jang Sung-Rak (장성락).",
    button:     "Contact Us",
    image:      "sl.jpg"
}

const dataTwo = {
    title2:     "Solo Leveling: Sung Jin-Woo’s 3 Strongest Shadow Soldiers",

    image1:     "(1).jpg",
    para1:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button1:    "View Character",

    image2:     "(2).jpg",
    para2:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button2:    "View Character",

    image3:     "(3).jpg",
    para3:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button3:    "View Character"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
