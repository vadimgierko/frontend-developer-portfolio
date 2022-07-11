export const DATA = {
	header: {
		navbar: {
			brand: {
				content: "Vadim Gierko",
			},
			links: [
				{
					name: "About",
					link: "#about",
				},
				{
					name: "Tech Stack",
					link: "#tech-stack",
				},
				{
					name: "What Can I Build",
					link: "#what-can-i-build",
				},
				{
					name: "Projects",
					link: "#projects",
				},
				{
					name: "Currently Learning",
					link: "#currently-learning",
				},
				{
					name: "Creative Background",
					link: "#creative-background",
				},
				{
					name: "Blog",
					link: "https://vadimgierko.github.io/blogging-platform/#/blogs/my-programming-journey/summary-of-my-first-year-of-learning-web-development-roadmap-projects-and-tips-for-newbies",
				},
			],
			socials: [
				{
					type: "github",
					url: "https://github.com/vadimgierko",
				},
				{
					type: "linkedin",
					url: "https://pl.linkedin.com/in/vadimgierko",
				},
			],
		},
	},
	about: {
		imgSrc:
			"https://vadimgierko.github.io/frontend-developer-portfolio/img/vadim-gerko-zdjecie-cv.jpg",
		title: "Hello, World!",
		content:
			"My name is Vadim Gierko and I’m a self-taught front-end developer (React) based in Lublin LOOKING FOR A FIRST DEV JOB!",
	},
	projects: [
		{
			name: "Dev Portfolio",
			img: "img/dev-portfolio-react-bootstrap-screen-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/frontend-developer-portfolio",
			repoUrl: "https://github.com/vadimgierko/frontend-developer-portfolio",
			techStack: [
				"react",
				"react-bootstrap",
				"bootstrap",
				"react-icons",
				"gh-pages",
			],
			features: ["rwd", "dark mode"],
			shortDescription:
				"Developer portfolio designed & developed by myself using React Bootstrap components for styling.",
		},
		{
			name: "Linky Notes",
			img: "img/linky-notes-app-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/linky-notes/",
			repoUrl: "https://github.com/vadimgierko/linky-notes",
			techStack: [
				"react",
				"react-router",
				"firebase",
				"bootstrap",
				"bootstrap-icons",
				"gh-pages",
			],
			features: [
				"crud",
				"database",
				"routing",
				"users authentication",
				"rwd",
				"dark mode",
			],
			shortDescription:
				"Organize & filter your notes with tags & create your own knowledge base!",
			description:
				"This full-stack integrated with Firebase single page app allows you to create tagged notes with an indication of the bibliographic source. Thanks to that your notes are linked with each other & grouped by tags. You don't need to put your notes into folders or do any index or table of content anymore! You can easily find your note by filtering notes by one or more tags thanks to search engine (of which I'm proud ;-) You're saving a tone of time to organize & efficiently use your notes! At the moment this SPA is available for my personal use only. I couldn't manage hunderds of my notes, so I've decided to build this app and I'm happy, that finally I've solved one of my biggest problems thanks to my own app. You can see some of my notes, but cannot sign up at the moment or modify my database. App is still is still being developed, growing & tested by me, so when right time comes, I'll enable creating accounts for users like you ;-)",
		},
		{
			name: "Blogging Platform with Markdown Text Editor",
			img: "img/blogging-platform-vadim-gierko-screen.png",
			gp: "https://vadimgierko.github.io/blogging-platform/",
			repoUrl: "https://github.com/vadimgierko/blogging-platform",
			techStack: [
				"react",
				"react-router",
				"react-markdown",
				"firebase",
				"bootstrap",
				"bootstrap-icons",
				"bootswatch",
				"gh-pages",
			],
			features: [
				"crud",
				"database",
				"routing",
				"users authentication",
				"rwd",
				"markdown editor",
			],
			shortDescription:
				"Run your blog for free & edit your articles via Markdown Editor!",
			description:
				"This full-stack SPA allows you to create & run your blog (or many blogs) for free after creating a free user account, write & edit your articles with simple & intuitive markdown text editor (which was also created by myself) & read published blogs without authentication. There is a small blog called 'My Programming Journey', where I published a few articles. This app & linky_notes app (see above) are my newest, most complex & advanced responsive full-stack single-page real-world applications, that support all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, React Router, Bootstrap) and realtime database & authentication integration (Firebase).",
		},
		{
			name: "GitHub API Users Search App",
			img: "img/github-user-search-app-screen-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/github-api-users-search-app/#/vadimgierko",
			repoUrl: "https://github.com/vadimgierko/github-api-users-search-app",
			techStack: [
				"react",
				"github api",
				"bootstrap",
				"bootstrap-icons",
				"gh-pages",
			],
			features: ["api", "routing", "rwd"],
			shortDescription:
				"Find any user on GitHub & see his/her public repositories!",
			description:
				"This responsive SPA allows you to find & view any user's basic profile info & public repositories published on GitHub! Input the correct GitHub User username in search field or... add username after slash to app's url & you will see: 1). user's bio, profile image & open source projects with descriptions (if exist) linked to the github repositories or github pages (if exist).",
		},
		{
			name: "Mind Maps App",
			img: "img/mind-maps-app-screen-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/MIND-MAP-APP/",
			repoUrl: "https://github.com/vadimgierko/MIND-MAP-APP",
			techStack: [
				"javascript",
				"p5.js",
				"jquery",
				"bootstrap",
				"bootstrap-icons",
				"firebase",
			],
			features: ["crud", "database", "users authentication", "rwd"],
			shortDescription:
				"Create, save & edit your mind maps online with this app!",
			description:
				"Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords) You sign up & create the account, so you will be able to save a mind map as a project (for future edition) in your user's database (Firebase) and/or download your mind map as a PNG file with one click!",
		},
		{
			name: "Old School 2D Racing Game",
			img: "img/old-school-racing-game-p5-js-vadim-gierko-2.png",
			gp: "https://vadimgierko.github.io/old-school-2d-racing-game/",
			repoUrl: "https://github.com/vadimgierko/old-school-2d-racing-game",
			techStack: ["javascript", "p5.js", "bootstrap-icons"],
			features: ["animation", "rwd"],
			shortDescription: "Play the old school 2D racing game!",
			description:
				"Old-school 2D racing game created in JavaScript using p5.js library. I've started to develop this game at the beggining of my programming journey, but... had not enough knowledge to finish it then. So now, after 10 months brake I've figured all bugs & problems out, so the game is finally completed! I love working with p5.js, which alows you to create animations like this in that game, and thanks to this library I've made my first steps in programming learning with Khan Academy online courses, so it was a pleasure to come back to old habbits after 10 months of working mainly with React & other technologies ;-) Car's design was inspired by drawing of my son! Enjoy!",
		},
		{
			name: "Let It Snow! Falling Snow Animation",
			img: "img/let-it-snow-p5-javascript-animation-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/let-it-snow/",
			repoUrl: "https://github.com/vadimgierko/let-it-snow",
			techStack: ["javascript", "p5.js"],
			features: ["animation", "rwd"],
			shortDescription:
				"Listen to the beautiful Let it snow song while watching animated falling snow!",
			description:
				"This Christmas Online Animated Musical Card was made using Javascript & p5.js library. To make the animation seem more realistic, I created a pseudo 3D illusion thanks to basic knowledge of perspective: 1). there are 3 layers of snow, 2). more distant snowflakes are smaller, while closer are larger, 3). more distant snowflakes fall slower, and closer ones fall faster. In addition, I've implemented noise effect (noise() in p5.js) to falling snow, so now it seems to fall more naturally, and mountains. And finally, there are 4-sized trees: randomly positioned after each page reload, more distant trees are smaller & darker, closer trees are lighter & bigger. Let it snow!",
		},
		{
			name: "Live Markdown Text Editor",
			img: "img/markdown-text-editor-by-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/markdown-text-editor/",
			repoUrl: "https://github.com/vadimgierko/markdown-text-editor",
			techStack: [
				"react",
				"react-router",
				"react-markdown",
				"remark-gfm",
				"bootstrap",
				"local-storage-api",
				"gh-pages",
			],
			features: ["routing", "markdown editor", "local storage", "rwd"],
			shortDescription:
				"Check how your Markdown text will look like when rendered!",
			description:
				"Live Markdown Text Editor lets you write text using markdown language & render it as an HTML. The feature can be (and will be) used as a text editor in my Blogging Platform App (my most advanced fullstack application which comes very soon) & many others apps.",
		},
		{
			name: "Pixel Draw App",
			img: "img/pixel-draw-app-screen-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/PixelDrawApp/",
			repoUrl: "https://github.com/vadimgierko/PixelDrawApp",
			techStack: ["react", "bootstrap", "bootstrap-icons"],
			features: ["crud", "local storage", "rwd"],
			shortDescription: "Create, save and edit your first pixel art!",
			description:
				"Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database.",
		},
		{
			name: "Snake Game Clone",
			img: "img/snake-game-clone-screen-vadim-gierko.png",
			gp: "https://vadimgierko.github.io/snake-game-react/",
			repoUrl: "https://github.com/vadimgierko/snake-game-react",
			techStack: ["react", "javascript", "react-icons", "css"],
			features: ["game-loop", "rwd"],
			shortDescription:
				"Old School 2D Snake Game for desktop & mobile written in React. Enjoy!",
			description: "",
		},
		{
			name: "Sudoku Solver",
			img: "img/sudoku-solver-app-screen-vadim-gierko.png",
			gp: "https://codesandbox.io/s/sudoku-solver-ip90ku",
			repoUrl: "https://github.com/vadimgierko/sudoku-solver",
			techStack: ["react", "javascript"],
			features: ["sudoku-solver-algorithm"],
			shortDescription:
				"Input easy sudoku into the board & let the algorithm solve it!",
			description: "",
		},
	],
	footer: {
		releaseYear: 2021,
		links: [
			{
				label: "Vadim Gierko",
				link: "https://github.com/vadimgierko",
			},
			{
				label: "[source code]",
				link: "https://github.com/vadimgierko/frontend-developer-portfolio",
			},
			// {
			//   label: "CodeSandbox",
			//   link:
			//     "https://codesandbox.io/s/2d-game-starter-template-with-built-in-timer-t96xxt" // input link to CodeSandbox demo here
			// }
		],
	},
};
