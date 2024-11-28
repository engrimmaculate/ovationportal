import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import GeneralLayout from "./src/layouts/GeneralLayout";
import Login from "./src/pages/auth/login";
import Register from "./src/pages/auth/register";
import Recover from "./src/pages/auth/recover";
import CareerLayout from "./src/layouts/CareerLayout";
import Personal from "./src/pages/apply/personal";
import Verify from "./src/pages/auth/verify";
import Address from "./src/pages/apply/address";
import Identity from "./src/pages/apply/identity";
import Eligibility from "./src/pages/apply/eligibility";
import NextofKin from "./src/pages/apply/nextofkin";
import Mobility from "./src/pages/apply/mobility";
import WorkHistory from "./src/pages/apply/workhistory";
import Training from "./src/pages/apply/training";
import UserLayout from "./src/layouts/UserLayout";
import Menu from "./src/pages/user/menu";
import Profile from "./src/pages/user/profile";
import Logout from "./src/pages/user/logout";
import Addresses from "./src/pages/user/addresses";
import Eligible from "./src/pages/user/eligible";
import Nextkin from "./src/pages/user/nextkin";
import History from "./src/pages/user/history";
import Certs from "./src/pages/user/certs";
import Documents from "./src/pages/user/documents";
import Applications from "./src/pages/user/applications";
import Dashboard from "./src/pages/user/dashboard";
import Availability from "./src/pages/user/availability";
import AdminLayout from "./src/layouts/AdminLayout";
import AdminLogin from "./src/pages/admin/auth/login";
import AdminRegister from "./src/pages/admin/auth/register";
import AdminVerify from "./src/pages/admin/auth/verify";
import Admin_Dashboard from "./src/pages/admin/pages/admin_dashboard";
import Shifts from "./src/pages/user/shifts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GeneralLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/verify',
                element: <Verify />
            },
            {
                path: '/forgot-password',
                element: <Recover />
            }
        ]
    },
    {
        path: "*",
        element: <GeneralLayout />
    },
    {
        path: '/apply',
        element: <CareerLayout />,
        children: [
            {
                path: '/apply/personal',
                element: <Personal />
            },
            {
                path: '/apply/address-details',
                element: <Address />
            },
            {
                path: '/apply/proof-identity',
                element: <Identity />
            },
            {
                path: "/apply/right-to-work",
                element: <Eligibility />
            },
            {
                path: "/apply/next-of-kin",
                element: <NextofKin />
            },
            {
                path: "/apply/mobility-status",
                element: <Mobility />
            },
            {
                path: "/apply/work-history",
                element: <WorkHistory />
            },
            {
                path: "/apply/training",
                element: <Training />
            }

        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path:  '/admin/login',
                element: <AdminLogin />
            },
            {
                path: '/admin/register',
                element: <AdminRegister />
            },
            {
                path: '/admin/verify',
                element: <AdminVerify />
            },
            {
                path: '/admin/dashboard',
                element: <Admin_Dashboard />
            }
        ]
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '/user/menu',
                element: <Menu />
            },
            {
                path: '/user/availability',
                element: <Availability />
            },
            {
                path: '/user/dashboard',
                element: <Dashboard />
            },
            {
                path: '/user/profile',
                element: <Profile />
            },
            {
                path: '/user/address',
                element: <Addresses />
            },
            {
                path: '/user/eligible',
                element: <Eligible />
            },
            {
                path: '/user/kin',
                element: <Nextkin />
            },
            {
                path: '/user/history',
                element: <History />
            },
            {
                path: '/user/shifts',
                element: <Shifts />
            },
            {
                path: '/user/training',
                element: <Certs />
            },
            {
                path: '/user/documents',
                element: <Documents />
            },
            {
                path: '/user/applications',
                element: <Applications />
            },
            {
                path: '/user/logout',
                element: <Logout />
            }
        ]
    }
]);

export default router;