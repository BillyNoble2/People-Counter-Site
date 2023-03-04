// let count = 5

// //count + 1
// count = count + 1

// count =  count + 10

// console.log(count)

//initialise the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
console.log(countEl)

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function remove(){
    count -= 1
    if (count < 0) {
        count = 0
    }

    countEl.innerText = count
    console.log(count)
}

function save(){
    let countStr = " " + count + " - "
    saveEl.innerText += countStr
    count = 0
    countEl.innerText = 0
}