const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const previousAuthorHtml = author.innerHTML
let togglestatus = false
const search = document.getElementById('search')
const reset = document.getElementById('reset')
const text = document.getElementById('text')
const previousText = text.innerHTML
const previousArr = text.innerHTML.split(" ")
const output = text.innerHTML.split(" ")

btn_toggle.onclick = () => {
  // your code here
  if(!togglestatus){
    author.innerHTML = parseInt(previousAuthorHtml)+parseInt(length.value)
    btn_toggle.innerHTML = 'Show Author'
    togglestatus = true
  }else{
    author.innerHTML = previousAuthorHtml
    btn_toggle.innerHTML = 'Show Calculation'
    togglestatus = false
  }
}

// more codes for Search and Reset buttons here
