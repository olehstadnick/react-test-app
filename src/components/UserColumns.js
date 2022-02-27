import React  from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import {ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const USER_COLUMNS = [
	{
		Header: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Avatar',
		accessor: 'avatar',
		Cell: props => image(props),
		disableSortBy: true
	},
	{
		Header: 'Username',
		accessor: 'user_name',
		Cell: props => username(props),
	},
	{
		Header: 'First Name',
		accessor: 'first_name',
	},
	{
		Header: 'Last Name',
		accessor: 'last_name',
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Password',
		accessor: 'password',
		show: false,
	},
	{
		Header: 'Gender',
		accessor: 'gender',
	},
	{
		Header: 'IP Address',
		accessor: 'ip_address',
		show: false,
	},
	{
		Header: 'Phone',
		accessor: 'phone',
	},
	{
		Header: 'Birthday',
		accessor: 'birthday',
		Cell: ({value}) => { return Moment(value).format('DD/MM/YYYY'); }
	},
	{
		Header: 'Country',
		accessor: 'country',
		show: false,
	},
	{
		Header: 'Address',
		accessor: 'address',
		show: false,
	},
	{
		Header: 'Card number',
		accessor: 'card_number',
		show: false,
	},
	{
		Header: 'Card Type',
		accessor: 'card_type',
		show: false,
	},
	{
		Header: 'Balance',
		accessor: 'balance',
		show: false,
	},
	{
		Header: 'Currency',
		accessor: 'currency',
		show: false,
	},
	{
		Header: 'Progress',
		accessor: 'progress',
		Cell: props => progress(props),
	},
	{
		Header: 'Created',
		accessor: 'created_at',
		Cell: ({value}) => { return Moment(value).format('DD/MM/YYYY HH:mm:ss'); }
	},
];

function image(props) {
	return (
		<img
			src={props.row.original.avatar}
			width={50}
			alt={props.row.original.user_name}
			title={props.row.original.user_name}
		/>
	);
}

image.propTypes = {
	row: PropTypes.object
};


function progress(props) {
	return (
		<ProgressBar now={props.row.original.progress} label={`${props.row.original.progress}%`} />
	);
}

progress.propTypes = {
	row: PropTypes.object
};

function username(props) {
	return (
		<Link to={'/users/'+props.row.original.id}>{props.row.original.user_name}</Link>
	);
}

username.propTypes = {
	row: PropTypes.object
};
