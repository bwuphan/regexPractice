const getDomain = (email) => {
  const regex = /[A-Za-z0-9.!#$%&'*+-/=?^_`{|}]+@(.+)\.\w+/g;
  return regex.exec(email)[1];
}


const testArr = ['bwuphan@gmail.com', 't@ucdavis.edu', 'df.er@yahoo.com', 'snlam@u.o.pacific.edu'];

for (let i = 0; i < testArr.length; i++) {
  console.log(getDomain(testArr[i]));
}