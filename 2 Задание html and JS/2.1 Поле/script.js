//Для реализации использоват так называемое "Делегирование событий"
//На этапе всплытия события проверяем совпадает ли он с целевым элементом, и если совпадает, тогда выполняем логику

let table = document.querySelector('#table')
let swapButton = document.querySelector('#swap-color')

table.onclick = function (event) {
  let target = event.target
  if (target.tagName !== 'TD') return

  if (target.classList.contains('selected')) {
    target.classList.remove('selected')
  } else {
    target.classList.add('selected')
  }

}

swapButton.onclick = function (event) {
  let tds = document.querySelectorAll('td')

  tds.forEach(td => {
    if(td.classList.contains('selected')){
      td.classList.remove('selected')
    } else {
      td.classList.add('selected')
    }
  })

}