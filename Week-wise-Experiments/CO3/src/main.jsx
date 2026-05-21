import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Default from './components/Default.jsx'
//import Childrenprop from './components/Childrenprop.jsx'
//import Counter from './components/Counter.jsx'
//import StudentList from './components/StudentList.jsx'
//import ResponsiveLayout from './components/ResponsiveLayout.jsx'
//import ControlledForm from './components/ControlledForm.jsx'
import UnControlledForm from './components/UnControlledForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Default />*/}
    {/* <Counter />*/}
    {/*<StudentList/>*/}
    {/*<ResponsiveLayout />*/}
    {/*<ControlledForm />*/}
    {<UnControlledForm/>}
    {/*<Childrenprop/>*/}

  </StrictMode>,)