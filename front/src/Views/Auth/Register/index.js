import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './index.scss';

class Register extends React.PureComponent {
  
    render() {
        return (
            <div>
                <p>veterinaria</p>
                <p>usuario</p>
            </div>
        );
    }
}

export default withRouter(props => <Register {...props} />);
