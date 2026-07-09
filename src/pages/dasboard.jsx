import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Card from '../components/Elements/Card';
import CardBalance from '../components/Fragment/CardBalance';
import CardGoal from '../components/Fragment/CardGoal';
import CardUpcomingBill from '../components/Fragment/CardUpcomingBill';
import CardRecentTransaction from '../components/Fragment/CardRecentTransaction';
import CardStatistic from '../components/Fragment/CardStatistic';
import CardExpenseBreakdown from '../components/Fragment/CardExpenseBreakdown';
import { 
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  // goals,  // ← COMMENT DULU, PAKAI DARI API
  expensesStatistics,
} from '../data';
import { goalService } from '../services/dataService';
import { AuthContext } from '../components/Layout/authContext';
import AppSnackbar from '../components/Elements/AppSnackbar';

function Dashboard() { // ← PERBAIKI: huruf besar D
  const [goals, setGoals] = useState({}); // ← PERBAIKI: tambah koma
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // ← PERBAIKI: typo
  });

  const handleCloseSnackbar = () => { // ← PERBAIKI: pake kurung kurawal
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // 🔥 TAMBAHKAN useEffect UNTUK FETCH DATA GOALS
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await goalService();
        setGoals(response.data || {});
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Gagal mengambil data goals",
          severity: "error",
        });
      }
    };
    fetchGoals();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>

        <AppSnackbar 
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Dashboard; // ← PERBAIKI: huruf besar D