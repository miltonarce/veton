import React from 'react';
import PropTypes from 'prop-types';
import Pet from '../Pet';
import './index.scss';

export default class ListPets extends React.PureComponent {
  render() {
    const { pets } = this.props;
    return (
      <ol className="list-pets">
        {pets.map((pet, i) => (
          <li key={i}>
            <Pet {...pet} />
          </li>
        ))}
      </ol>
    );
  }
}

ListPets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
      birthday: PropTypes.string,
    }),
  ),
};
