import './App.css'
import React from 'react'
import AppRouter from './router/AppRouter'
import { UserProvider } from './contexts/UserContext'

const App = () => {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    )
}

export default App;

