const greet2 = (name) => console.log(`How are you, ${name}`)

const bye = () => console.log('ok bye!')

const greet = (name) => {
  console.log('Hey', name)
  greet2(name)
  console.log('getting ready to say good bye!')
  bye()
}

greet('Tayanne')
