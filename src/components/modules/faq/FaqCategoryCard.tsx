import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaqCategory } from 'data/faq';
import { useFaqTabContext } from 'providers/FaqTabProvider';
import React from 'react';
import { Nav } from 'react-bootstrap';

const FaqCategoryCard = ({ category }: { category: FaqCategory }) => {
  const { subCategoryActiveKey } = useFaqTabContext();
  return (
    <Nav.Link
      eventKey={category.id}
      className={`btn bg-white w-100 px-3 pt-4 pb-3 fs-8 ${
        subCategoryActiveKey === category.id && 'active'
      }`}
    >
      <FontAwesomeIcon
        icon={category.icon}
        className="category-icon text-800 fs-6"
      />
      <span className="d-block fs-6 fw-bolder lh-1 text-900 mt-3 mb-2">
        {category.name}
      </span>
      <span className="d-block text-900 fw-normal mb-0 fs-9">
        {category.description}
      </span>
    </Nav.Link>
  );
};

export default FaqCategoryCard;
