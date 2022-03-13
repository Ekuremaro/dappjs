// console.log(__dirname);
// console.log(__filename);

// console.log(require);

// setInterval(() => {
//   console.log("hello world");
// }, 1000);

//modules
// const names = require("./names");
// console.log(names);

// const sayHi = require("./5-utils");

// sayHi(names.peter);
// sayHi(names.john);

// const data = require("./6-opn");
// console.log(data);

// require("./7-mind-grenande"); this function is already called on the other side so when it is required here it runs automatically.
// const os = require("os");

//info about current user.
// const user = os.userInfo();
// console.log(user);
//methos returns system uptime in sec

// console.log(`the system uptime is ${os.uptime} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

//path module
// const path = require("path");
// console.log(path.sep);
// const filePath = path.join("/content/", "subfolder", "test.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
// console.log(absolute);

//file modules

//this is the syncronous method
// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/test.txt", "utf-8");
// const second = readFileSync("./content/2ndtext.txt", "utf-8");

// console.log(first, second);

// writeFileSync(
//   "./content/sync.txt",
//   `here is the result ${first} and also ${second}`,
//   { flag: "a" }
// );

//Async method
// const { readFile, writeFile } = require("fs");
// readFile("./content/test.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/2ndtext.txt", "utf-8", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/Async.txt",
//       `here is the result ${first} and also ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           console.log(result);
//         }
//       }
//     );
//   });
// });

//HTTP MODULE
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("welcome to our home page");
//   res.end();
// });
// server.listen(5000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("welcome to our about history page");
//   } else
//     res.end(`
//   <h1>Opps</h1>
//   <p>Cant seem to find the page that you are looking for<p>
//   <a href='/'>back home</a>
//   `);
// });
// server.listen(5000);

// console.log("hello world");

// const { readFile, truncateSync } = require("fs");
// console.log("started a first task");
// readFile("./content/test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   console.log("completed first task");
// });

// console.log("starting next task");

// console.log("first");
// setTimeout(() => {
//   console.log("second");
// }, 0);
// console.log("third");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request event");
//   res.end("hello world");
// });

// server.listen(5000, () => {
//   console.log("server listening on port : 5000");
// });

// const { readFile, writeFile } = require("fs").promises
// const start = async () => {
//   try {
//     const first = await readFile("./content/test.txt", "utf-8");
//     const second = await readFile("./content/2ndtext.txt", "utf-8");
//     console.log(first, second);
//     await writeFile(
//       "./content/subfolder/stuff.txt",
//       `Insane stuff, ${first}, ${second}`,
//       {
//         flag: "a",
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
