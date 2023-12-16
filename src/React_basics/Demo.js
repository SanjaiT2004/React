// import { useEffect } from "react"
// import axios from "axios"
// const Demo = () => {
//     useEffect(() => {
//         const de = async () => {
//             const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//             console.log(data);
            
//         }
//         de();
//     },[])
// }

// export default Demo;


/* callback - series of function calls one after another .
/*
function add(a, b, sub) {
  sub(a, b, mul);
  console.log(a + b);
}
function sub(a, b) {
  mul(div);
  console.log(a - b);
}
function div() {
  modulo();
}
add(10, 5, sub);
*/

/* Promises*/

//     const myPromise = new Promise((resolve, reject) => {
//         let promise = false;
//         if (promise) resolve("Yes ! promise was kept");
//         else reject("No! the promise is nt kept");
//     });




//  console.log(myPromise);
// const result = myPromise
//   .then((value) => {
//       console.log(value);
//   })
//   .then((newValue) => console.log(newValue))
//   .catch((err) => console.log(err));




// Promises pending status

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
       // console.log(typeof(response));
    return response.json();
  })
  .then((values) =>
    values.forEach((element) => {
      console.log(element);
    })
  );
// const users = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(users);


const user = async () => {
    const returedPromises = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await returedPromises.json();
    printUser(userData);
};

const printUser = (userData) => {
    userData.forEach((element) => {
        console.log(element);
    });
};

user();

