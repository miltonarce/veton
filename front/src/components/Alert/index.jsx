import React from 'react';
import PropTypes from 'prop-types';

export default class Alert extends React.PureComponent {

    render() {
        const { message, type } = this.props;
        return (
            <div className="container">
                <div className={`alert alert-${type}`} role="alert">
                    {message}
                </div>
            </div>
        );
    }

}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}