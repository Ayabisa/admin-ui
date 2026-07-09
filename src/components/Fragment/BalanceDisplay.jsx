import CardBalance from './CardBalance';

function BalanceDisplay({ data }) {
  console.log('🟢 BalanceDisplay menerima data:', data);
  return <CardBalance data={data} />;
}

export default BalanceDisplay;