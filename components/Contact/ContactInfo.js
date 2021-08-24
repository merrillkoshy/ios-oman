import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
	return (
		<div className="contact-info-area ptb-80">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.Mail />
							</div>
							<h3>Mail Here</h3>
							<p>
								<a href="mailto:sales@iosoman.com">sales@iosoman.com</a>
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.MapPin />
							</div>
							<h3>Head Quarters</h3>
							<p>
								International Oilfield Supplies LLC P.O Box 2212, P.C:112 Royal
								Tower (4th Floor) - Ruwi-Muscat
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.Phone />
							</div>
							<h3>Call Here</h3>
							<p>
								<Icon.Phone className="my-1 mx-3" />
								<a href="tel:+96824811166">+968 2481 1166</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
