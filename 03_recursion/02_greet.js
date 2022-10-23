/**
 * Displays a message to the console
 * @param {string} name Name
 */
const greet2 = (name) => console.log(`How are you, ${name}`)

/**
 * Displays a message to the console
 */
const bye = () => console.log('ok bye!')

/**
 * Displays a message to the console
 * @param {string} name Name
 */
const greet = (name) => {
  console.log('Hey', name)
  greet2(name)
  console.log('getting ready to say good bye!')
  bye()
}

greet('Tayanne')
/* Hey Tayanne
How are you, Tayanne
getting ready to say good bye!
ok bye! */
