export default function BookComplete() {
    return(
        <div>
        <img className="back-image" src="https://agnikul.in/static/media/back.682de39b918012a8ffdf.png" alt="" style={{marginTop: "-5rem",width: "100vw"}} />
        <div className="middle-banner">
            <img className="middle-image" src="https://agnikul.in/static/media/satellite.6f11136afbcd0507c739.png" alt="" style={{margin: "auto"}} />
            <p className="middle-head">Congratulations!</p>
            <p className="middle-text">We have received your request. You are one step closer to getting to orbit. A dedicated payload strategist has been assigned to you. We will get in touch with you shortly.</p>
            <a href="/book-launch">
            <button className="middle-button">Back to Products</button>
            </a>
        </div>
        </div>
    )
}