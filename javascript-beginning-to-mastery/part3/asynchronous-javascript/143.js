// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });

//get req practice
// fetch(URL)
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("something went wrong");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("inside catch");
//     console.log(err);
//   });

//post req practice
fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("inside catch");
    console.log(err);
  });
