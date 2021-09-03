

export class Card {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;

    }
    render(item) {
        return `
            <div class="card" id =${item.id} >
                <div class ="cardtitle">${item.title}</div>
                <img class ="cardcontent" src="${item.content}" alt="img">
            </div>`
    }
    renderaudio(item) {
        return `
        <div class="card" id =${item.id} >
        <figure>
        <figcaption>Listen to the ${item.title}:</figcaption>
            <audio class ="audio"
                controls
                src="${item.content}">
            </audio>
        </figure>
         </div>`
    }
    rendervideo(item) {
        return `
        <div class="card" id =${item.id} >
        <figure>
        <figcaption>Watch the ${item.title}:</figcaption>
            <video class ="video"
                controls
                src="${item.content}">
            </audio>
        </figure>
         </div>`
    }
}

export class ItemsArray {
    constructor() {
        this.items = [];
    }
    addItem() {
        itemsCat.pictures.forEach(item => this.items.push(new Card(item.id, item.title, item.content)));
        itemsCat.audio.forEach(item => this.items.push(new Card(item.id, item.title, item.content)));
        itemsCat.video.forEach(item => this.items.push(new Card(item.id, item.title, item.content)));
    };

    makeResultingSet(container) {
        this.addItem();

        let listHtml = '';
        this.items.forEach(card => {
            if (card.content.includes('audio')) {
                listHtml += card.renderaudio(card);
            }
            if (card.content.includes('images')) {
                listHtml += card.render(card);
            }
            if (card.content.includes('video')) {
                listHtml += card.rendervideo(card);
            }

        })
        container.insertAdjacentHTML("afterbegin", listHtml);
    }
}

const itemsCat = {
    pictures: [
        {
            id: 1,
            title: "Title 1",
            content: "images/1.jpg"
        },
        {
            id: 2,
            title: "Title 2",
            content: "images/2.jpg"
        }
    ],
    audio: [
        {
            id: 3,
            title: "Title 3",
            content: "audio/2.mp3"
        },
        {
            id: 4,
            title: "Title 4",
            content: "audio/1.mp3"
        }
    ],
    video: [
        {
            id: 5,
            title: "Title 5",
            content: "video/1.mp4"
        },
        {
            id: 6,
            title: "Title 6",
            content: "video/2.mp4"
        }
    ]


}



