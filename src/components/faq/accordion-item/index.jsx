import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap-accordion";
import { Collapse } from "react-collapse";

AccordionItem.propTypes = {
  item: PropTypes.object,
};

function AccordionItem(props) {
  const { item } = props;

  return (
    <Accordion key={item.id} title={item.title} show={item.show}>
      <p className="toggle-content">{item.content}</p>
    </Accordion>
  );
}

export default AccordionItem;
