const sentence = "hello there from lighthouse labs \n";
/*for (const char of sentence) {
  console.log(char);
  setTimeout(() => {
    process.stdout.write(char);
  },1000);
}
*/

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },delay);
  delay += 50;
}