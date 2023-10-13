import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
            <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Hotel Booking App</h5>
                        <p>Find Your Room According To Your Choice</p>
                  </div>

                  <hr className="clearfix w-100 d-md-none pb-0" />

                  <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Our Rooms</h5>
                        <ul className="list-unstyled">
                              <li><a href="#!">Presidential Suite</a></li>
                              <li><a href="#!">Honeymoon Suite</a></li>
                              <li><a href="#!">Executive Suite</a></li>
                              <li><a href="#!">Deluxe Suite</a></li>
                        </ul>
                  </div>

            </div>
      </div>

      <div className="footer-copyright text-center py-3">© 2023 Copyright:
            <a href="https://bohubrihi.toirihoi.com/">toirihoi.com</a>
      </div>

</footer>

export default Footer