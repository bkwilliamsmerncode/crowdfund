import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css'
import Dashboard from "./Dashboard"



function App() {

  return (
      <Router basename={process.env.PUBLIC_URL} >
          <Routes>

              <Route path="/" element={<Dashboard />} />

          </Routes>
      </Router>
  )
}

export default App