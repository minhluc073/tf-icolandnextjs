import Link from "next/link";
import Gotop from "../../gotop";

const dataTitle = {
  title: "Don't miss out, Stay updated",
  desc: "Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally",
  author: "Themesflat",
};

function Footer(props) {
  // const [dataTitle] = useState(
  //     {
  //         title: "Don't miss out, Stay updated",
  //         desc: 'Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally',
  //         author:'Themesflat'
  //     }
  // )

  return (
    <footer className="footer style-2">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h3 className="">{dataTitle.title}</h3>
                <form action="#" id="subscribe-form1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required=""
                    id="subscribe-email2"
                  />
                  <button
                    className="btn-action s2"
                    type="submit"
                    id="subscribe-button1"
                  >
                    {" "}
                    <span className="effect">SUBSCRIBE</span>
                  </button>
                </form>
                <p>{dataTitle.desc}</p>
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
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
      <div className="footer__bottom center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                © 2022. All rights reserved by{" "}
                <Link href="https://themeforest.net/user/themesflat/portfolio">
                  {dataTitle.author}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Gotop />
    </footer>
  );
}

export default Footer;
