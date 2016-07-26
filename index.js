const readline = require( 'readline' )

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readInterface.question( "Is this working? ", answer => {
  console.log( `You answered ${answer}` )

  readInterface.close()
})
