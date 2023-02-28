const title = document.querySelector('#title')
console.log(title)

const items = document.querySelectorAll('#wrap article')
console.log(items)

for(let item of items) {
  console.log(item)
}

for(let i=0; i<items.length; i++) {
  console.log(items[i])
}