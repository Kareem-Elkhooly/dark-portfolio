import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Adimn from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import DashHome from "./components/admin/DashHome";
import DashInbox from "./components/admin/DashInbox";
import DashProjects from "./components/admin/DashProjects";
import ProjAddNew from "./components/admin/ProjAddNew";
import ProjUpdate from "./components/admin/ProjUpdate";

import { useDispatch } from "react-redux";
import { fetchGlobalInfos } from "./redux/slices/globalInfo-slice";
import { fetchFeatured } from "./redux/slices/featured-slice";
import { fetchArInfos } from "./redux/slices/infoAr-slice";
import { fetchEnInfos } from "./redux/slices/infoEn-slice";
import { fetchProjects } from "./redux/slices/projects-slice";
import { fetchQuickProjects } from "./redux/slices/quickProjects-slice";
import DashQuickProjs from "./components/admin/DashQuickProjs";
import QuickAddNew from "./components/admin/QuickAddNew";
import QuickUpdate from "./components/admin/QuickUpdate";
import DashFeatured from "./components/admin/DashFeatured";
import FeaturedUpdate from "./components/admin/FeaturedUpdate";
import DashAdmins from "./components/admin/DashAdmins";
import AdminsAddNew from "./components/admin/AdminsAddNew";
import AdminUpdate from "./components/admin/AdminUpdate";
import DashInfo from "./components/admin/DashInfo";
import GlobalInfoUpdate from "./components/admin/GlobalInfoUpdate";
import LanguageInfoUpdate from "./components/admin/LanguageInfoUpdate";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGlobalInfos());
    dispatch(fetchFeatured());
    dispatch(fetchArInfos());
    dispatch(fetchEnInfos());
    dispatch(fetchProjects());
    dispatch(fetchQuickProjects());
  },[]);

  
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
//   useEffect(() => {
//   let title = "";
//   let metaDescription = "";

//   switch (pathname) {
//     case "/":
//       title = "";
//       metaDescription = "";
//       break;
//     case "/desktop-2":
//       title = "";
//       metaDescription = "";
//       break;
//   }

//   if (title) {
//     document.title = title;
//   }

//   if (metaDescription) {
//     const metaDescriptionTag = document.querySelector(
//       'head > meta[name="description"]'
//     );
//     if (metaDescriptionTag) {
//       metaDescriptionTag.content = metaDescription;
//     }
//   }
// }, [pathname]);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return ( 
    <Routes>
      {/* site routes */}
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:id" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      {/* dashboard login routes */}
      <Route path="/admin" element={<Adimn />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/forgetPassword" element={<ForgetPassword />} />
      {/* dashboard routes */}
      <Route path="/admin/dashboard" element={<Dashboard><DashHome/></Dashboard>} />
        {/* informations */}
        <Route path="/admin/dashboard/informations" element={<Dashboard><DashInfo/></Dashboard>} />
        <Route path="/admin/dashboard/informations/update" element={<Dashboard><GlobalInfoUpdate/></Dashboard>} />
        <Route path="/admin/dashboard/languageInformations/update" element={<Dashboard><LanguageInfoUpdate/></Dashboard>} />
        {/* projects */}
        <Route path="/admin/dashboard/projects" element={<Dashboard><DashProjects/></Dashboard>} />
        <Route path="/admin/dashboard/projects/addNew" element={<Dashboard><ProjAddNew/></Dashboard>} />
        <Route path="/admin/dashboard/projects/update/:id" element={<Dashboard><ProjUpdate/></Dashboard>} />
        {/* quick projects */}
        <Route path="/admin/dashboard/quickprojects" element={<Dashboard><DashQuickProjs/></Dashboard>} />
        <Route path="/admin/dashboard/quickprojects/addNew" element={<Dashboard><QuickAddNew/></Dashboard>} />
        <Route path="/admin/dashboard/quickprojects/update/:id" element={<Dashboard><QuickUpdate/></Dashboard>} />
        {/* featured */}
        <Route path="/admin/dashboard/featured" element={<Dashboard><DashFeatured/></Dashboard>} />
        <Route path="/admin/dashboard/featured/update/:id" element={<Dashboard><FeaturedUpdate/></Dashboard>} />
        {/* admins */}
        <Route path="/admin/dashboard/admins" element={<Dashboard><DashAdmins/></Dashboard>} />
        <Route path="/admin/dashboard/admins/addNew" element={<Dashboard><AdminsAddNew/></Dashboard>} />
        <Route path="/admin/dashboard/admins/update/:id" element={<Dashboard><AdminUpdate/></Dashboard>} />
        {/* inbox */}
        <Route path="/admin/dashboard/inbox" element={<Dashboard><DashInbox/></Dashboard>} />
    </Routes>
  );
}
export default App;

