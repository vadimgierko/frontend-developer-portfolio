const data = {
    socials: ["github"],
    links: ["https://github.com/vadimgierko", "https://pl.linkedin.com/in/vadimgierko"],
    projects: [
        {
            name: "Blogging Platform",
            img: "img/blogging-platform-vadim-gierko-screen.png",
            gp: "https://vadimgierko.github.io/blogging-platform/",
            repoUrl: "https://github.com/vadimgierko/blogging-platform",
            language: "React, React-Context, React-Router, React-Markdown, Bootstrap, Bootswatch, Firebase (realtime database, security rules & authentication), GitHub Pages",
            description: "Blogging Platform allows you to create & run your blog (or many blogs) for free after creating a free user account, write & edit your articles with simple & intuitive markdown text editor (which was also created by myself) & read published blogs without authentication. This is my newest, most complex & advanced responsive full-stack single-page real-world application, which supports all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, Bootstrap) and realtime database integration (Firebase).",
        },
        {
            name: "GitHub-API-Users-Search-App",
            img: "img/github-user-search-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/github-api-users-search-app/#/vadimgierko",
            repoUrl: "https://github.com/vadimgierko/github-api-users-search-app",
            language: "React, React Router, Bootstrap, GitHub API, RWD, gh-pages deployment",
            description: "This responsive SPA allows you to find & view any user's basic profile info & public repositories published on GitHub! Input the correct GitHub User username in search field or... add username after slash to app's url & you will see: 1). user's bio, profile image & open source projects with descriptions (if exist) linked to the github repositories or github pages (if exist)."
        },
        {
            name: "Mind Maps App",
            img: "img/mind-maps-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/MIND-MAP-APP/",
            repoUrl: "https://github.com/vadimgierko/MIND-MAP-APP",
            language: "JavaScript, p5.js, jQuery, Bootstrap, Firebase",
            description: "Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords) You sign up & create the account, so you will be able to save a mind map as a project (for future edition) in your user's database (Firebase) and/or download your mind map as a PNG file with one click!"
        },
        {
            name: "Pixel Draw App",
            img: "img/pixel-draw-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/PixelDrawApp/",
            repoUrl: "https://github.com/vadimgierko/PixelDrawApp",
            language: "React, Bootstrap",
            description: "Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database."
        },
        {
            name: "Live Markdown Text Editor",
            img: "img/markdown-text-editor-by-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/markdown-text-editor/",
            repoUrl: "https://github.com/vadimgierko/markdown-text-editor",
            language: "React, React-Markdown, remark gfm plugin, Bootstrap, Local Storage (to simulate database)",
            description: "Live Markdown Text Editor lets you write text using markdown language & render it as an HTML. The feature can be (and will be) used as a text editor in my Blogging Platform App (my most advanced fullstack application which comes very soon) & many others apps."
        },
        {
            name: "Old School 2D Racing Game",
            img: "img/old-school-racing-game-p5-js-vadim-gierko-2.png",
            gp: "https://vadimgierko.github.io/old-school-2d-racing-game/",
            repoUrl: "https://github.com/vadimgierko/old-school-2d-racing-game",
            language: "JavaScript, p5.js library, Bootstrap Icons",
            description: "Old-school 2D racing game created in JavaScript using p5.js library. I've started to develop this game at the beggining of my programming journey, but... had not enough knowledge to finish it then. So now, after 10 months brake I've figured all bugs & problems out, so the game is finally completed! I love working with p5.js, which alows you to create animations like this in that game, and thanks to this library I've made my first steps in programming learning with Khan Academy online courses, so it was a pleasure to come back to old habbits after 10 months of working mainly with React & other technologies ;-) Car's design was inspired by drawing of my son! Enjoy!"
        },
        {
            name: "Quiz about Lublin",
            img: "img/quiz-about-lublin-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/Quiz-about-Lublin/",
            repoUrl: "https://github.com/vadimgierko/Quiz-about-Lublin",
            language: "React, React-Bootstrap",
            description: "This is the quiz about my hometown - Lublin - made using React and React-Bootstrap. Answer to the 12 questions and check out your knowledge about Lublin!"
        }
    ],
    page: `https://vadimgierko.com/`,
};

export default data;