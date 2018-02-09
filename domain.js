const getDomain = () => {

}

const testArr = ['google.com', 'www.yahoo.com', 'http://www.espn.com', 'https://www.pacific.edu'];

for (let i = 0; i < testArr.length; i++) {
  console.log(getDomain(testArr[i]));
}