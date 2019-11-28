import React from 'react';
import classes from './css/pagination.module.css';

const Pagination = (props) => {
    return (
        <>
<ul className={classes.pagination}>
  <li className={props.page === 0 ? classes.selectedPage : ''} ><a onClick={() => props.changePage(0)}></a></li>
  <li className={props.page === 1 ? classes.selectedPage : ''}><a onClick={() => props.changePage(1)}></a></li>
  <li className={props.page === 2 ? classes.selectedPage : ''}><a onClick={() => props.changePage(2)}></a></li>
  <li className={props.page === 3 ? classes.selectedPage : ''}><a onClick={() => props.changePage(3)}></a></li>
</ul>
        </>
    )
}

export default Pagination;