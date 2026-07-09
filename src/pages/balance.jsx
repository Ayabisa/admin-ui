import { useState } from 'react';
import BalanceWrapper from '../components/Fragment/BalanceWrapper';

function BalancePage() {
  const [data] = useState({
    balance: 99999,
    accountType: 'Credit Card',
    cardNumber: '3388 4556 8860 80000',
    goals: {
      target: 20000,
      achieved: 12500,
      thisMonth: 20000
    },
    bills: [
      { name: 'Figma - Yearly Plan', amount: 150, lastCharge: '2022-05-14' },
      { name: 'Adobe Inc - Yearly Plan', amount: 559, lastCharge: '2022-06-17' }
    ],
    transactions: [
      { name: 'GTR 5', category: 'Gadget & Gear', amount: 160, date: '2023-05-17' },
      { name: 'Polo Shirt', category: 'XL Fashions', amount: 20, date: '2023-05-17' },
      { name: 'Biriyani', category: 'Hajir Biriyani', amount: 12, date: '2023-05-17' },
      { name: 'Movie Ticket', category: 'Inox', amount: 15, date: '2023-05-17' },
      { name: 'Taxi Fare', category: 'Uber', amount: 10, date: '2023-05-17' },
      { name: 'Pizza', category: 'Pizza Hut', amount: 20, date: '2023-05-17' }
    ]
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h1>💳 Dashboard Keuangan</h1>
      
      {/* PROP DRILLING */}
      <BalanceWrapper data={data} />
    </div>
  );
}

export default BalancePage;