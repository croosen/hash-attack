// Find 2 different inputs with the same output

import { sha256 } from "js-sha256";

let hashes: { hash: string, message: string }[] = [];
let firstMessage: string = "";
let newMessage: string = "";
let newHash: { hash: string, message: string } = { hash: "", message: ""};
let loop: boolean = true;
let counter: number = 0;

// add first random message hash to hashes array
firstMessage = (Math.random() * counter + "");
hashes.push({hash: sha256(firstMessage), message: firstMessage});

function birthdayAttack() {

    do {
        // generate a hash from a random message
        // chose a number because could not find a good word/brute-force package
        // update the counter to get another random number
        counter++;
        newMessage = (Math.random() * counter + "");
        newHash = {hash: sha256(newMessage), message: newMessage};

        console.log('Hashed: ' + newHash.hash);

        // check if the hash is already in the hashes array
        for (let i = 0; i < hashes.length; i++) {

            if (hashes[i].hash.substring(0, 6) == newHash.hash.substring(0, 6)) {

                loop = false;

                console.log('collision found');
                console.log('first hash: ' + hashes[i].hash);
                console.log('first hash message: ' + hashes[i].message);
                console.log('second hash: ' + newHash.hash);
                console.log('second hash message: ' + newHash.message);
            }
        }

        // if no match, push the hash to the array
        hashes.push(newHash)

    } while (loop)

}

birthdayAttack();
