"use strict";
// Find 2 different inputs with the same output
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256_1 = require("js-sha256");
var hashes = [];
var firstMessage = "";
var newMessage = "";
var newHash = { hash: "", message: "" };
var loop = true;
var counter = 0;
// add first random message hash to hashes array
firstMessage = (Math.random() * counter + "");
hashes.push({ hash: js_sha256_1.sha256(firstMessage), message: firstMessage });
function birthdayAttack() {
    do {
        // generate a hash from a random message
        // chose a number because could not find a good word/brute-force package
        // update the counter to get another random number
        counter++;
        newMessage = (Math.random() * counter + "");
        newHash = { hash: js_sha256_1.sha256(newMessage), message: newMessage };
        console.log('Hashed: ' + newHash.hash);
        // check if the hash is already in the hashes array
        for (var i = 0; i < hashes.length; i++) {
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
        hashes.push(newHash);
    } while (loop);
}
birthdayAttack();
//# sourceMappingURL=index.js.map