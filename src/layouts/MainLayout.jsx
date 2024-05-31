import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
        {/* Mungkin sini dikasih sidebar */}
        <Outlet /> {/* Ini isi dari pagenya */}
        {/* Mungkin sini dikasih sidebar kanan yg isinya popular people / your commuities */}
        </>
    )
}

export default MainLayout