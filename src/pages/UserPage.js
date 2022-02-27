import React  from 'react';
import {Card, Row, Col, Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import data from '../data/users';
import Moment from 'moment';

const UserPage = () => {
	const {id} = useParams();
	const user = data.find((d) => d.id == id);

	return (
		<Card>
			<Card.Body>
				<Row>
					<Col sm={3}>
						<img
							style={{width: '100%'}}
							src={user.avatar}
							alt={user.user_name}
							title={user.user_name}
						/>
					</Col>
					<Col sm={9}>
						<Row>
							<Col lg={6}>
								<Table>
									<tbody>
										<tr>
											<th colSpan={2} className="text-center">General</th>
										</tr>
										<tr>
											<th>First Name:</th>
											<td>{user.first_name}</td>
										</tr>
										<tr>
											<th>Last Name:</th>
											<td>{user.first_name}</td>
										</tr>
										<tr>
											<th>Gender:</th>
											<td>{user.gender}</td>
										</tr>
										<tr>
											<th>Birthday:</th>
											<td>{Moment(user.birthday).format('DD/MM/YYYY')}</td>
										</tr>
										<tr>
											<th>Username:</th>
											<td>{user.user_name}</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col lg={6}>
								<Table>
									<tbody>
										<tr>
											<th colSpan={2} className="text-center">Contacts</th>
										</tr>
										<tr>
											<th>Country:</th>
											<td>{user.country}</td>
										</tr>
										<tr>
											<th>Address:</th>
											<td>{user.address}</td>
										</tr>
										<tr>
											<th>Phone:</th>
											<td>{user.phone}</td>
										</tr>
										<tr>
											<th>Email:</th>
											<td>{user.email}</td>
										</tr>
										<tr>
											<th>IP Address:</th>
											<td>{user.ip_address}</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col lg={6}>
								<Table>
									<tbody>
										<tr>
											<th colSpan={2} className="text-center">Pay</th>
										</tr>
										<tr>
											<th>Balance:</th>
											<td>{user.balance}</td>
										</tr>
										<tr>
											<th>Currency:</th>
											<td>{user.currency}</td>
										</tr>
										<tr>
											<th>Card number:</th>
											<td>{user.card_number}</td>
										</tr>
										<tr>
											<th>Card Type:</th>
											<td>{user.card_type}</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col lg={6}>
								<Table>
									<tbody>
										<tr>
											<th colSpan={2} className="text-center">Other</th>
										</tr>
										<tr>
											<th>User Id:</th>
											<td>{user.id}</td>
										</tr>
										<tr>
											<th>Created Date:</th>
											<td>{Moment(user.created_at).format('DD/MM/YYYY HH:mm:ss')}</td>
										</tr>
										<tr>
											<th>Password:</th>
											<td>{user.password}</td>
										</tr>
										<tr>
											<th>Progress:</th>
											<td>{user.progress}</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default UserPage;

