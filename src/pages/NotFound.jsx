import React from 'react';
import { useSelector } from 'react-redux';

export default function NotFound() {
  const loading = useSelector(state => state.loading)
  return (
    <div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>{JSON.stringify(loading)}</p>
    </div>
  );
}