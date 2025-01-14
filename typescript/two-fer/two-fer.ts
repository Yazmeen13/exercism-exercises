/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(n?: string): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.

  var names:string[] = ["Alice", "Bob" ,"Zaphod"]
  var word

  if(n == null){
    word = "you"
  }else{
    if(names.includes(n)) {
      word = n
    }
    else{
      word = "you"
    }
  }

  return `One for ${word}, one for me.`

}
