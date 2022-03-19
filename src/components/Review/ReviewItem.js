import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';



const ReviewItem = (props) => {
    let x=props.x;
    let index=props.index;
    let deleteItem=props.deleteItem;
    return (
        <>


                  <tr>
                    <td>{index + 1}</td>
                    <td>
                    <Button 
                    
                    variant="danger"
                    onClick={()=>deleteItem(x.key)}
                    ><FontAwesomeIcon icon={faTrash} /></Button>  

                        {x.name}
                        
                    
                    </td>
                    <td>{x.count}</td>
                    <td>{x.price}</td>
                    <td>{x.count * x.price}</td>
                  </tr>
               


            
        </>
    );
};

export default ReviewItem;