(this["webpackJsonpfrontend-developer-portfolio"]=this["webpackJsonpfrontend-developer-portfolio"]||[]).push([[0],{19:function(e,t,r){},20:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),s=r(9),n=r.n(s),o=r(12),c=(r(17),r(18),r(19),r(20),r(7)),l=r(0);function d(e){for(var t=e,r=[],a=0;a<t.length;a++){var i=200*Math.random(),s=200*Math.random(),n=200*Math.random(),o="rgb(".concat(i,", ").concat(s,", ").concat(n,")"),c=Object(l.jsx)("span",{style:{color:o},children:t[a]},"span"+a);r.push(c)}return r}var m={socials:["github"],links:["https://github.com/vadimgierko","https://pl.linkedin.com/in/vadimgierko"],projects:[{name:"Blogging Platform",img:"img/blogging-platform-vadim-gierko-screen.png",gp:"https://vadimgierko.github.io/blogging-platform/",repoUrl:"https://github.com/vadimgierko/blogging-platform",language:"React, React-Context, React-Router, React-Markdown, Bootstrap, Bootswatch, Firebase (realtime database, security rules & authentication), GitHub Pages",description:"Blogging Platform allows you to create & run your blog (or many blogs) for free after creating a free user account, write & edit your articles with simple & intuitive markdown text editor (which was also created by myself) & read published blogs without authentication. This is my newest, most complex & advanced responsive full-stack single-page real-world application, which supports all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, Bootstrap) and realtime database integration (Firebase)."},{name:"GitHub-API-Users-Search-App",img:"img/github-user-search-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/github-api-users-search-app/#/vadimgierko",repoUrl:"https://github.com/vadimgierko/github-api-users-search-app",language:"React, React Router, Bootstrap, GitHub API, RWD, gh-pages deployment",description:"This responsive SPA allows you to find & view any user's basic profile info & public repositories published on GitHub! Input the correct GitHub User username in search field or... add username after slash to app's url & you will see: 1). user's bio, profile image & open source projects with descriptions (if exist) linked to the github repositories or github pages (if exist)."},{name:"Mind Maps App",img:"img/mind-maps-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/MIND-MAP-APP/",repoUrl:"https://github.com/vadimgierko/MIND-MAP-APP",language:"JavaScript, p5.js, jQuery, Bootstrap, Firebase",description:"Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords) You sign up & create the account, so you will be able to save a mind map as a project (for future edition) in your user's database (Firebase) and/or download your mind map as a PNG file with one click!"},{name:"Pixel Draw App",img:"img/pixel-draw-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/PixelDrawApp/",repoUrl:"https://github.com/vadimgierko/PixelDrawApp",language:"React, Bootstrap",description:"Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database."},{name:"Live Markdown Text Editor",img:"img/markdown-text-editor-by-vadim-gierko.png",gp:"https://vadimgierko.github.io/markdown-text-editor/",repoUrl:"https://github.com/vadimgierko/markdown-text-editor",language:"React, React-Markdown, remark gfm plugin, Bootstrap, Local Storage (to simulate database)",description:"Live Markdown Text Editor lets you write text using markdown language & render it as an HTML. The feature can be (and will be) used as a text editor in my Blogging Platform App (my most advanced fullstack application which comes very soon) & many others apps."},{name:"Quiz about Lublin",img:"img/quiz-about-lublin-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/Quiz-about-Lublin/",repoUrl:"https://github.com/vadimgierko/Quiz-about-Lublin",language:"React, React-Bootstrap",description:"This is the quiz about my hometown - Lublin - made using React and React-Bootstrap. Answer to the 12 questions and check out your knowledge about Lublin!"}],page:"https://vadimgierko.com/"};function h(e){var t=e.onClick;return Object(l.jsxs)("div",{className:"",style:{backgroundColor:"lightGrey",position:"fixed",top:"60px",right:"0",zIndex:"1"},children:[Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("a",{href:"#",className:"text-reset mx-3",onClick:function(){return t()},rel:"noreferrer",children:"Home"})}),Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("a",{href:"#about",className:"text-reset mx-3",onClick:function(){return t()},children:"About"})}),Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("a",{href:"#projects",className:"text-reset mx-3",onClick:function(){return t()},children:Object(l.jsx)("strong",{children:"Projects"})})}),Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("a",{href:"#courses",className:"text-reset mx-3",onClick:function(){return t()},children:"Taken Courses"})}),Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)("a",{href:"#background",className:"text-reset mx-3",onClick:function(){return t()},children:d("Creative Background").map((function(e){return e}))})}),m.socials.map((function(e,r){return Object(l.jsx)("a",{href:m.links[r]?m.links[r]:"#",target:"_blank",className:"nav-link text-reset mx-1",style:{cursor:"pointer"},onClick:function(){return t()},rel:"noreferrer",children:Object(l.jsx)("i",{className:"bi bi-".concat(e)})},e)})),Object(l.jsx)("a",{href:m.page?m.page:"#",target:"_blank",className:"nav-link text-reset mx-1",style:{cursor:"pointer"},onClick:function(){return t()},rel:"noreferrer",children:Object(l.jsx)("i",{className:"bi bi-globe"})})]})}function p(){var e=Object(a.useState)(window.innerWidth),t=Object(c.a)(e,2),r=t[0],i=t[1],s=Object(a.useState)(!1),n=Object(c.a)(s,2),o=n[0],p=n[1];return window.addEventListener("resize",(function(){i(window.innerWidth)})),r>1400?Object(l.jsx)("div",{className:"navbar bg-light navbar-light px-3",style:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"1"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"navbar-brand mb-0 col",children:[Object(l.jsx)("span",{className:"font-weight-bold text-secondary h3 me-3",children:"Vadim Gierko"}),Object(l.jsx)("span",{className:"text-muted",children:"front-end web developer portfolio"})]}),Object(l.jsx)("a",{href:"#",className:"mx-3 text-dark",style:{textDecoration:"none"},children:"Home"}),Object(l.jsx)("a",{href:"#about",className:"mx-3 text-dark",style:{textDecoration:"none"},children:"About"}),Object(l.jsx)("a",{href:"#projects",className:"mx-3 text-dark",style:{textDecoration:"none"},children:Object(l.jsx)("strong",{children:"Projects"})}),Object(l.jsx)("a",{href:"#courses",className:"mx-3 text-dark",style:{textDecoration:"none"},children:"Taken Courses"}),Object(l.jsx)("a",{href:"#background",className:"mx-3",style:{textDecoration:"none"},children:d("Creative Background").map((function(e){return e}))}),m.socials.map((function(e,t){return Object(l.jsx)("a",{href:m.links[t]?m.links[t]:"#",target:"_blank",className:"nav-link text-reset mx-1",style:{cursor:"pointer"},rel:"noreferrer",children:Object(l.jsx)("i",{className:"bi bi-".concat(e)})},e)})),Object(l.jsx)("a",{href:m.page?m.page:"#",target:"_blank",rel:"noreferrer",className:"nav-link text-reset mx-1",style:{cursor:"pointer"},children:Object(l.jsx)("i",{className:"bi bi-globe"})})]})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"navbar bg-light px-3 rounded",style:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"1"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"navbar-brand mb-0 col",children:[Object(l.jsx)("span",{className:"font-weight-bold text-secondary h5",children:"Vadim Gierko"}),Object(l.jsx)("span",{children:r>521?Object(l.jsx)("small",{children:" front-end web developer portfolio"}):null})]}),Object(l.jsx)("i",{className:"bi bi-list mx-2 text-primary",style:{cursor:"pointer"},onClick:function(){return p(!o)}})]})}),o?Object(l.jsx)(h,{onClick:function(){return p(!1)}}):null]})}function b(){return Object(l.jsx)("div",{className:"col-md-4",style:{paddingTop:"70px"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:"img/vadim-gerko-zdjecie-cv.jpg"}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Hello, World!"})," I'm a self-taught front-end developer with an artistic, blogging and musical background. My goal is to create tools that boost your creativity!"]})}),Object(l.jsx)("div",{className:"card-footer",children:Object(l.jsx)("p",{className:"text-muted",children:"Lublin, Poland"})})]})})}function g(){return Object(l.jsxs)("div",{className:"col-md text-justify",id:"about",style:{paddingTop:"70px"},children:[Object(l.jsxs)("p",{children:["Hi there! I'm a ",Object(l.jsx)("strong",{children:"self-taught front-end & React developer with an artistic, blogging and musical background"}),"."]}),Object(l.jsx)("p",{children:"In my projects I usually use:"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"JavaScript"})," (ES6)"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"React"})," 17"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"React Router"})," 5+ for dynamic routing"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Firebase"})," 9 (database, storage & authorization for) which is a back-end for my fullstack apps"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Bootstrap"})," 5.1 for RWD"]}),Object(l.jsx)("li",{children:Object(l.jsx)("strong",{children:"HTML5 / CSS3"})}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"jQuery"})," (when use vanilla JS & p5.js)"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"p5.js"})," (when need visualisations or animation, like in games or art apps)"]})]}),Object(l.jsx)("p",{children:"My other interests are:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"visual thinking (sketchnoting and mindmapping)"}),Object(l.jsx)("li",{children:"creative process management (I wrote an ebook & ran blog on the topic)"}),Object(l.jsx)("li",{children:"composing music (using GuitarPro 7.5)"}),Object(l.jsx)("li",{children:"self-development"}),Object(l.jsx)("li",{children:"sudoku, scrabble, chess, uno, blokus"})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Scroll down"})," to check out a few of my open source projects & try them in your browser (click on project's names or images)."]})]})}function u(e){var t=e.repoData,r=e.i;return Object(l.jsxs)("div",{className:"row mb-3",children:[0===r||r%2===0?Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("a",{href:t.gp,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:Object(l.jsx)("img",{className:"img-fluid border border-secondary",src:t.img})})}):Object(l.jsxs)("div",{className:"card-body col-md-6",children:[Object(l.jsx)("h4",{className:"card-title text-primary ",children:Object(l.jsx)("a",{href:t.gp,target:"_blank",rel:"noreferrer",children:t.name})}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("strong",{children:"Description:"})," ",t.description]}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:[Object(l.jsx)("strong",{children:"In this project I use:"})," ",t.language]})}),Object(l.jsx)("a",{className:"btn btn-primary me-2",href:t.gp,target:"_blank",rel:"noreferrer",children:"Try the app!"}),Object(l.jsx)("a",{className:"btn btn-outline-primary",href:t.repoUrl,target:"_blank",rel:"noreferrer",children:"See the code!"})]}),0===r||r%2===0?Object(l.jsxs)("div",{className:"card-body col-md-6",children:[Object(l.jsx)("h4",{className:"card-title text-primary ",children:Object(l.jsx)("a",{href:t.gp,target:"_blank",rel:"noreferrer",children:t.name})}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("strong",{children:"Description:"})," ",t.description]}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:[Object(l.jsx)("strong",{children:"In this project I use:"})," ",t.language]})}),Object(l.jsx)("a",{className:"btn btn-primary me-2",href:t.gp,target:"_blank",rel:"noreferrer",children:"Try the app!"}),Object(l.jsx)("a",{className:"btn btn-outline-primary",href:t.repoUrl,target:"_blank",rel:"noreferrer",children:"See the code!"})]}):Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("a",{href:t.gp,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:Object(l.jsx)("img",{className:"img-fluid border border-secondary",src:t.img})})})]})}function j(){return Object(l.jsxs)("div",{className:"text-justify",id:"projects",style:{paddingTop:"70px"},children:[Object(l.jsx)("h1",{className:"text-center py-3",children:"Projects"}),Object(l.jsx)("hr",{}),m.projects.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{repoData:e,i:t}),Object(l.jsx)("hr",{style:{borderStyle:"solid",borderColor:"black",size:"20px"}})]},"project"+t)}))]})}var x=[{title:"Creative Process Management",icon:"lightbulb",imageSRC:"img/lightbulb.svg",links:[{name:"www",url:"https://vadimgierko.com/category/proces-tworczy/",icon:"globe"},{name:"ebook",url:"https://vadimgierko.com/ebook-zarzadzanie-procesem-tworczym/",icon:"book"}],socials:[{name:"instagram",url:"https://www.instagram.com/vadim.gierko/",icon:"instagram"},{name:"facebook",url:"https://www.facebook.com/lowcapomyslow/",icon:"facebook"}],paragraphs:["I'm an expert of Creative Process Management and do my research on the topic since 2016.","I'm constantly trying to improve my creative process to create faster, more valuable and more creative ideas.","My goal is to help others to become a better creators, so I wrote an ebook (in polish) and run a blog which consist my theory of Creative Process Management.","I also made a few Creative Process Management trainings for students and teachers and share my knowledge with my subscribers on Facebook and Instagram."]},{title:"Visual Thinking (Sketchnoting & Mind Maps)",icon:"pencil-fill",imageSRC:"img/diagram-3.svg",links:[{name:"www",url:"https://vadimgierko.com/category/notowanie-wizualne/",icon:"globe"},{name:"gallery",url:"https://vadimgierko.com/galeria-kreatywnych-notatek/#Kategoria_NOTOWANIE_WIZUALNE",icon:"images"}],socials:[{name:"instagram",url:"https://www.instagram.com/kreatywnenotatki/",icon:"instagram"},{name:"facebook",url:"https://www.facebook.com/kreatywnenotatkipl/",icon:"facebook"}],paragraphs:["I am a sketchnoter and mindmapper. What it means?","It means that I'm taking notes in nonlinear way, using colors, icons, drawings, keywords, connections & different fonts to visualize information.","I'm noting this way for many years and share my visual notes and mind map with the world on my Instagram and Facebook (2300 + 2200 subscribers).","My goal is to help others to take better notes and remember more information and to share an interesting information in visual way (my post were saved thousand times).","I also made a few sketchnoting and mindmapping trainings for students and teachers and share my knowledge in articles on my blog."]},{title:"Composing Instrumental Music",icon:"music-note-beamed",imageSRC:"img/music-note-beamed.svg",links:[],socials:[{name:"soundcloud",url:"https://soundcloud.com/vadimgierko",icon:"cloud-fill"},{name:"youtube",url:"https://www.youtube.com/user/VadimGerkoGuitar",icon:"youtube"}],paragraphs:["I compose instrumental music for the classical guitar and various instruments groups (more than 100 compositions).","I write music in Guitar Pro 7.5, in which software I can do everything I need to express my emotions and music ideas.","I had an honor to write music for a few short students' animated movies and hope that my music will be a soundtrack for some longer movie.","Also I dream about making an online course of how to compose instrumental music to share my knowledge on the topic with everybody in the world!"]}];function f(e){var t=e.i;return Object(l.jsx)("div",{className:"col-lg",children:Object(l.jsxs)("div",{className:"card mb-3",children:[Object(l.jsx)("div",{className:"card-header",children:Object(l.jsxs)("h3",{className:"text-center text-primary",children:[Object(l.jsx)("i",{className:"bi bi-".concat(x[t].icon," mx-3")}),x[t].title]})}),Object(l.jsxs)("div",{className:"card-body row",children:[Object(l.jsx)("div",{className:"col-md",children:Object(l.jsx)("img",{src:x[t].imageSRC,className:"card-img-top img-fluid p-3"})}),Object(l.jsx)("div",{className:"card-text col-md-8",children:x[t].paragraphs.map((function(e,t){return Object(l.jsx)("p",{children:e},"p"+t)}))})]}),Object(l.jsxs)("div",{className:"card-footer text-center",children:[x[t].links.map((function(e,t){return Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("h3",{className:"d-inline",children:Object(l.jsx)("i",{className:"bi bi-".concat(e.icon," mx-3")})})})},"link"+t)})),x[t].socials.map((function(e,t){return Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("h3",{className:"d-inline",children:Object(l.jsx)("i",{className:"bi bi-".concat(e.icon," mx-3")})})})},"social"+t)}))]})]})})}function k(){return Object(l.jsxs)("div",{id:"background",style:{paddingTop:"70px"},children:[Object(l.jsxs)("header",{style:{textAlign:"center"},children:[Object(l.jsx)("h1",{children:d("Creative Background").map((function(e){return e}))}),Object(l.jsx)("p",{children:"I wasn't born as a front-end developer. I am a creator."}),Object(l.jsx)("p",{children:'I\'ve done (and still doing) a lot of creative things and projects (scroll down to see a few of them), which are "frozen" at the moment because of developing learning.'})]}),Object(l.jsx)("div",{className:"row",children:x.map((function(e,t){return Object(l.jsx)(f,{i:t},"activity"+t)}))})]})}var w=[{name:"HTML/ CSS/ JS/ jQuery",description:"I've started my front-end developer journey with learning HTML, CSS & JS basics with these online courses:",courses:[{name:"Intro to HTML/CSS: Making webpages",link:"https://www.khanacademy.org/computing/computer-programming/html-css"},{name:"HTML/JS: Making webpages interactive",link:"https://www.khanacademy.org/computing/computer-programming/html-css-js"},{name:"HTML/JS: Making webpages interactive with jQuery",link:"https://www.khanacademy.org/computing/computer-programming/html-js-jquery"},{name:"Kurs how2html",link:"http://how2html.pl/"}]},{name:"JS/ Processing JS/ p5.js/ ES6",description:"After that I've got familiar with ES6 standard & switched from processing.js library (for animation & visualization) on p5.js thanks to this courses:",courses:[{name:"Intro to JS: Drawing & Animation with processing.js",link:"https://www.khanacademy.org/computing/computer-programming/programming"},{name:"Advanced JS: Games & Visualizations with processing.js",link:"https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations"},{name:"p5.js - a JavaScript library for creative coding",link:"https://p5js.org/reference/"},{name:"The Modern JavaScript Tutorial",link:"https://javascript.info/"}]},{name:"React / React Router",description:"Then React shown up and... I felt in love in its possibilities. It wasn't easy, but I've managed basics of React thanks to these sources:",courses:[{name:"React Official Tutorial",link:"https://reactjs.org/tutorial/tutorial.html"},{name:"React Official Tutorial 2 - step by step guide",link:"https://reactjs.org/docs/hello-world.html"},{name:"React Type of Web Tutorial",link:"https://typeofweb.com/kurs/react-js/"},{name:"Getting started with React",link:"https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"},{name:"Learning React. Modern Patterns for Developing React Apps (Eve Porcello & Alex Banks book)",link:"https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/"},{name:"React Training / React Router",link:"https://reactrouter.com/web/guides/quick-start"}]},{name:"Styling",description:"Then I understood, that I need to improve my styling skills & learned Bootstrap and Sass with these courses:",courses:[{name:"Bootstrap",link:"https://getbootstrap.com/docs/4.6/getting-started/introduction/"},{name:"Sass tutorial",link:"https://www.w3schools.com/sass/"}]},{name:"Databases",description:"Finally, after experimenting with local storage and fetching I was prepared for real database experience -> Firebase:",courses:[{name:"Firebase basics (database, storage, auth) with official Firebase docs",link:"https://firebase.google.com/docs/reference/js"}]}];function v(){return Object(l.jsxs)("div",{id:"courses",className:"text-center",style:{paddingTop:"70px"},children:[Object(l.jsx)("h1",{className:"py-3",children:"Taken Courses"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row",children:w.map((function(e,t){return Object(l.jsxs)("div",{className:"col-xl mt-3",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.description}),e.courses.map((function(e,t){return Object(l.jsx)("a",{href:e.link,target:"_blank",style:{display:"block",padding:"10px"},rel:"noreferrer",children:e.name},"item"+t)}))]},"course"+t)}))})]})}var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)(b,{}),Object(l.jsx)(g,{})]}),Object(l.jsx)(j,{}),Object(l.jsx)(k,{}),Object(l.jsx)(v,{}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{className:"text-center",children:["designed by ",Object(l.jsx)("a",{href:"https://github.com/vadimgierko",target:"_blank",rel:"noreferrer",children:"Vadim Gierko"})," | 2021"]})]})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(O,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.94bb87ee.chunk.js.map