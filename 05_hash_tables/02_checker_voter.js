const voted = {}

const checkVoter = (name) => {
  if (voted[name]) console.log('Kick them out')
  else {
    console.log('let them vote')
    voted[name] = true
  }
}

checkVoter('Patricia') // let them vote
checkVoter('Tayh') // let them vote
checkVoter('Tayh') // kick them out
