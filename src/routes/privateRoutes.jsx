import React, { Children } from 'react';
import AdminHome from '../pages/Admin/AdminHomePage'
import CustomerHome from '../pages/Customer/CustomerHomePage';
import OwnerHome from '../pages/ShopOwner/ShopOwnerHomePage'
import ManagerUser from '../pages/Admin/ManagerUser';

const privateRoutes = {
    Customer: [
        {
            path : "/customer",
            element : <CustomerHome />
        }
    ],
    Admin: [
        {
            path : "/admin",
            element : <AdminHome />,
            children: [
                {
                    path : "users",
                    element : <ManagerUser />
                },
            ]
        }
    ],
    ShopOwner: [
        {
            path : "/owner",
            element : <OwnerHome />
        }
    ]
}

export default privateRoutes;