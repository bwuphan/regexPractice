const getDomain = (url) => {

}

const testArr = ['google.com', 'www.yahoo.com', 'http://www.espn.com', 'https://www.pacific.edu', 'www.r1.com'];

for (let i = 0; i < testArr.length; i++) {
  console.log(getDomain(testArr[i]));
}