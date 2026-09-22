const objects = {

computer: {
        name: "COMPUTER",
        image: "images/computer.png",
        category: "Tech",
        physical:"Dark blue, mac book, covered in stickers",
        functional:"Access the internet, stores file/info, communication",
        personal:"School, work, entertainment, art"
    },

phone: {
        name:"PHONE",
        image: "images/phone.png",
        category: "Tech",
        physical:"iphone, black case, covered in stickers",
        functional:"Communication, taking pictures, apps, stores info",
        personal:"School, work, personal, entertainment (I have 30 games on my phone)"
    },

sketchbook: {
        name: "SKETCHBOOK",
        image: "images/sketchbook.png",
        category: "School / art",
        physical:"Black, covered in stickers",
        functional:"Drawing/sketching, brainstorming, stores ideas",
        personal:"Art, school, journal, scrapbook"
    },

fan: {
        name: "FAN",
        image: "images/fan.png",
        category: "Personal",
        physical:"Wooden, brown, little cutouts",
        functional:"Cooling off",
        personal:"The subway can get hot sometimes, summer heat"
    },

camera: {
        name: "CAMERA",
        image:"images/camera.png",
        category: "Tech",
        physical:"Sony, pink, screen button selector attached",
        functional:"Records pictures/videos, stores pictures/videos, different camera settings",
        personal:"Taking photos, capturing memories, childhood pictures"
    },

charger: {
        name: "PORTABLE CHARGER",
        image: "images/portablecharger.png",
        category: "Tech",
        physical:"Dark blue, 4 different types of plugs",
        functional:"Charging electronics",
        personal:"My tech dies a lot when I need it so this is very useful"
    },

keys: {
        name: "KEYS",
        image: "images/keys.png",
        category: "Personal",
        physical:"House keys, dolphin bottle opener, key fobs, little bird charm",
        functional:"Lock/unlock",
        personal:"Keys for home, bottle opener key chain, decorative key chain"
    },

sunglasses: {
        name: "SUNGLASSES",
        image: "images/sunglasses.png",
        category: "Personal",
        physical:"Black/blue color, gemstones on sides, black tinted glass",
        functional:"Protect eyes from sun",
        personal:"Protect eyes from sun, outfit accessory"
    },

wallet: {
        name: "WALLET",
        image: "images/wallet.png",
        category: "Personal",
        physical:"Denim jean pocket, heart embroidered, safety pin",
        functional:"Holds money, cards, Id",
        personal:"Made it myself, holds my money, cards, id, and other personal items"
    },

gum: {
        name: "GUM",
        image: "images/gum.png",
        category: "Personal",
        physical:"Trident spearmint, green",
        functional:"Fix bad breath",
        personal:"I always want gum after I eat smth"
    },

fidget: {
        name: "FIDGET SPINNER",
        image: "images/fidget.png",
        category: "Personal",
        physical:"Plastic, silver color",
        functional: "Entertainment, stress relief",
        personal:"Helps me not pick on my nails, good for when im bored"
    },

pens: {
        name: "PENS + PENCILS",
        image: "images/pen-pencils.png",
        category: "School / art",
        physical:"Ballpoint pens, mechanical pencil, micron pens, pencil, 6 total",
        functional:"Writing, drawing ",
        personal:"Writing, drawing, taking notes."
    }
}

function showInfo(objectName) {
    const object = objects[objectName];
    document.getElementById("info-image").src = object.image;
    document.getElementById("info-image").alt = object.name;
    document.getElementById("info-title").textContent = object.name;
    document.getElementById("info-category").textContent = object.category;
    document.getElementById("info-physical").textContent = object.physical;
    document.getElementById("info-functional").textContent = object.functional;
    document.getElementById("info-personal").textContent = object.personal;
    document.getElementById("info-panel").style.display = "block";
}

function closeInfo() {
    document.getElementById("info-panel").style.display = "none";
}