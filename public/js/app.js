const sendReq = document.getElementById('sendReq')

sendReq.addEventListener('click', () => {
  let baseUrl = 'http://localhost:3000/test'
  let myTst1 = parm1.value
  let myTst2 = parm2.value

  baseUrl += `?tst1=${myTst1}&tst2=${myTst2}`
  alert(baseUrl)

  fetch(baseUrl).then((res) => {
    res.json().then((data) => {
      //console.log(data)
      if (data.error) {
        error.innerHTML = data.error
      } else {
        parm1.value = `Sent and Received back: ${data.recParm1}`
        parm2.value = `Sent and Received back: ${data.recParm2}`
        error.innerHTML = ''
      }
    })
  })
})

sendReq2.addEventListener('click', () => {
  let baseUrl = 'http://localhost:3000/date'

  fetch(baseUrl).then((res) => {
    res.json().then((data) => {
      //console.log(data)
      day.innerHTML = `Day: ${data.day}`
      month.innerHTML = `Month: ${data.month}`
    })
  })
})

sendReq3.addEventListener('click', () => {
  let baseUrl = 'http://localhost:3000/repeat'
  let myNumber = parm3.value

  baseUrl += `?num=${myNumber}`
  //alert(baseUrl);

  fetch(baseUrl).then((res) => {
    res.json().then((data) => {
      //console.log(data)
      if (data.error) {
        error.innerHTML = data.error
      } else {
        res3.innerHTML = data.numRep
      }
    })
  })
})

sendReq4.addEventListener('click', () => {
  let baseUrl = 'http://localhost:3000/help'

  //alert(baseUrl);

  fetch(baseUrl).then((res) => {
    res.json().then((data) => {
      console.log(data)
      let result = ''
      data.forEach((element) => {
        result += `<br>${element.name}`
      })
      res4.innerHTML = result

      //OR
      // res4.innerHTML = JSON.stringify(data);
    })
  })
})
