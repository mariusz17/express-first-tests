import exp from "constants";
import express from "express";
import fs from "fs";
import path from "path";
import cookieParser from "cookie-parser";
import usersRoutes from "./routes/users.js";

const __dirname = path.resolve();

const app = express();
// app.use(express.static("./static")); //to zawsze na początku dawać!!!

app.use(cookieParser());
app.use(express.json()); //to zawsze na początku dawać!!!

// app.all("/", (req, res) => {
// 	// console.log(req.originalUrl);
// 	// console.log("req.protocol", req.protocol);
// 	// console.log("req.secure", req.secure);

// 	const { name, surname } = req.query; //to się nazywa destrukturyzacja, deklaracja dwóch zmiennych, do których przypisujemy wartości dwóch zmiennych obiektu

// 	console.log(`Hello ${name} ${surname}`);
// 	console.log(req.get("Referer"));
// });

//przykłady metod obiektu express:
// app.get("/", (req) => {
// 	console.log("Spis ludzi");
// });

// app.get("/:id", (req) => {
// 	console.log("Informacja szczegółowa na temat osoby o ID: " + req.params.id);
// });

// app.post("/", (req) => {
// 	console.log("Dodawanie nowej osoby");
// });

// app.patch("/:id", (req) => {
// 	console.log("Aktualizacja osoby z ID: " + req.params.id);
// });

// app.delete("/:id", (req) => {
// 	console.log("Usuwanie osoby z ID: " + req.params.id);
// });

// //Express czyta ścieżki po kolei, czyli tutaj trzeba najpierw dać "hello/new-user", a dopiero potem "hello/:name"
// app.get("/hello/new-user", (req) => {
// 	console.log("Dodawanie nowego użytkownika");
// });

// app.get("/hello/:name", (req) => {
// 	console.log("Hello " + req.params.name);
// });

// //Zmienna + zmienna nieobowiązkowa
// app.get("/article/:id/:title?", (req) => {
// 	console.log(req.params);
// });

// app.get("/", (req, res) => {
// 	const str = "Zażółć gęślą jaźń";
// 	const arr = str.split(" ");

// 	res.send(arr);
// 	// res.json(str);
// });

// app.get("/home/about/company", (req, res) => {
// 	// res.location("https://google.com");
// 	// res.sendStatus(302);
// 	res.redirect("./");
// });

// app.get("/", (req, res) => {
// 	res.send(`<!DOCTYPE html
// 	<html>
// 	<body>
// 	<img src="/logo"">
// 	</body>
// 	</html>`);
// });

// app.get("/logo", (req, res) => {
// 	const fileName = "logo.png";

// 	res.download(path.join(__dirname, "static/logo.png"));

// 	// res.sendFile(fileName, {
// 	// 	root: path.join(__dirname, "static"),
// 	// });
// });

app.get("/", (req, res) => {
	const { visitorName } = req.cookies;
	if (visitorName) res.send(`Cześć ${visitorName}`);
	else res.send("Czy my się znamy?");
});

usersRoutes(app);

app.listen(3000, () => {
	console.log("Server is listening at: http://localhost:3000");
});
