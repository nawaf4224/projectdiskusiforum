import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../pages/Login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import MainLayout from '../layouts/MainLayout'

const routes = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: 'test'
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
])

const AppRouter = () => {
    return <RouterProvider router={routes}/>
}

export default AppRouter;