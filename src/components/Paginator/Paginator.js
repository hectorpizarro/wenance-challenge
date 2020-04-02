/**
 * Paginator shows 'Loading' message if disabled flag is TRUE, otherwise current page, total pages and buttons to go back or next page.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../shared/Button/Button';
import Styles from './Paginator.styles';
import { STATUS_LOADING } from '../../redux/people.slice';

// Basic component exported for testing purposes
export const InternalPaginator = ({
  page,
  count,
  disabled,
  handlePrevious,
  handleNext
}) => {
  // Calc total pages based on API response count value. API page is always 10
  const totalPages = Math.ceil(count / 10) || 1;

  return (
    <Styles.Container>
      <div>
        {disabled
          ? 'Loading'
          : `Page ${page} of ${totalPages} (${count} results)`}
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

InternalPaginator.propTypes = {
  // Current page
  page: PropTypes.number.isRequired,
  // Total records
  count: PropTypes.number.isRequired,
  // Flag to hide text if page is loading
  disabled: PropTypes.bool.isRequired,
  // Handle click on Previous button
  handlePrevious: PropTypes.func.isRequired,
  // Handle click on Next button
  handleNext: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  disabled: state.people.status === STATUS_LOADING
});

// Connect basic component to Redux store
const Paginator = connect(mapStateToProps)(InternalPaginator);
export default Paginator;
