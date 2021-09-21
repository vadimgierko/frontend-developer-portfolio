const data = {
    socials: ["github"],
    links: ["https://github.com/vadimgierko", "https://pl.linkedin.com/in/vadimgierko"],
    projects: [
        {
            name: "Blog",
            img: "img/blog-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/Blog/",
            repoUrl: "https://github.com/vadimgierko/Blog",
            language: "JavaScript (React), Bootstrap",
            description: "Blog app with edition features like adding, deleting & editing posts with images + navbar settings (name of the blog, social media links & www) using local storage to store your content in your browser. (Updates: the new version of this app with database (Firebase) integration is almost ready!)"
        },
        {
            name: "MIND-MAP-APP",
            img: "img/template-mind-map-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/MIND-MAP-APP/",
            repoUrl: "https://github.com/vadimgierko/MIND-MAP-APP",
            language: "JavaScript (p5.js, jQuery), Bootstrap, Firebase",
            description: "Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords), save a mind map as a project (for future edition) in your user's database and/or download your mind map as a PNG file with one click!"
        },
        {
            name: "GitHub-Users-Search-App",
            img: "img/github-user-search-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/GitHub-Users-Search-App/",
            repoUrl: "https://github.com/vadimgierko/GitHub-Users-Search-App",
            language: "JavaScript (React, fetch, API), Bootstrap",
            description: "Simple GitHub Users Searching App. Input the correct user name and see his bio, profile image & open source projects descriptions linked to the github repositories."}
            ,
        {
            name: "PixelDrawApp",
            img: "img/pixel-draw-app-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/PixelDrawApp/",
            repoUrl: "https://github.com/vadimgierko/PixelDrawApp",
            language: "React, Bootstrap",
            description: "Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database."
        },
        {
            name: "CMS",
            img: "img/vadim-gierko-developer-portfolio-screen.png",
            gp: null,
            repoUrl: null,
            language: "Front-end (style & logic): JavaScript (ES6), React, jQuery, Bootstrap; Back-end (storage, database, security rules & authentication): Firebase",
            description: "My first full-stack Content Management System integrated with Firebase, which allows add/ delete/ edit sections & content (text & images) for connected web page template (also designed & programmed by me). You can start from a completely empty web page template & start adding sections in CMS, which will show up in main section & in header & navbar. No sections (names or types) are hardcoded - CMS reacts for a data it's fetched. The App works fine & and you can manage a content of a simple page, like this portfolio, but for a moment it's just a foundation for future development. This System will be used as a main CMS for my future web pages. PS. GitHub repository of this project isn't public ;-)",
        },
        {
            name: "Quiz-about-Lublin",
            img: "img/quiz-about-lublin-screen-vadim-gierko.png",
            gp: "https://vadimgierko.github.io/Quiz-about-Lublin/",
            repoUrl: "https://github.com/vadimgierko/Quiz-about-Lublin",
            language: "JavaScript (React, Bootstrap)",
            description: "This is the quiz about my hometown - Lublin - made using React and React-Bootstrap. Answer to the 12 questions and check out your knowledge about Lublin!"
        },
    ],
    //socials: ["instagram", "facebook", "linkedin", "youtube", "github"],
    //links: ["#", "#", "#", "#", "#"],
    page: `https://vadimgierko.com/`,
};

export default data;