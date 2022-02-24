import Moment from 'moment';

export const USER_COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Avatar',
    accessor: 'avatar',
    Cell: props => (
        <img
            src={props.row.original.avatar}
            width={50}
            alt={props.row.original.user_name}
        />
    ),
    canSort: false,
  },
  {
    Header: 'Username',
    accessor: 'user_name',
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
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'IP Address',
    accessor: 'ip_address',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Birthday',
    accessor: 'birthday',
    Cell: ({value}) => { return Moment(value).format('DD/MM/YYYY') }
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Card number',
    accessor: 'card_number',
  },
  {
    Header: 'Card Type',
    accessor: 'card_type',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
  },
  {
    Header: 'Currency',
    accessor: 'currency',
  },
  {
    Header: 'Progress',
    accessor: 'progress',
  },
  {
    Header: 'Created',
    accessor: 'created_at',
    Cell: ({value}) => { return Moment(value).format('DD/MM/YYYY HH:mm:ss') }
  },
];