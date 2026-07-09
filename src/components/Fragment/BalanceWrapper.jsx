import BalanceDisplay from './BalanceDisplay';

function BalanceWrapper({ data }) {
  console.log('🔵 BalanceWrapper menerima data:', data);
  return <BalanceDisplay data={data} />;
}

export default BalanceWrapper;