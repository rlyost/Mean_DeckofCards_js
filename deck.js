class Deck {
    constructor() {
        this.deck = [];
        this.reset();
    }
    reset() {
        this.deck = [];
        let suits = ['c', 'h', 'd', 's'];
        let pips = ['a',2,3,4,5,6,7,8,9,10,'j','q','k'];

        for(let suit in suits){
            for(let pip in pips){
                this.deck.push(suits[suit] + pips[pip]);
            }
        }
        return this;
    }
    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    take_card(deck) {
        this.hand.push(deck.deal());
        this.display_hand();
        return this;
    }
    discard() {
        this.hand.pop();
        this.display_hand();
        return this;
    }
    display_hand(){
		// create our html string, open up the table tag
		let html_string = "<table>";
		// outer loop
        html_string += "<tr>";
        // inner loop
        for(let j = 0; j<this.hand.length; j++){
            console.log(this.hand[j])
            let nums = "<img src='cards-png/" + this.hand[j] + ".png'>";
            console.log(nums);
            // attach our table data tags around the number
            let data = "<td>" + nums + "</td>";
            // add it to the html
            html_string += data;
        }
        // after the inner loop, we cap our table rows
        html_string += "</tr>";
		html_string += "</table>";
		document.getElementById("target").innerHTML = html_string;
	}
}

let deck1 = new Deck();
deck1.shuffle().shuffle().reset().shuffle();
console.log(deck1);

let rick = new Player('Rick');
rick.take_card(deck1).take_card(deck1).take_card(deck1).take_card(deck1)
console.log(rick.hand);