const input = document.querySelector('.inputval')
const btn = document.querySelector('.btn')
const header = document.querySelector('.header')
const container = document.querySelector('.container')
const getRandomValue = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let randomValue = getRandomValue(1, 2)
let stage = 1
let point = 0

btn.addEventListener('click', () => {
  let userInput = Number(input.value)
  if (stage === 1) {
    if (userInput !== '') {
      if (userInput === randomValue) {
        stage += 1
        point += 1
        header.innerHTML = `Enter a value between the range of 1 and 3`
        randomValue = getRandomValue(1, 3)
        input.setAttribute('max', '3')
        alert(`You entered value ${userInput} you guessed right`)
        userInput = ''
        input.value = ''
        alert(`Enter a Number Between 1 and 3`)
      } else {
        if (input.value === '') {
          alert('Enter a value')
        } else {
          alert(`Opps! the value you entered is wrong`)
          stage = 1
          userInput = ''
          input.value = ''
        }
      }
    }
  }
  if (stage === 2) {
    if (userInput !== '') {
      if (userInput === randomValue) {
        stage += 1
        point += 1
        header.innerHTML = `Enter a value between the range of 1 and 4`
        randomValue = getRandomValue(1, 4)
        input.setAttribute('max', '4')
        alert(`You entered value ${userInput} you guessed right`)
        userInput = ''
        input.value = ''
        alert(`Enter a value Between the range of 1 and 4`)
      } else {
        if (input.value === '') {
          alert('Enter a value')
        } else {
          alert(`Opps! the value you entered is wrong`)
          userInput = ''
          input.value = ''
        }
      }
    }
  }
  if (stage === 3) {
    if (userInput !== '') {
      if (userInput === randomValue) {
        stage += 1
        point += 1
        header.innerHTML = `Enter a value between the range of 1 and 5`
        randomValue = getRandomValue(1, 5)
        input.setAttribute('max', '5')
        alert(`You entered the value ${userInput} you guessed right`)
        userInput = ''
        input.value = ''
        alert(`Enter a value Between the range of 1 and 5`)
      } else {
        if (input.value === '') {
          alert('Enter a value')
        } else {
          alert(`Opps! the value you entered is wrong`)
          userInput = ''
          input.value = ''
        }
      }
    }
  }

  if (stage === 4) {
    if (userInput !== '') {
      if (userInput === randomValue) {
        stage += 1
        point += 1
        header.innerHTML = `Enter a value between the range of 1 and 6`
        randomValue = getRandomValue(1, 6)
        input.setAttribute('max', '6')
        alert(`You entered the value ${userInput} you guessed right`)
        userInput = ''
        input.value = ''
        alert(`Enter a value between the range of 1 and 6`)
      } else {
        if (input.value === '') {
          alert('Enter a value')
        } else {
          alert(`Opps! the value you entered is wrong`)
          userInput = ''
          input.value = ''
        }
      }
    }
  }
  if (stage === 5) {
    if (userInput !== '') {
      if (userInput === randomValue) {
        point += 1
        header.innerHTML = `Enter a value between the range of 1 and 7`
        randomValue = getRandomValue(1, 7)
        input.setAttribute('max', '7')
        alert(`You entered the value ${userInput} you guessed right`)
        userInput = ''
        input.value = ''
        container.innerHTML = `You scored ${point}/${stage}`
      } else {
        if (input.value === '') {
          alert('Enter a value')
        } else {
          alert(`Opps! the value you entered is wrong `)
          userInput = ''
          input.value = ''
        }
      }
    }
  }
})
