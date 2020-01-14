function timer() {
  let inputNumbers = process.argv.slice(2);
  let numbers = inputNumbers.map(Number);
  let filtered = numbers.filter((item) => {
    return item >=0 && Number.isInteger(item)
  })
  filtered.forEach(element => {
    setTimeout (() =>{
      process.stdout.write('\x07')
    }, element * 1000)
  });
}
timer()


// string = number.parseInt()
// string.filter(string )