//console.log("js is connected to the index file");

const sendReq = document.getElementById("sendReq");

sendReq.addEventListener('click', () => {
    let baseUrl = 'http://localhost:3000/test';
    let myTst1 = parm1.value;
    let myTst2 = parm2.value;

    baseUrl += `?tst1=${myTst1}&tst2=${myTst2}`;
    alert(baseUrl);

    fetch(baseUrl).then((res) => {
        res.json().then((data) => {
            //console.log(data)
            if (data.error) {
                error.innerHTML = data.error;
            } else {
                parm1.value = `Sent and Received back: ${data.recParm1}`;
                parm2.value = `Sent and Received back: ${data.recParm2}`;
                error.innerHTML = "";
            }
        })
    })
})

// fetch() returns a promise. We can wait for the promise to resolve by passing a handler with the then() method of the promise.
// res = The Response Object returned by a fetch() call contains all the information about the request and the response of the network request.
// .json() = takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON. (before that the response is coming as a string)
// res.json() - It accepts an object or array, and converts it to JSON before sending it.


sendReq2.addEventListener('click', () => {
    let baseUrl = 'http://localhost:3000/date';

    fetch(baseUrl).then((res) => {
        res.json().then((data) => {
            //console.log(data)
            day.innerHTML = `Day: ${data.day}`;
            month.innerHTML = `Month: ${data.month}`;
        })
    })
})

sendReq3.addEventListener('click', () => {
    let baseUrl = 'http://localhost:3000/repeat';
    let myNumber = parm3.value;

    baseUrl += `?num=${myNumber}`;
    //alert(baseUrl);

    fetch(baseUrl).then((res) => {
        res.json().then((data) => {
            //console.log(data)
            if (data.error) {
                error.innerHTML = data.error;
            } else {
                res3.innerHTML = data.numRep;
            }
        })
    })
})

sendReq4.addEventListener('click', () => {
    let baseUrl = 'http://localhost:3000/help';

    //alert(baseUrl);

    fetch(baseUrl).then((res) => {
        res.json().then((data) => {
            console.log(data)
            let result = '';
            data.forEach(element => {
                result += `<br>${element.name}`;
            });
            res4.innerHTML = result;

            //OR
            // res4.innerHTML = JSON.stringify(data);
        })
    })
})