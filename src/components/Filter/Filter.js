import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onFilterElement }) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        onChange={evt => onFilterElement(evt.target.value)}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  onFilterElement: PropTypes.func,
  filter: PropTypes.string,
};
