import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-area bg-f7fafd">
			<div className="container">
				<div className="d-flex flex-column flex-lg-row flex-xl-row">
					<div className="col col-lg-4 col-xl-4">
						<div className="single-footer-widget">
							<div className="logo">
								<Link href="/">
									<a>
										<img src="/images/logo.png" alt="logo" />
									</a>
								</Link>
							</div>
							<p>
								International Oilfield Supplies (IOS) is the exclusive
								representative of World Class international producers of
								Industrial Piping materials. Our goal is to promote, supply and
								distribute their piping products and services to Energy,
								Chemical, Petrochemical, Shipbuilding and Mechanical industries
								globally.
							</p>
						</div>
					</div>
					<div className="col"></div>
					<div className="col">
						<div className="single-footer-widget pl-5">
							<h3>Company</h3>
							<ul className="list">
								<li>
									<Link href="/about-us">
										<a>About Us</a>
									</Link>
								</li>
								<li>
									<Link href="/ios-advantage">
										<a>IOS Advantage</a>
									</Link>
								</li>
								<li>
									<Link href="/solutions">
										<a>Solutions</a>
									</Link>
								</li>
								{/* <li>
									<Link href="/fabrication">
										<a>Fabrication</a>
									</Link>
								</li> */}
								<li>
									<Link href="/products">
										<a>Products</a>
									</Link>
								</li>
								<li>
									<Link href="/services">
										<a>Services</a>
									</Link>
								</li>
								<li>
									<Link href="/industries-we-serve">
										<a>Industries We Serve</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col">
						<div className="single-footer-widget">
							<h3>Support</h3>
							<ul className="list">
								<li>
									<Link href="/term-condition">
										<a>Terms & Conditions</a>
									</Link>
								</li>
								<li>
									<Link href="/privacy-policy">
										<a>Privacy Policy</a>
									</Link>
								</li>
								<li>
									<Link href="/quality">
										<a>Quality</a>
									</Link>
								</li>

								<li>
									<Link href="/contact">
										<a>Contact Us</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col">
						<div className="single-footer-widget">
							<h3>Address</h3>

							<ul className="footer-contact-info">
								<li>
									<Icon.MapPin />
									<a href="https://goo.gl/maps/b9CLwspR9MYgqjUj6">
										International Oilfield Supplies LLC P.O Box 2212, P.C:112
										Royal Tower (4th Floor) - Ruwi-Muscat Telephone: +968 2481
										1166
									</a>
								</li>

								<li>
									<Icon.Mail />
									Email:{" "}
									<a href="mailto:info@iosgroupoman.com">
										info@iosgroupoman.com
									</a>
								</li>
								<li>
									<Icon.PhoneCall />
									Phone: <a href="tel:+96824811166">+968 2481 1166</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-md-12">
					<div className="copyright-area">
						<p>
							Copyright &copy; {currentYear} International Oilfield Supplies.
							All rights reserved.
						</p>
					</div>
				</div>
			</div>

			<img src="/images/map.png" className="map" alt="map" />

			{/* Shape Images */}
			{/* <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div> */}
		</footer>
	);
};

export default Footer;
