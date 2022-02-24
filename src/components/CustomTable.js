import React, {useState} from 'react';
import {Table, Pagination, Button, Modal, Form, Row, Col} from 'react-bootstrap';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import PropTypes from 'prop-types';

function CustomTable({ columns, data }) {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		state,
		prepareRow,
		allColumns,
		// toggleHidden,
		// setHiddenColumns
	} = useTable({
		columns,
		data,
		initialState: {
			pageSize: 10,
			pageIndex: 0,
			sortBy: localStorage.getItem('sortBy') ? JSON.parse(localStorage.getItem('sortBy')) : [],
			hiddenColumns: localStorage.getItem('hiddenColumns') ? JSON.parse(localStorage.getItem('hiddenColumns')) : []
		}
	},
	useSortBy,
	usePagination
	);

	const {
		pageIndex,
		//hiddenColumns
	} = state;

	const [show, setShow] = useState(false);
	const [selectColumns, searchSelectColumns] = useState(allColumns);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSearch = (e) => {
		let value = e.target.value;
		searchSelectColumns(allColumns.filter(item => (
			item.Header.toLowerCase().includes(value.toLowerCase()))
		));
	};

	const handleCheckbox = (e, column) => {
		console.log(e);
		column.toggleHidden(!e.target.checked);
	};

	localStorage.setItem('hiddenColumns', JSON.stringify(state.hiddenColumns));
	localStorage.setItem('sortBy', JSON.stringify(state.sortBy));
    
	console.log(allColumns);
  
	return(
		<>
			<Row className="mb-2">
				<Col sm={6} className="text-center text-sm-start">
					<h1 style={{fontSize: '26px'}}>Users</h1>
				</Col>
				<Col sm={6} className="text-center text-sm-end">
					<Button variant="primary" onClick={handleShow}>
                      Select Columns
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Select Columns</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group className="mb-3" controlId="search">
								<Form.Control
									type="text"
									placeholder="Search columns..."
									onChange={handleSearch}
								/>
							</Form.Group>
							{selectColumns.map((column) => (
								<Form.Check
									key={column.id}
									type="switch"
									id={column.id}
									checked={column.isVisible}
									onClick={(e) => {handleCheckbox(e, column);}}
									label={column.Header}
								/>
							))}
						</Modal.Body>
						<Modal.Footer>
							<Button variant="primary" onClick={handleClose}>
                              Apply
							</Button>
							<Button variant="secondary" onClick={handleClose}>
                              Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>

			<Table striped hover responsive {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, key) => (
						<tr key={key} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, k) => (
								<th key={k} {...column.getHeaderProps(column.getSortByToggleProps())} className="text-nowrap">
									{column.render('Header')}
									<span>
										{column.isSorted ? (column.isSortedDesc ? <FaSortUp/> : <FaSortDown/>) : <FaSort/>}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{
						page.map((row, key) => {
							prepareRow(row);
							return (
								<tr key={key} {...row.getRowProps()}>
									{
										row.cells.map((cell, k) => {
											return <td key={k} {...cell.getCellProps()}>{cell.render('Cell')}</td>;
										})
									}
								</tr>
							);
						})
					}
				</tbody>
			</Table>
			<Row className="mt-2">
				<Col sm={6} className="text-center text-sm-start">
					<Pagination className="d-inline-flex">
						<Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage}/>
						<Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage}/>
						<Pagination.Next onClick={() => nextPage()} disabled={!canNextPage}/>
						<Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
					</Pagination>
				</Col>
				<Col sm={6} className="text-center text-sm-end">
                  Page {pageIndex + 1} of {pageOptions.length} | Go to page <Form.Control
						type="number"
						min={0}
						max={pageCount}
						defaultValue={pageIndex + 1}
						style={{display: 'inline-block', width: 'auto'}}
						onChange={e => {
							const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(pageNumber);
						}}
					/>
				</Col>
			</Row>
		</>
	);
}

export default CustomTable;

CustomTable.propTypes = {
	columns: PropTypes.array,
	data: PropTypes.array
};
