import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useClock"


function App() {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: pakistan } = useClock('UTC', 5 * 60);
  const { clock: mst } = useClock('MST')
  const { clock: bst } = useClock('BST')

  // console.log('Local UTC', local.date);
  // console.log('EST', est.date);
  // console.log('PST', pst.date);
  // console.log('Pakistan', pakistan.date);
  // console.log('mst', mst.date);
  // console.log('bst', bst.date);
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  )
}

export default App
