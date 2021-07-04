console.log('hello World')


let experience = 0
let clicks = 1
let sword = 0
let enchant = 0
let blade = 0
let lucky = 0
let swordprice = 100
let enchantprice = 3000
let bladeprice = 1000
let luckprice = 50000
let swordxp = 0
let enchantmentxp = 0
let blademasteryxp = 0
let goblinhealth = 300



// NOTE This function will be the clicker for the player. When they click on the picture, add experience.
function clickButton() {
  experience += clicks

  update()
}

// NOTE This function should update the current experience available to the player.
function update() {
  document.getElementById('Exp').innerHTML = `<h3> Experience: ${experience} </h3>`

  document.getElementById('bladexp').innerHTML = `<p>(+${blademasteryxp} XP Per 3 seconds)</p>`

}

// NOTE When Upgrade Sword button is clicked, increase the experience gained for each click by 1.5 times. Also increase the cost of the button
function upgradeSword() {
  if (experience >= swordprice) {
    sword += 1
    experience = experience - swordprice
    swordprice = Math.floor(swordprice * 1.5)
    clicks = clicks + 15
    swordxp += 15

    console.log(experience)
    console.log(swordprice)
    console.log(clicks)
    console.log(sword)
    document.getElementById('sword').innerHTML = `<h5> Sword: ${sword} </h5>`
    document.getElementById('swordprice').innerHTML = ` ${swordprice}`
    document.getElementById('swordxp').innerHTML = `<p>(+${swordxp} XP per click)</p>`

    update()
  }
}


// NOTE When Apply Enchantment is clicked, increase the experienced gained by each click by 3 times also increase the cost of the button
function ApplyEnchantment() {
  if (experience >= enchantprice) {
    enchant += 1
    experience = experience - enchantprice
    enchantprice = Math.floor(enchantprice * 3)
    clicks = clicks + 250
    enchantmentxp += 250

    console.log(experience)
    console.log(enchantprice)
    console.log(clicks)
    console.log(enchant)
    document.getElementById('ench').innerHTML = `<h5> Enchant: ${enchant} </h5>`
    document.getElementById('enchprice').innerHTML = ` ${enchantprice} `
    document.getElementById('enchxp').innerHTML = `<p>(+${enchantmentxp} XP per click)</p>`

    update()
  }

}


// NOTE Automatic function that clicks for the player every 3 seconds
function bladeMastery() {
  if (experience >= bladeprice) {
    blade += 1
    experience = experience - bladeprice
    bladeprice = Math.floor(bladeprice * 2)
    setInterval(clickButton, 2000)
    blademasteryxp += clicks


    document.getElementById('blade').innerHTML = `<h5> Blades: ${blade} </h5>`

    document.getElementById('bladeprice').innerHTML = `${bladeprice}`
    document.getElementById('bladexp').innerHTML = `<p>(+${blademasteryxp} XP Per 3 seconds)</p>`


    update()
  }
}

// NOTE Function that starts the yourelucky function and disables the button
function increaseluck() {
  if (experience >= luckprice) {
    luck += 1
    experience = experience - luckprice
    luckprice = Math.floor(luckprice * 2)
    setInterval(yourelucky, 20000)

    document.getElementById('lucky').innerHTML = ` <h5> You're Lucky! </h5>`
    document.getElementById('luck').innerHTML = `<button disabled class="btn btn-success" onclick="increaseluck()">
    <h4>Lucky</h4>
  </button>`

    update()
  }
}


// NOTE Function for interval luck experience
function yourelucky() {
  experience = experience + (clicks * 150)
  console.log(experience)

  update()
}


// NOTE Function to draw lucky button
function drawbtn() {
  document.getElementById('luck').innerHTML = `
  <button class="btn btn-success" onclick="increaseluck()">
                <h4>Lucky 50000</h4>
              </button>`
}


// NOTE Function that draws the starting modifiers for the shop functions

function drawPrices() {

  document.getElementById('sword').innerHTML = `<h5> Sword: ${sword} </h5>`
  document.getElementById('swordprice').innerHTML = ` ${swordprice}  `
  document.getElementById('swordxp').innerHTML = `<p>(+${swordxp} XP per click)</p>`


  document.getElementById('ench').innerHTML = `<h5> Enchant: ${enchant} </h5>`
  document.getElementById('enchprice').innerHTML = ` ${enchantprice} `
  document.getElementById('enchxp').innerHTML = `<p>(+${enchantmentxp} XP per click)</p>`


  document.getElementById('blade').innerHTML = `<h5> Blades: ${blade} </h5>`
  document.getElementById('bladeprice').innerHTML = `${bladeprice}`
  document.getElementById('bladexp').innerHTML = `<p>(+${blademasteryxp} XP Per 3 seconds)</p>`


  update()
}


// NOTE Function that reduces health of the goblin
function hurtgoblin() {
  goblinhealth -= clicks
  if (goblinhealth <= 0) {

  }
}

drawbtn()
update()
drawPrices()