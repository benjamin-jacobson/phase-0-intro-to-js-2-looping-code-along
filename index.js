// Code your solutions in this file

function writeCards(arr,eventName) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let newMessage = `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`
        newArr.push(newMessage)
    }
    return newArr
}

function countDown(num) {
    let count = num
    while (count >= 0) {
    console.log(count)
    count -= 1
    }
}