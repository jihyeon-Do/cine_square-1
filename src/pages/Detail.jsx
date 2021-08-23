import React from 'react';
import FooterTemplate from '../components/atom/FooterTemplate';
import HeaderTemplate from '../components/atom/HeaderTemplate';
import './detail.scss'

export default function Detail() {
  return (
    <>
      <HeaderTemplate />
      <main className="detail-container">
        <section>
          <div className="poster-container"></div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}