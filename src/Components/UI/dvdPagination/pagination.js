import React from 'react';
import classes from './css/pagination.module.css';

const Pagination = (props) => {
    return (
        <>
<ul className={classes.pagination}>
  <li className={props.page === 1 ? classes.selectedPage : ''} ><a href="#page1"></a></li>
  <li className={props.page === 2 ? classes.selectedPage : ''}><a href="#page2"></a></li>
  <li className={props.page === 3 ? classes.selectedPage : ''}><a href="#page3"></a></li>
  <li className={props.page === 4 ? classes.selectedPage : ''}><a href="#page4"></a></li>
  {/* <li><a href="#page5" className={props.page === 1 ? classes.selectedPage : ''}></a></li> */}
</ul>
        </>
    )
}

export default Pagination;