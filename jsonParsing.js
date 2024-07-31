// // JSON string
// const jsonString = `
// {
//   "name": "John Doe",
//   "age": 30,
//   "email": "john.doe@example.com",
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "country": "USA"
//   },
//   "phoneNumbers": [
//     {
//       "type": "home",
//       "number": "555-1234"
//     },
//     {
//       "type": "work",
//       "number": "555-5678"
//     }
//   ]
// }
// `;

// // fetch data from json placeholder

// const response = await fetch()

// // Parse JSON string into a JavaScript object
// const jsonObject = JSON.parse(jsonString);

// // Accessing properties of the JavaScript object
// console.log("Name:", jsonObject.name); // Output: John Doe
// console.log("Age:", jsonObject.age); // Output: 30
// console.log("Email:", jsonObject.email); // Output: john.doe@example.com

// // Access nested object
// console.log("Address:", jsonObject.address);
// console.log("Street:", jsonObject.address.street); // Output: 123 Main St
// console.log("City:", jsonObject.address.city); // Output: Anytown
// console.log("Country:", jsonObject.address.country); // Output: USA

// // Access array of objects
// console.log("Phone Numbers:", jsonObject.phoneNumbers);
// jsonObject.phoneNumbers.forEach((phoneNumber)=>{

// })

// jsonObject.phoneNumbers.forEach((phoneNumber) => {
//     if (phoneNumber.type === "home"){
//         console.log(`${phoneNumber.type}: ${phoneNumber.number}`);

//     }
// });

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("Fetched Data:", data);

  // Access the first post
//   const firstPost = data.filter((user) => user.id === 1);
  const firstPost = data.find((user) => user.id === 1);

  console.log("First Post:", firstPost);

  // Access properties of the first post
  console.log("User ID:", firstPost.userId);
  console.log("Post ID:", firstPost.id);
  console.log("Title:", firstPost.title);
  console.log("Body:", firstPost.body);

  // Iterate over all posts and log their titles
  data.forEach((post) => {
    console.log(`Post ID: ${post.id}, Title: ${post.title}`);
  });
};

fetchPosts();
