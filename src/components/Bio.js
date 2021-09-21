export default function Bio() {    
    return (
        <div className="col-md-4" style={{paddingTop: "70px"}}>
            <div className="card">
                <img className="card-img-top" src="img/vadim-gierko-zdjecie-cv.jpg" />
                <div className="card-body">
                    <p className="text-primary"><strong>Location:</strong> Lublin, Poland</p>
                    <p className="text-primary"><strong>Open Source Projects:</strong> <a href="https://github.com/vadimgierko?tab=repositories" target="_blank" rel="noreferrer">Repositories: 7</a></p>
                </div>
                <div className="card-footer">
                    <p><strong>Bio:</strong> Hello, World! I'm a self-taught front-end developer with an artistic, blogging and musical background. My goal is to <strong>create useful tools for creative people</strong> like you!</p>
                </div>
            </div>
        </div>
    );
}