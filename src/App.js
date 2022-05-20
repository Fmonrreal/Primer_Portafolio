import { AppRouter } from "./routers/AppRouter";
import PortfolioState from "./context/portfolio/portfolioState"

function App() {
  return (
    // eslint-disable-next-line
    <PortfolioState>
      <AppRouter/>
    </PortfolioState>
  );
}

export default App;
