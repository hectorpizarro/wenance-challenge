import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/Button';
import Styles from './Paginator.styles';

const Paginator = ({ page, count, handlePrevious, handleNext }) => {
  const totalPages = Math.ceil(count / 10) || 1;

  return (
    <Styles.Container>
      <div>
        Page {page} of {totalPages} ({count} results)
      </div>
      <div>
        <Button
          label="Previous"
          disabled={page <= 1}
          onClick={handlePrevious}
        />
        <Button
          label="Next"
          disabled={page >= totalPages}
          onClick={handleNext}
        />
      </div>
    </Styles.Container>
  );
};

Paginator.propTypes = {
  // Current page
  page: PropTypes.number.isRequired,
  // Total records
  count: PropTypes.number.isRequired,
  // Handle click on Previous button
  handlePrevious: PropTypes.func.isRequired,
  // Handle click on Next button
  handleNext: PropTypes.func.isRequired
};

export default Paginator;
