import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useSessionStorage from '../lib/useSessionStorage'
import { Outlet } from 'react-router-dom'
import axiosInstance from '../lib/axiosInstance'
import { UserContext } from '../contexts/UserContext'

const MainLayout = () => {
    const navigate = useNavigate()
    const apiKey = useSessionStorage('api_key')
    const { setUser } = useContext(UserContext)

    const getUser = async () => {
        try {
            let response = await axiosInstance.get('v1/auth/validate').data
            setUser(response.data)
        } catch (error) {
            setUser(null)
        }
    }

    useEffect(() => {
        if (!apiKey)
            navigate('/login')
    }, [apiKey, navigate])

    useEffect(() => {
        if (apiKey)
            getUser()

        return (() => {
            setUser(null)
        })
    }, [])

    return (
        <>
            {/* Mungkin sini dikasih sidebar */}
            <Outlet /> {/* Ini isi dari pagenya */}
            {/* Mungkin sini dikasih sidebar kanan yg isinya popular people / your commuities */}
        </>
    )
}

export default MainLayout