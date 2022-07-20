(this["webpackJsonpfrontend-developer-portfolio"]=this["webpackJsonpfrontend-developer-portfolio"]||[]).push([[0],{50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),o=a(16),n=a.n(o),s=a(8),c=(a(50),a(51),a(2)),l=Object(i.createContext)(),d=function(){return Object(i.useContext)(l)},p=function(e){var t=e.children,a=Object(i.useState)("light"),r=Object(s.a)(a,2),o=r[0],n=r[1],d={theme:o,switchTheme:function(){n("dark"===o?"light":"dark")}};return Object(c.jsx)(l.Provider,{value:d,children:t})},m=a(22),h=a(14),b=a(31),u=a(21);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[],i=function(){return t?140*Math.random()+110:250*Math.random()-50};return Array.from(e).forEach((function(e){var t=i(),r=i(),o=i(),n="rgb(".concat(t,", ").concat(r,", ").concat(o,")"),s=Object(c.jsx)("span",{style:{color:n},children:e});a.push(s)})),a}function j(e){var t=d(),a=t.theme,i=t.switchTheme,r=e.header.navbar.brand.content,o=e.header.navbar.links;return Object(c.jsx)("header",{children:Object(c.jsx)(m.a,{collapseOnSelect:!0,expand:"lg",bg:a,variant:a,className:"fixed-top shadow",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(m.a.Brand,{href:"#",children:r}),Object(c.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsx)(h.a,{className:"me-auto",children:o.map((function(e){return Object(c.jsx)(h.a.Link,{href:e.link,target:"Blog"===e.name?"_blank":"",children:"Creative Background"===e.name?g(e.name,"dark"===a):e.name},e.name)}))}),Object(c.jsxs)(h.a,{children:[Object(c.jsx)(h.a.Link,{children:"light"===a?Object(c.jsx)(u.d,{onClick:i}):Object(c.jsx)(u.e,{onClick:i})}),Object(c.jsx)(h.a.Link,{href:"https://pl.linkedin.com/in/vadimgierko",target:"_blank",children:Object(c.jsx)(u.c,{})}),Object(c.jsx)(h.a.Link,{href:"https://github.com/vadimgierko",target:"_blank",children:Object(c.jsx)(u.b,{})})]})]})]})})})}var f=a(32);function k(e){var t=e.about.imgSrc,a=e.imgSize,i=e.about.title,r=e.about.content;return Object(c.jsxs)("section",{id:"about",className:"section",children:[Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{src:t,roundedCircle:!0,style:{width:a+"px"},className:"shadow"})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{id:"about-title",children:i}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{id:"about-content",children:r})]})]})}var v=a(3);function x(e){var t=e.id,a=void 0===t?"":t,i=e.title,r=void 0===i?"":i,o=e.iconItems,n=void 0===o?[]:o,s=d().theme;return Object(c.jsx)("div",{className:"section-container-"+s,children:Object(c.jsxs)("section",{id:a,className:"section",children:[Object(c.jsx)("h1",{children:r}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",textAlign:"center",justifyContent:"center"},children:n.map((function(e){return Object(c.jsxs)("div",{className:"text-center",style:{marginLeft:"0.5em",marginRight:"0.5em"},children:[e.icon,Object(c.jsx)("p",{children:e.name})]},e.name)}))})]})})}var O=a(10);function w(e){var t=e.props,a=[{icon:Object(c.jsx)(O.l,Object(v.a)({},t)),name:"React 18"},{icon:Object(c.jsx)(O.h,Object(v.a)({},t)),name:"JavaScript (ES6+)"},{icon:Object(c.jsx)(O.n,Object(v.a)({},t)),name:"Redux (Toolkit)"},{icon:Object(c.jsx)(O.a,Object(v.a)({},t)),name:"Bootstrap 5"},{icon:Object(c.jsx)(O.m,Object(v.a)({},t)),name:"React Router 6"},{icon:Object(c.jsx)(O.d,Object(v.a)({},t)),name:"Firebase 9"},{icon:Object(c.jsx)(O.i,Object(v.a)({},t)),name:"MaterialUI"},{icon:Object(c.jsx)(O.b,Object(v.a)({},t)),name:"CSS3"},{icon:Object(c.jsx)(O.g,Object(v.a)({},t)),name:"HTML5"},{icon:Object(c.jsx)(O.o,Object(v.a)({},t)),name:"Styled Components"}];return Object(c.jsx)(x,{id:"tech-stack",title:"Tech Stack",iconItems:a})}var y=a(11),S=a(42),D=a(33),I=a(43),A=a(34);function M(e){var t=e.props,a=[{icon:Object(c.jsx)(y.b,Object(v.a)({},t)),name:"Creative Process Management"},{icon:Object(c.jsx)(S.a,Object(v.a)({},t)),name:"Mind Mapping"},{icon:Object(c.jsx)(D.b,Object(v.a)({},t)),name:"Sketchnoting"},{icon:Object(c.jsx)(I.a,Object(v.a)({},t)),name:"Music Composing"},{icon:Object(c.jsx)(A.a,Object(v.a)({},t)),name:"Learning Process Management"}];return Object(c.jsx)(x,{id:"creative-background",title:"I'm Good At These Creative Areas",iconItems:a})}function C(e){var t=e.props,a=[{icon:Object(c.jsx)(O.j,Object(v.a)({},t)),name:"MongoDB"},{icon:Object(c.jsx)(O.c,Object(v.a)({},t)),name:"Express"},{icon:Object(c.jsx)(O.k,Object(v.a)({},t)),name:"Node.js"},{icon:Object(c.jsx)(O.f,Object(v.a)({},t)),name:"Heroku"},{icon:Object(c.jsx)(O.e,Object(v.a)({},t)),name:"Gatsby"}];return Object(c.jsx)(x,{id:"currently-learning",title:"Currently Learning",iconItems:a})}var N=a(44);function P(e){var t=e.props,a=[{icon:Object(c.jsx)(N.a,Object(v.a)({},t)),name:"Database"},{icon:Object(c.jsx)(y.d,Object(v.a)({},t)),name:"Storage"},{icon:Object(c.jsx)(y.f,Object(v.a)({},t)),name:"Routing"},{icon:Object(c.jsx)(y.c,Object(v.a)({},t)),name:"CRUD"},{icon:Object(c.jsx)(D.a,Object(v.a)({},t)),name:"Dark Mode"},{icon:Object(c.jsx)(y.a,Object(v.a)({},t)),name:"API"},{icon:Object(c.jsx)(A.b,Object(v.a)({},t)),name:"Users Auth"},{icon:Object(c.jsx)(y.g,Object(v.a)({},t)),name:"RWD"},{icon:Object(c.jsx)(y.i,Object(v.a)({},t)),name:"Search"},{icon:Object(c.jsx)(y.j,Object(v.a)({},t)),name:"Tags"}];return Object(c.jsx)(x,{id:"what-can-i-build",title:"What My Apps/Sites Can Have",iconItems:a})}function T(e){var t=e.releaseYear,a=void 0===t?(new Date).getFullYear():t,i=e.links,r=void 0===i?[]:i,o=d().theme;return Object(c.jsx)("footer",{style:{textAlign:"center"},children:Object(c.jsx)(m.a,{bg:o,variant:o,children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(h.a,{className:"m-auto",children:[Object(c.jsx)(h.a.Link,{disabled:!0,children:Object(c.jsx)(R,{releaseYear:a})}),r.map((function(e,t){return Object(c.jsx)(h.a.Link,{href:e.link,target:"_blank",children:e.label},"navlink-".concat(e.label))}))]})})})})}function R(e){var t=e.releaseYear,a=(new Date).getFullYear();return Object(c.jsxs)("span",{children:["\xa9 ",t,a===t?null:"-"+a]})}var L=a(45),U=a(37),B=a(41),E=a(40);function G(e){var t=e.items,a=Object(i.useState)(0),r=Object(s.a)(a,2),o=r[0],n=r[1];return Object(c.jsxs)("div",{className:"slider",children:[Object(c.jsxs)(L.a,{className:"slider-img-section",children:[Object(c.jsx)(U.a,{xs:2,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},onClick:function(){return n((function(e){return e-1<0?t.length-1:e-1}))},children:Object(c.jsx)(y.e,{size:40})}),Object(c.jsx)(U.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{src:t[o].img,fluid:!0,rounded:!0})})}),Object(c.jsx)(U.a,{xs:2,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},onClick:function(){return n((function(e){return e+1>t.length-1?0:e+1}))},children:Object(c.jsx)(y.h,{size:40})})]}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:t[o].name}),Object(c.jsx)("p",{children:t[o].shortDescription}),Object(c.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:t[o].techStack.map((function(e,a){return Object(c.jsx)(E.a,{pill:!0,bg:"secondary",className:a<t[o].techStack.length-1?"me-1 mb-1 shadow":"mb-1 shadow",children:e},"tech-stack-badge-"+a)}))}),Object(c.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:t[o].features.map((function(e,a){return Object(c.jsx)(E.a,{pill:!0,bg:"light",text:"secondary",className:a<t[o].features.length-1?"me-1 mb-1 shadow":"mb-1 shadow",children:e},"features-badge-"+a)}))}),Object(c.jsxs)("div",{className:"btn-section mb-1",style:{cursor:"pointer",display:"flex",justifyContent:"center",gap:"1em"},children:[Object(c.jsx)(B.a,{variant:"primary",size:"sm",href:t[o].gp,target:"_blank",className:"shadow",children:"Try the app!"}),Object(c.jsx)(B.a,{variant:"outline-primary",size:"sm",href:t[o].repoUrl,target:"_blank",className:"shadow",children:"See the code!"})]})]})}function Y(e){var t=e.projects,a=void 0===t?[]:t,i=d().theme;return Object(c.jsx)("div",{className:"section-container-"+i,children:Object(c.jsxs)("div",{className:"section",id:"projects",children:[Object(c.jsx)("h1",{children:"Projects"}),Object(c.jsx)("br",{}),Object(c.jsx)(G,{items:a})]})})}function z(){return Object(c.jsx)("a",{href:"#",className:"scroll-to-top h1",children:Object(c.jsx)(u.a,{size:40})})}var F={header:{navbar:{brand:{content:"Vadim Gierko"},links:[{name:"About",link:"#about"},{name:"Tech Stack",link:"#tech-stack"},{name:"What Can I Build",link:"#what-can-i-build"},{name:"Projects",link:"#projects"},{name:"Currently Learning",link:"#currently-learning"},{name:"Creative Background",link:"#creative-background"},{name:"Blog",link:"https://vadimgierko.github.io/blogging-platform/#/blogs/my-programming-journey/summary-of-my-first-year-of-learning-web-development-roadmap-projects-and-tips-for-newbies"}],socials:[{type:"github",url:"https://github.com/vadimgierko"},{type:"linkedin",url:"https://pl.linkedin.com/in/vadimgierko"}]}},about:{imgSrc:"https://vadimgierko.github.io/frontend-developer-portfolio/img/vadim-gerko-zdjecie-cv.jpg",title:"Hello, World!",content:"My name is Vadim Gierko and I\u2019m a self-taught front-end developer (React) based in Lublin LOOKING FOR A FIRST DEV JOB!"},projects:[{name:"Dev Portfolio",img:"img/dev-portfolio-react-bootstrap-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/frontend-developer-portfolio",repoUrl:"https://github.com/vadimgierko/frontend-developer-portfolio",techStack:["react","react-bootstrap","bootstrap","react-icons","gh-pages"],features:["rwd","dark mode"],shortDescription:"Developer portfolio designed & developed by myself using React Bootstrap components for styling."},{name:"Linky Notes",img:"img/linky-notes-app-vadim-gierko.png",gp:"https://vadimgierko.github.io/linky-notes/",repoUrl:"https://github.com/vadimgierko/linky-notes",techStack:["react","react-router","firebase","bootstrap","bootstrap-icons","gh-pages"],features:["crud","database","routing","users authentication","rwd","dark mode"],shortDescription:"Organize & filter your notes with tags & create your own knowledge base!",description:"This full-stack integrated with Firebase single page app allows you to create tagged notes with an indication of the bibliographic source. Thanks to that your notes are linked with each other & grouped by tags. You don't need to put your notes into folders or do any index or table of content anymore! You can easily find your note by filtering notes by one or more tags thanks to search engine (of which I'm proud ;-) You're saving a tone of time to organize & efficiently use your notes! At the moment this SPA is available for my personal use only. I couldn't manage hunderds of my notes, so I've decided to build this app and I'm happy, that finally I've solved one of my biggest problems thanks to my own app. You can see some of my notes, but cannot sign up at the moment or modify my database. App is still is still being developed, growing & tested by me, so when right time comes, I'll enable creating accounts for users like you ;-)"},{name:"Blogging Platform with Markdown Text Editor",img:"img/blogging-platform-vadim-gierko-screen.png",gp:"https://vadimgierko.github.io/blogging-platform/",repoUrl:"https://github.com/vadimgierko/blogging-platform",techStack:["react","react-router","react-markdown","firebase","bootstrap","bootstrap-icons","bootswatch","gh-pages"],features:["crud","database","routing","users authentication","rwd","markdown editor"],shortDescription:"Run your blog for free & edit your articles via Markdown Editor!",description:"This full-stack SPA allows you to create & run your blog (or many blogs) for free after creating a free user account, write & edit your articles with simple & intuitive markdown text editor (which was also created by myself) & read published blogs without authentication. There is a small blog called 'My Programming Journey', where I published a few articles. This app & linky_notes app (see above) are my newest, most complex & advanced responsive full-stack single-page real-world applications, that support all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, React Router, Bootstrap) and realtime database & authentication integration (Firebase)."},{name:"React Redux Firebase CRUD App template styled with MUI",img:"img/react-redux-firebase-mui-crud-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/react-redux-router-firebase-auth-rtdb-crud-mui-app/",repoUrl:"https://github.com/vadimgierko/react-redux-router-firebase-auth-rtdb-crud-mui-app",techStack:["react","react-router","redux toolkit","firebase","mui","mui-icons","gh-pages"],features:["crud","database","routing","users authentication","rwd","dark mode"],shortDescription:"The template starter for quickly start a new fullstack app with Redux Toolkit & MUI!"},{name:"GitHub API Users Search App",img:"img/github-user-search-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/github-api-users-search-app/#/vadimgierko",repoUrl:"https://github.com/vadimgierko/github-api-users-search-app",techStack:["react","github api","bootstrap","bootstrap-icons","gh-pages"],features:["api","routing","rwd"],shortDescription:"Find any user on GitHub & see his/her public repositories!",description:"This responsive SPA allows you to find & view any user's basic profile info & public repositories published on GitHub! Input the correct GitHub User username in search field or... add username after slash to app's url & you will see: 1). user's bio, profile image & open source projects with descriptions (if exist) linked to the github repositories or github pages (if exist)."},{name:"Mind Maps App",img:"img/mind-maps-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/MIND-MAP-APP/",repoUrl:"https://github.com/vadimgierko/MIND-MAP-APP",techStack:["javascript","p5.js","jquery","bootstrap","bootstrap-icons","firebase"],features:["crud","database","users authentication","rwd"],shortDescription:"Create, save & edit your mind maps online with this app!",description:"Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords) You sign up & create the account, so you will be able to save a mind map as a project (for future edition) in your user's database (Firebase) and/or download your mind map as a PNG file with one click!"},{name:"Old School 2D Racing Game",img:"img/old-school-racing-game-p5-js-vadim-gierko-2.png",gp:"https://vadimgierko.github.io/old-school-2d-racing-game/",repoUrl:"https://github.com/vadimgierko/old-school-2d-racing-game",techStack:["javascript","p5.js","bootstrap-icons"],features:["animation","rwd"],shortDescription:"Play the old school 2D racing game!",description:"Old-school 2D racing game created in JavaScript using p5.js library. I've started to develop this game at the beggining of my programming journey, but... had not enough knowledge to finish it then. So now, after 10 months brake I've figured all bugs & problems out, so the game is finally completed! I love working with p5.js, which alows you to create animations like this in that game, and thanks to this library I've made my first steps in programming learning with Khan Academy online courses, so it was a pleasure to come back to old habbits after 10 months of working mainly with React & other technologies ;-) Car's design was inspired by drawing of my son! Enjoy!"},{name:"Let It Snow! Falling Snow Animation",img:"img/let-it-snow-p5-javascript-animation-vadim-gierko.png",gp:"https://vadimgierko.github.io/let-it-snow/",repoUrl:"https://github.com/vadimgierko/let-it-snow",techStack:["javascript","p5.js"],features:["animation","rwd"],shortDescription:"Listen to the beautiful Let it snow song while watching animated falling snow!",description:"This Christmas Online Animated Musical Card was made using Javascript & p5.js library. To make the animation seem more realistic, I created a pseudo 3D illusion thanks to basic knowledge of perspective: 1). there are 3 layers of snow, 2). more distant snowflakes are smaller, while closer are larger, 3). more distant snowflakes fall slower, and closer ones fall faster. In addition, I've implemented noise effect (noise() in p5.js) to falling snow, so now it seems to fall more naturally, and mountains. And finally, there are 4-sized trees: randomly positioned after each page reload, more distant trees are smaller & darker, closer trees are lighter & bigger. Let it snow!"},{name:"Live Markdown Text Editor",img:"img/markdown-text-editor-by-vadim-gierko.png",gp:"https://vadimgierko.github.io/markdown-text-editor/",repoUrl:"https://github.com/vadimgierko/markdown-text-editor",techStack:["react","react-router","react-markdown","remark-gfm","bootstrap","local-storage-api","gh-pages"],features:["routing","markdown editor","local storage","rwd"],shortDescription:"Check how your Markdown text will look like when rendered!",description:"Live Markdown Text Editor lets you write text using markdown language & render it as an HTML. The feature can be (and will be) used as a text editor in my Blogging Platform App (my most advanced fullstack application which comes very soon) & many others apps."},{name:"Pixel Draw App",img:"img/pixel-draw-app-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/PixelDrawApp/",repoUrl:"https://github.com/vadimgierko/PixelDrawApp",techStack:["react","bootstrap","bootstrap-icons"],features:["crud","local storage","rwd"],shortDescription:"Create, save and edit your first pixel art!",description:"Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database."},{name:"Snake Game Clone",img:"img/snake-game-clone-screen-vadim-gierko.png",gp:"https://vadimgierko.github.io/snake-game-react/",repoUrl:"https://github.com/vadimgierko/snake-game-react",techStack:["react","javascript","react-icons","css"],features:["game-loop","rwd"],shortDescription:"Old School 2D Snake Game for desktop & mobile written in React. Enjoy!",description:""},{name:"Sudoku Solver",img:"img/sudoku-solver-app-screen-vadim-gierko.png",gp:"https://codesandbox.io/s/sudoku-solver-ip90ku",repoUrl:"https://github.com/vadimgierko/sudoku-solver",techStack:["react","javascript"],features:["sudoku-solver-algorithm"],shortDescription:"Input easy sudoku into the board & let the algorithm solve it!",description:""}],footer:{releaseYear:2021,links:[{label:"Vadim Gierko",link:"https://github.com/vadimgierko"},{label:"[source code]",link:"https://github.com/vadimgierko/frontend-developer-portfolio"}]}};function H(){var e=d().theme,t=Object(i.useState)(window.innerWidth),a=Object(s.a)(t,2),r=a[0],o=a[1],n=Object(i.useState)(),l=Object(s.a)(n,2),p=l[0],m=l[1],h=Object(i.useState)(100),b=Object(s.a)(h,2),u=b[0],g=b[1];return Object(i.useEffect)((function(){m({style:{margin:"0.5em"},size:r>576?80:40}),g((function(){return r>576?200:100}))}),[r]),Object(i.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth;o(e)}))}),[]),Object(c.jsxs)("div",{className:"dark"===e?"app bg-dark text-light":"app",children:[Object(c.jsx)(j,{header:F.header}),Object(c.jsxs)("main",{children:[Object(c.jsx)(k,{about:F.about,imgSize:u}),Object(c.jsx)(w,{props:p}),Object(c.jsx)(P,{props:p}),Object(c.jsx)(Y,{projects:F.projects}),Object(c.jsx)(C,{props:p}),Object(c.jsx)(M,{props:p})]}),Object(c.jsx)(T,{releaseYear:F.footer.releaseYear,links:F.footer.links}),Object(c.jsx)(z,{})]})}n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{children:Object(c.jsx)(H,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.fc07f1c7.chunk.js.map