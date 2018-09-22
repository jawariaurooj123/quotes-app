let cars = [{
        name: "Abdul Sattar Edhi",
        title: "Founder Edhi Foundation",
        readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        imgURL: "edhi.jpg",
        quote: "No religion is higher than humanity"
    },
    {
        name: "Malala",
        title: "The courageous crusader for Girls",
        readMoreUrl: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
        imgURL: "malala1.jpg",
        quote: "One child, one teacher, one book, one pen can change the world"
    },

    {
        name: "Abdul qadeer Khan",
        title: "The Nation",
        readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        imgURL: "abdul-qadeer-khan.jpg",
        quote: "I am proud of my work for my country."
    },

    {
        name: "Muhammad Ali Jinnah",
        title: "Quaid-e-azam",
        readMoreUrl: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        imgURL: "Quaid-e-Azam1.jpg",
        quote: "I do not believe in taking the right decision, I take a decision and make it right."
    },




    {
        name: "Arfa Karim",
        title: "The world’s youngest Microsoft certified IT expert of Pakistan",
        readMoreUrl: "https://en.wikipedia.org/wiki/Arfa_Karim",
        imgURL: "arfa.jpg",
        quote: "I keep my self updated by reading different books and encyclopedias."
    },


    {
        name: "Imran Khan",
        title: "Kaptan",
        readMoreUrl: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        imgURL: "imran.jpg",
        quote: "We shall never lie and always speak the truth."
    },

    {
        name: "Benazir Bhutto",
        title: "Martyr of Democracy",
        readMoreUrl: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
        imgURL: "benazir.jpg",
        quote: "Freedom is not an end. Freedom is a beginning."
    }
];

function initializing() {
    carsGroupEl = document.querySelector("#cars-list");
    for (let i = 0; i < cars.length; i++) {
        carsGroupEl.innerHTML += `<div class="car-image-div" 
		style="background-image: url('images/${cars[i].imgURL}')" onclick="changeCar(${i})">
		<p class="cars-img-text">${cars[i].name}</P>
		</div>
		
		`

    }
    changeCar(0);

}




function changeCar(abcd) {

    document.querySelector("#car-name").innerHTML = cars[abcd].name;
    document.querySelector("#car-company").innerHTML = cars[abcd].title;
    document.querySelector("#cars-bottom-links a").href = cars[abcd].readMoreUrl;
    document.querySelector(".car-image").style.background = `url(images/${cars[abcd].imgURL})`;
    document.querySelector("#car-model").innerHTML = cars[abcd].quote;

}