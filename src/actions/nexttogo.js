import { callApi } from '../utils/apiUtils';

export const SELECT_USERS_PAGE = 'SELECT_USERS_PAGE';
export const INVALIDATE_USERS_PAGE = 'INVALIDATE_USERS_PAGE';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';


export function selectNtgPage(page) {
  return {
    type: SELECT_USERS_PAGE,
    page,
  };
}

export function invalidateNtgPage(page) {
  return {
    type: INVALIDATE_USERS_PAGE,
    page,
  };
}

function usersRequest(page) {
  console.log('usersRequest');
  return {
    type: USERS_REQUEST,
    page,
  };
}

function usersSuccess(page) {
  console.log('usersSuccess');
  return function (payload) {
    console.log('payload:' + payload);
    let arr = payload.races.slice((page-1) * 6, page * 6);
    return {
      type: USERS_SUCCESS,
      page,
      users: arr,
      totalCount: 6,
    };
  };
}

function usersFailure(page) {
  console.log('usersFailure');
  return function (error) {
    return {
      type: USERS_FAILURE,
      page,
      error,
    };
  };
}

const API_ROOT = 'https://api.beta.tab.com.au';

function fetchTopUsers(page) {
  const url = `${API_ROOT}/v1/tab-info-service/racing/next-to-go/races/?jurisdiction=NSW`;
  return callApi(url, null, usersRequest(page), usersSuccess(page), usersFailure(page));
}

export function fetchTopNtgIfNeeded(page) {
  console.log('fetchTopUsersIfNeeded');
  return (dispatch, getState) => {
    return dispatch(fetchTopUsers(page));
  };
}
