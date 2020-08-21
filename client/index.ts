import rp from 'request-promise'

const path: string = 'http://localhost:8080';
const sum_path: string = 'http://localhost:8080/sum';
const subtract_path: string = 'http://localhost:8080/subtract';
const divide_path: string = 'http://localhost:8080/divide';
const multiply_path: string = 'http://localhost:8080/multiply';

var sum = {
    method: 'POST',
    uri: path + '/sum',
    body: {
        param1: 4,
        param2: 2
    },
    json: true
};


var subtract = {
    method: 'POST',
    uri: path + '/subtract',
    body: {
        param1: 4,
        param2: 2
    },
    json: true
};

var multiply = {
    method: 'POST',
    uri: path + '/multiply',
    body: {
        param1: 4,
        param2: 2
    },
    json: true
};

var divide = {
    method: 'POST',
    uri: path + '/divide',
    body: {
        param1: 4,
        param2: 2
    },
    json: true
};

var trial = {
    method: 'GET',
    uri: path,
    json: true
};

 async function main() {
    var options = [sum, subtract, multiply, divide];

    options.forEach((element: any) => {
        try {
            let parsedBody = rp(options[element]);
            console.log(parsedBody);
        } catch(err) {
            console.log(err);
        }
    })

    try {
        let parsedBody = await rp(sum);
        console.log(parsedBody);
        } catch(err) {
            console.log(err);
        }

    // rp.post(path, {json:true, body> {param1:"2", param2: "3"}});
    // let promiseArray = [];

    // promiseArray.push(rp.post(path, {json:true, body> {param1:"2", param2: "3"}}));

    // let result = await Promise.all(promiseArray);
}


main();