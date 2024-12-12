const buttonEl = document.getElementById('button')
const hiddenEl = document.querySelectorAll('#hidden')

buttonEl.addEventListener('click', viewMore)

function viewMore() {
  hiddenEl.forEach((el) => {
    el.classList.toggle('hidden')
    
  if (el.classList.contains('hidden')) {
    buttonEl.textContent = 'View More'
  } else {
    buttonEl.textContent = 'View Less'
  }
  })

}