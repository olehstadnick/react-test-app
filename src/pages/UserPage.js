import React  from 'react';
import {Card} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const UserPage = () => {
	const {id} = useParams();
	return (
		<Card>
			<Card.Body>
                User {id}
			</Card.Body>
		</Card>
	);
};

export default UserPage;

