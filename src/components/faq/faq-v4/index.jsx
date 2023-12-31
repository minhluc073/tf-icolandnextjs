import PropTypes from "prop-types";
import AccordionItem from "../accordion-item2";

Faq.propTypes = {
  data: PropTypes.array,
};

const dataTitle = {
  subtitle: "Questions",
  title: "FAQ",
};

function Faq(props) {
  const { data } = props;
  // const [dataTitle] = useState(
  //     {
  //         subtitle:'Questions',
  //         title: 'FAQ',
  //     }
  // )

  return (
    <section className="section-faq style-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h6 className="sub-heading">{dataTitle.subtitle}</h6>
              <h3 className="heading">{dataTitle.title}</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="flat-accordion"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {data.slice(26, 30).map((item) => (
                <AccordionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
