import PropTypes from "prop-types";
import Tokenitem from "../token-item";
import Button from "../../button/button-st2";

Tokendetails.propTypes = {
  data: PropTypes.array,
};

const dataTile = {
  title: "WE ARE GROWING",
  subtitle: "Tokenomics",
  desc: "For each transaction, an 12% tax fee is applied. This fee is then divided for different purpose of benefits.",
  number: "1,000,000",
  text: "Total supply",
};

function Tokendetails(props) {
  const { data } = props;

  return (
    <section className="token style-3" id="token">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="block-text">
              <h6 className="sub-heading">{dataTile.subtitle}</h6>
              <h3 className="heading">{dataTile.title}</h3>
              <p className="desc">{dataTile.desc}</p>
              <Button title="White paper" addclass="style-6" path="#" />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="token__content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="top">
                <h2 className="number">{dataTile.number}</h2>
                <h6 className="text">{dataTile.text}</h6>
              </div>
              <ul className="list">
                {data.map((item) => (
                  <Tokenitem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokendetails;
