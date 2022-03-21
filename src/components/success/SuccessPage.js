import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import successImage from '../../images/giphy.gif';

const SuccessPage = () => {

    return (
        <div>

            <h1>Congratulations</h1>
            <h3>your order has been successfully placed</h3>
            <Link to="/shop"><Button variant="secondary" size="sm">Go Home
    </Button></Link> 

            
      

           
        </div>
    );
};

export default SuccessPage;