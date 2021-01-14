const button  = document.querySelector('#start') 
const tiles = Array.from(document.querySelectorAll('.tile'))
const points = document.getElementById('points')
console.log(points)
const test = document.getElementById('test')
console.log(tiles)
console.log(test)



// start game button 
button.addEventListener('click',()=>{
  let randomTile
  function randomPosition(){
    randomTile = Math.floor(Math.random() * tiles.length + 1)
  }
  randomPosition()
  point11 = 0
  function lifeCicale (){
    let firstIntervalCount = 0
    const firstIntervalId = setInterval(()=>{
      firstIntervalCount++
      // console.log(firstIntervalCount)
      if (firstIntervalCount === 1){
        randomPosition()
        tiles[randomTile].classList.add('mole')
      } else {
        clearInterval(firstIntervalId)
      }
    },1000)
   
    let secondIntervalCount = 0
    const secondIntervalId = setInterval(()=>{
      secondIntervalCount++
      if (secondIntervalCount === 1){
        tiles[randomTile].classList.remove('mole')
        
        randomPosition()
      } else {
        clearInterval(secondIntervalId)
      }
    },3000)
  }

  const thirdIntrvalId = setInterval(()=>{
    lifeCicale()
  }, 4000) 

  tiles.forEach((tile)=>{
    tile.addEventListener('click', ()=>{
      if (tile.classList.contains('mole')){
    
        alert('heeeey you have now 100 points,make 1000000000000000000 points to get a free coffee voucher 🏅')
      }
    })
  })
})





