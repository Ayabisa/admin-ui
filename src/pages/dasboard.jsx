import React from 'react';
import MainLayout from '../components/Layout/MainLayout'
import Card from '../components/Elements/Card';
import CardBalance from '../components/Fragment/CardBalance';
import CardGoal from '../components/Fragment/CardGoal';
import CardUpcomingBill from '../components/Fragment/CardUpcomingBill';
import CardRecentTransaction from '../components/Fragment/CardRecentTransaction';
import CardStatistic from '../components/Fragment/CardStatistic';
import CardExpenseBreakdown from '../components/Fragment/CardExpenseBreakdown';
import { transactions, bills, expensesBreakdowns } from '../data';

function dasboard() {
  console.log(transactions);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance />
          </div>
          <div className="sm:col-span-4">
            <CardGoal />
          </div>
          <div className="sm:col-span-4">
           <CardUpcomingBill data={bills}/>
          </div>
          	<div className="sm:col-span-4 sm:row-span-2">
              <CardRecentTransaction data={transactions}/>
          </div>
          <div className="sm:col-span-8">
            <CardStatistic />
          </div>
          <div className="sm:col-span-8">
              <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default dasboard;