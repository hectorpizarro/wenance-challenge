import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/Button';
import Styles from './Paginator.styles';

const Paginator = ({ page, count, doPrevious, doNext }) => {
  const totalPages = Math.ceil(parseInt(count, 10) / 10);

  return (
    <Styles.Container>
      <div>
        Page {page} of {totalPages} ({count} results)
      </div>
      <div>
        <Button label="Previous" disabled={page <= 1} onClick={doPrevious} />
        <Button label="Next" disabled={page >= totalPages} onClick={doNext} />
      </div>
    </Styles.Container>
  );
};

Paginator.propTypes = {
  // Current page
  page: PropTypes.string.isRequired,
  // Total records
  count: PropTypes.string.isRequired,
  // Handle click on Previous button
  doPrevious: PropTypes.func.isRequired,
  // Handle click on Next button
  doNext: PropTypes.func.isRequired
};

export default Paginator;
