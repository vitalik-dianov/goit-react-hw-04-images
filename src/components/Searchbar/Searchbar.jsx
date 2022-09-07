import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SearchButton } from './Searchbar.styled';
const SearchForm = styled(Form)`
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.61);
  background: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[5]} 0px;
  gap: ${p => p.theme.space[4]};
  display: flex;
  text-align: center;
  justify-content: center;
`;
const SearchInput = styled(Field)`
  padding: ${p => p.theme.space[0]};
  width: ${p => p.theme.sizes[6]};
  height: ${p => p.theme.sizes[2]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  text-align: center;
  line-height: 1;
`;

export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <Formik initialValues={{ querry: '' }} onSubmit={onSubmit}>
        <SearchForm>
          <SearchInput
            name="querry"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <span>search</span>
          </SearchButton>
        </SearchForm>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
