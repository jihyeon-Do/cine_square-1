import React from 'react';
import FooterTemplate from '../components/atom/FooterTemplate';
import HeaderTemplate from '../components/atom/HeaderTemplate'

export default function Profile() {
  return (
    <>
      <HeaderTemplate />
      <main className="profile-main">
        <section>
          <div className="profile-info"></div>
          <div className="profile-full-info"></div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}