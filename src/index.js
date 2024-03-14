import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import './index.css';
import './App.css';

import NavigationBar from './Navigationbar';
import CoverImage from './CoverImage';
import HeaderFreelancer from './HeaderFreelancer';
import CardList from './Cardlist';
import Button from './Button'
import HeaderCustomer from './HeaderCustomer';
import CustomerCardList from './CustomerCardlist'
import EmailBanner from './EmailBanner'
import FooterBanner from './FooterBanner'
import FooterDevLinks from './FooterDevLinks';

ReactDOM.render(
  <Router> {/* Wrap your component hierarchy with Router */}
    <div>
      <NavigationBar />
      <CoverImage />
      <HeaderFreelancer />
      <CardList />
      <Button />
      <HeaderCustomer />
      <CustomerCardList />
      <Button />
      <EmailBanner />
      <FooterBanner />
      <FooterDevLinks />
    </div>
  </Router>,
  document.getElementById('root')
);
