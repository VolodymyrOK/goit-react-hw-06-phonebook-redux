import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        onChange={evt => onChangeFilter(evt.target.value)}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};
