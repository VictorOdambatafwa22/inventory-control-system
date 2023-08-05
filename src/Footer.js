import React from "react";

function Footer() {

    return (
       <div className="position-absolute bottom-0 start-50 translate-middle-x text-center text-white" style={{ backgroundColor: "#3e04aa",width: "100%" }}>

        <footer>
            <div>
                <h1 className="pt-5">KISCEN ENT.</h1>
                <h5>Follow us</h5>
            </div>
            <div className="d-flex justify-content-center gap-2">
            <a href="https://www.semrush.com/"><img src="/facebook.png" alt="Facebook" className="img-fluid" style={{ width: "30px", height: "30px" }}/></a>
            <a href="https://www.semrush.com/"><img src="/instagram.png" alt="Instagram" className="img-fluid" style={{ width: "30px", height: "30px" }}/></a>
            <a href="https://www.semrush.com/"><img src="/linkedin.png" alt="LinkedIn" className="img-fluid" style={{ width: "30px", height: "30px" }}/></a>
            <a href="https://www.semrush.com/"><img src="/twitter.png" alt="Twitter" className="img-fluid" style={{ width: "30px", height: "30px" }}/></a>
            </div>
        <p>© 2023 KISCEN ENT.</p>
        <p>All rights reserved.</p> 
    </footer>
    </div>
    )
}

export default Footer;