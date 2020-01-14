const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function timer() {
  stdin.on('data', (key) => {
    process.stdout.write('\x07');
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!')
      process.exit();
     }
    if (key === 'b'){
      process.stdout.write('\x07')
    }
    if(numberList.includes(key)){
      setTimeout(() =>{
        process.stdout.write('\x07')
        console.log(`setting timer for ${key} seconds`)
      },key *1000)
    }
  });
}
timer()