import React  from 'react';
import {Card} from 'react-bootstrap';
import CustomTable from '../components/CustomTable';

import USER_DATA from '../data/users';
import { USER_COLUMNS } from '../components/UserColumns';
import {useMemo} from 'react';

function UsersPage() {
	const columns = useMemo(() => USER_COLUMNS, []);
	const data = useMemo(() => USER_DATA, []);

	return (
		<Card>
			<Card.Body>
				<CustomTable columns={columns} data={data}/>
			</Card.Body>
		</Card>
	);
}

export default UsersPage;
