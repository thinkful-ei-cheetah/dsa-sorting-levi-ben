'use strict'

const quick = require('./quick');
const merge = require('./merge');
const LinkedList = require('./LinkedList');
const mergeSort = require('./mergeSLL');
const bucket = require('./bucket')
const randomize = require('./random')

const SLL = new LinkedList();
SLL.insertFirst(89);
SLL.insertFirst(30);
SLL.insertFirst(25);
SLL.insertFirst(32);
SLL.insertFirst(72);
SLL.insertFirst(70);

function main() {
    let dataStr = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
    let data = dataStr.split(' ').map(str => Number(str));

    // console.log(quick(data));
    // console.log(bucket(data, 1, 98))    
    console.log(randomize(data))

    // mergeSort(SLL);
    // SLL.display();
}

main();