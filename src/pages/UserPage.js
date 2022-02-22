import {Card} from "react-bootstrap";
import React from "react";
import {useParams} from 'react-router-dom';

const UserPage = () => {
    const {id} = useParams();
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    User {id}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserPage;

