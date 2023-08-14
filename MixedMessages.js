const secretMsg = { //declare object to store messages
    _first: [], //declare first part of the message containing intensifiers
    _second: [], //declare second part of the message containing adjectives
    _third: [], //declare third part of the message containing nouns
    get first() {
        return this._first;
    },
    get second() {
        return this._second;
    },
    get third() {
        return this._third;
    },
    get randFirst() {
        return this._first[Math.ceil(Math.random() * this._first.length)]
    },
    get randSecond() {
        return this._second[Math.ceil(Math.random() * this._second.length)]
    },
    get randThird() {
        return this._third[Math.ceil(Math.random() * this._third.length)]
    },
    addFirst(list) { //function to add words to the _first element of the object
        //console.log('first');
        if (typeof(list) === 'string' || Array.isArray(list)) { //check if input is a string or array
            if (Array.isArray(list)) {
                for (word of list) {
                    if (typeof(word) === 'string') { //check if the element in the list is a string
                        if (!this._first.includes(word)) {
                            this._first.push(word.toLowerCase());
                        }
                    }
                }
            } else {
                if (!this._first.includes(list)) {
                    this._first.push(list.toLowerCase());
                }
            }
        } else {
        console.log(Array.isArray(list));
        console.log(typeof(list));
        return;
        }
    },
    addSecond(list) { //function to add words to the _second element of the object
        if (typeof(list) === 'string' || Array.isArray(list)) { //check if input is a string or array
            if (Array.isArray(list)) {
                for (word of list) {
                    if (typeof(word) === 'string') { //check if the element in the list is a string
                        if (!this._second.includes(word)) {
                            this._second.push(word.toLowerCase());
                        }
                    }
                }
            } else {
                if (!this._second.includes(list)) {
                    this._second.push(list.toLowerCase());
                }
            }
        } else {
            console.log(Array.isArray(list));
            console.log(typeof(list));
            return;
        }
    },
    addThird(list) { //function to add words to the _third element of the object
        if (typeof(list) === 'string' || Array.isArray(list)) { //check if input is a string or array
            if (Array.isArray(list)) {
                for (word of list) {
                    if (typeof(word) === 'string') { //check if the element in the list is a string
                        if (!this._third.includes(word)) {
                            this._third.push(word);
                        }
                    }
                }
            } else {
                if (!this._third.includes(list)) {
                    this._third.push(list);
                }
            }
        } else {
            console.log(!Array.isArray(list));
            console.log(typeof(list));
            return;
        }
    }
};

const firstWord = ['very', 'really', 'extremely', 'amazingly', 'particularly', 'exceptionally', 'remarkably', 'incredibly', 'unusually']; //intensifiers
const secondWord = ['beautiful', 'furry', 'scary', 'cool', 'messy', 'rigid', 'awful', 'mischievous', 'happy', 'bad', 'rich', 'poor', 'smooth', 'heavy']; //adjectives
const thirdWord = ['dog', 'car', 'teacher', 'bird', 'pizza', 'brother', 'mansion', 'children', 'train', 'research']; //nouns

secretMsg.addFirst(firstWord); //add intensifiers to secretMsg-object
secretMsg.addSecond(secondWord); //add adjectives to secretMsg-object
secretMsg.addThird(thirdWord); //add nouns to secretMsg-object

let message = ''; //declare var for secret message
message = `${secretMsg.randFirst} ${secretMsg.randSecond} ${secretMsg.randThird}`; //create message with three random words
message = message.charAt(0).toUpperCase() + message.slice(1); //turn first letter to uppercase

//console.log(secretMsg.first);
console.log(message); //log randomized secret message to the console