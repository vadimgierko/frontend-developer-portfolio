const data = {
    socials: ["github"],
    links: ["https://github.com/vadimgierko", "https://pl.linkedin.com/in/vadimgierko"],
    projects: [
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
            name: "Quiz about Lublin",
            img: "img/quiz-about-lublin-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/Quiz-about-Lublin/",
            repoUrl: "https://github.com/vadimgierko/Quiz-about-Lublin",
            language: "React, React-Bootstrap",
            description: "This is the quiz about my hometown - Lublin - made using React and React-Bootstrap. Answer to the 12 questions and check out your knowledge about Lublin!"
        },
        {
            name: "Blog",
            img: "img/blog-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/Blog/",
            repoUrl: "https://github.com/vadimgierko/Blog",
            language: "React, Bootstrap, Local Storage",
            description: "Simple (and old) Blog app with edition features like adding, deleting & editing short posts with images + navbar settings (name of the blog, social media links & www) using local storage to store your content in your browser. (Updates: the new version of this app - Blogging Platform - with all CRUD features connected to realtime database (Firebase) & users authentication is almost ready!)"
        },
        {
            name: "CMS (private repository)",
            img: "img/vadim-gierko-developer-portfolio-screen.png",
            gp: null,
            repoUrl: null,
            language: "Front-end (style & logic): React, Bootstrap; Back-end (storage, database, security rules & authentication): Firebase",
            description: "My first full-stack Content Management System integrated with Firebase, which allows add/ delete/ edit sections & content (text & images) for connected web page template (also designed & programmed by me). You can start from a completely empty web page template & start adding sections in CMS, which will show up in main section & in header & navbar. No sections (names or types) are hardcoded - CMS reacts for a data it's fetched. The App works fine & and you can manage a content of a simple page, like this portfolio, but for a moment it's just a foundation for future development. This System will be used as a main CMS for my future web pages. PS. GitHub repository of this project isn't public ;-)",
        },
    ],
    page: `https://vadimgierko.com/`,
};

export default data;