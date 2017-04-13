import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NextToGo from '../../components/nexttogo/NextToGo';

import { invalidateNtgPage, selectNtgPage, fetchTopNtgIfNeeded} from '../../actions/nexttogo';

class NextToGoPage extends Component {
  constructor(props) {
    super(props);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchTopNtgIfNeeded(page));  

    this.interval = setInterval(() => dispatch(fetchTopNtgIfNeeded(page)), 55000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { dispatch, page } = nextProps;
      dispatch(fetchTopNtgIfNeeded(page));
    }
  }

  handleNextPageClick(e) {
     e.preventDefault();
    const { page, users } = this.props;
    if (users.length > 0) {
      this.props.dispatch(selectNtgPage(page + 1));
    }
  }

  handlePreviousPageClick(e) {
     e.preventDefault();
    const page = this.props.page;
    if (page > 1) {
      this.props.dispatch(selectNtgPage(page - 1));
    }
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, page } = this.props;
    dispatch(invalidateNtgPage(page));
    dispatch(fetchTopNtgIfNeeded(page));
  }


  render() {
    const { error, users, isFetching } = this.props;

    return (
      <div className="container">
        {
          error &&
          <div className="alert alert-danger">
            {error.message || 'Unknown errors.'}
          </div>
        }

        {!isFetching && users.length === 0 &&
          <div className="alert alert-warning">Oops, nothing to show.</div>
        }

        {users.length > 0 &&
          <div className="row" style={{ opacity: isFetching ? 0.5 : 1 }}>
              {users.map(user =>
                <div key={user.raceName} className="col-md-4">
                  <NextToGo key={user.raceName} user={user} ewan={diff_minutes(user.raceStartTime, new Date())}/>
                </div>
              )}
          </div>
        }
      </div>
    );
  }
}

NextToGoPage.propTypes = {
  page: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
};

function diff_minutes(dt2text, dt1)   
 {  
  let dt2 = new Date(dt2text);

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;  
  diff /= 60;  
  return Math.round(diff);
 } 

function mapStateToProps(state) {
  const { selectedNextToGoPage, nexttogoByPage } = state;
  const page = selectedNextToGoPage || 1;

  if (!nexttogoByPage || !nexttogoByPage[page]) {
    return {
      page,
      isFetching: false,
      didInvalidate: false,
      totalCount: 0,
      users: [],
      error: null,
    };
  }

  return {
    page,
    error: nexttogoByPage[page].error,
    isFetching: nexttogoByPage[page].isFetching,
    didInvalidate: nexttogoByPage[page].didInvalidate,
    totalCount: nexttogoByPage[page].totalCount,
    users: nexttogoByPage[page].users,
  };
}

export default connect(mapStateToProps)(NextToGoPage);
