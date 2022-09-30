import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const PaginationMovies = ({ page, setSearch, totalPages, query }) => {

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={Number(page)}
        onChange={(e, value) => {
         setSearch({ query, page: value })
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
          marginTop: '10px',
        }}
        size="large"
      />
    </Stack>
  );
};

PaginationMovies.propTypes = {
  page:PropTypes.string.isRequired,
  totalPages:PropTypes.number.isRequired,
  query:PropTypes.string.isRequired,
}

export default PaginationMovies;

