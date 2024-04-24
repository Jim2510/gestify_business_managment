import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { DashboardLayout } from "./layout/DashboardLayout";
import { DashboardTables } from "./pages/DashboardTables";
import { DashboardX } from "./pages/DasboardX";
import { DashboardDs } from "./pages/DashboardDs";
import { DashboardLogistic } from "./pages/DashboardLogistic";
import { DashboardMan } from "./pages/DashboardMan";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.token === null) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <>
      <div className="w-[100vw] h-full flex">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Home />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="tables" element={<DashboardTables />} />
            <Route path="expenditure" element={<DashboardX />} />
            <Route path="sales" element={<DashboardDs />} />
            <Route path="logistic" element={<DashboardLogistic />} />
            <Route path="administration" element={<DashboardMan />} />
          </Route>
          {/* <Route path="/landingpage" element={<NavLand />} />
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/calendar" element={<Scheduler />} />
          <Route path="/landingpage" element={<LandingPageLayout />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="tables" element={<DashboardTable />} />
            
           
           
            
            <Route path="backoffice" element={<DashboardBO />} />
          </Route>
          <Route path="/scheduler" element={<SchedulerLayout />}>
            <Route path="calendar" element={<Calendar />} />
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
