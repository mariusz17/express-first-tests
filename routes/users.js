function usersRoutes(app) {
	app.get("/hi/:name", (req, res) => {
		const name = req.params.name;
		const dt = new Date();
		dt.setDate(dt.getDate() + 7);

		res.cookie("visitorName", name, {
			expires: dt,
			//lub ciastko ma żyć przez 5 minut, podając w ms:
			// maxAge: 5 * 60 * 1000,
		});
		res.send("Zapisano imię.");
	});

	app.get("/logout", (req, res) => {
		res.clearCookie("visitorName");
		res.redirect("/");
	});

	app.post("/hello", (req, res) => {
		const { name, surname } = req.body;
		console.log(req.body);
		res.send(`Witaj ${name} ${surname}`);
	});
}

export default usersRoutes;
