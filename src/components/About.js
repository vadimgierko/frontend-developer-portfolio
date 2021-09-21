export default function About() {
    return (
        <div className="col-md text-justify" id="about" style={{paddingTop: "70px"}}>
            <h1 className="text-center pb-3">About</h1>
            <p>Hi there! I'm a <strong>self-taught front-end developer with an artistic, blogging and musical background</strong>.</p>
            <p>In my projects I usually use:</p>
            <ul>
                <li><strong>HTML5</strong></li>
                <li><strong>CSS3</strong> (<strong>Saas</strong> if needed)</li>
                <li><strong>JavaScript</strong> (ES6)</li>
                <li><strong>React</strong> (16.8+, React Router (nested routes), hooks (useState, useEffect))</li>
                <li><strong>Bootstrap</strong> for easy & quick styling & RWD</li>
                <li><strong>jQuery</strong> (when use vanilla JS)</li>
                <li><strong>p5.js</strong> (when need visualisations or animation, like in games or art apps)</li>
                <li><strong>Firebase</strong> (database, storage & authorization for) which is a back-end for my fullstack apps</li>
            </ul>
            <p>My other interests are:</p>
            <ul>
                <li>visual thinking (sketchnoting and mindmapping)</li>
                <li>creative process management (I wrote an ebook & ran blog on the topic)</li>
                <li>composing music (using GuitarPro 7.5)</li>
                <li>self-development</li>
                <li>learning new things everyday</li>
                <li>reading annotated books</li>
                <li>sudoku, scrabble, chess, uno, blokus</li>
            </ul>
            <p><strong>Scroll down</strong> to check out a few of my open source projects & try them in your browser (click on project's names or images).</p>
        </div>
    );
}