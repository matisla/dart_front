import CreateAccount from "../../components/Account/CreateAccount"
import Login from "../../components/Account/Login"
import Logout from "../../components/Account/Logout"

export default [
  {
    path: '/account',
    title: 'account',
    children: [
      {
        path: '/login',
        name: 'account-login',
        component: Login,
      },
      {
        path: '/logout',
        name: 'account-logout',
        component: Logout,
        redirect: { name: 'home' },
      },
      {
        path: '/create',
        name: 'account-create',
        component: CreateAccount,
      },
    ],
  },
];
