import { WorkingPage, MaintenancePage } from "./components/pages";

type Status = "WORKING" | "MAINTENANCE";

// Change this constant to switch statuses: 'WORKING' | 'MAINTENANCE'
const CURRENT_STATUS: Status = "MAINTENANCE";

function App() {
  return (
    <div className="dark bg-background select-none">
      {CURRENT_STATUS === "WORKING" ? <WorkingPage /> : <MaintenancePage />}
    </div>
  );
}

export default App;
