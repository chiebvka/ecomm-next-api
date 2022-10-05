import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Announcement from './Announcement';

const Layout = ({ children, title='Deluccis Online Store' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout