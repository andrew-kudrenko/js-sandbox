function rotate(node, degrees) {
  node.style.transform = `rotate(${degrees}deg)`
  
  return node
}


function degreesPerTimes(times = 1) {
  return 360 / 60 * times
}


function tick(hourArrow, minArrow, secArrow) {
  const date = new Date()

  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  rotate(hourArrow, degreesPerTimes(hours))
  rotate(minArrow, degreesPerTimes(minutes))
  rotate(secArrow, degreesPerTimes(seconds))
}


function main() {
  const $hourArrow = document.getElementById('arrow-hours')
  const $minArrow = document.getElementById('arrow-minutes')
  const $secArrow = document.getElementById('arrow-seconds')
  
  const interval = setInterval(tick.bind(null, $hourArrow, $minArrow, $secArrow), 1000)
  
  window.addEventListener('close', clearInterval.bind(null, interval))
}


window.addEventListener('load', main)
