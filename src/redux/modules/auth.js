import { takeEvery, put, call, select } from '@redux-saga/core/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
// 서비스 import 자리

const prefix = 'CINESQUARE/AUTH';

// action
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;
