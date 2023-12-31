import Link from "next/link";

const dataTitle = {
  title: "Contact Us",
  desc: "We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly",
  mail: "Info.yourcompany@gmail.com",
  phone: "+345 54689435",
  author: "Themesflat",
};

function Footer(props) {
  return (
    <footer className="footer style-4">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content-left">
                <h3 className="fs-22">{dataTitle.title}</h3>
                <p className="fs-20">{dataTitle.desc}</p>
                <ul className="list-info">
                  <li>
                    <span className="icon-message"></span>
                    {dataTitle.mail}
                  </li>
                  <li>
                    <span className="icon-Calling"></span>
                    {dataTitle.phone}
                  </li>
                </ul>
                <ul className="list-social">
                  <li>
                    <Link href="#">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-place"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-youtobe"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-tiktok"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-reddit"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-right">
                <form>
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your name here"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Type your email here"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label className="mb-6">Your Message</label>
                      <textarea placeholder="Leave your question or comment here"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn-action style-4">
                    <span>SUBMIT YOUR MESSAGE</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                © 2023. All rights reserved by
                <a href="https://themeforest.net/user/themesflat/portfolio">
                  {dataTitle.author}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
