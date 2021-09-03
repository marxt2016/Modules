

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
            </div>
        `;
    }
}

export class ItemsArray {
    constructor() {
        this.items = [];
    }
    addItem() {
        for (let i = 0; i < itemsCat.pictures.length; i++) {
            this.items.push(new Card(itemsCat.pictures[i].id, itemsCat.pictures[i].title, itemsCat.pictures[i].content));
        }
    };

    makeResultingSet(container) {
        this.addItem();
        let listHtml = '';
        this.items.forEach(card => {
            listHtml += card.render(card);
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
    ]
}



