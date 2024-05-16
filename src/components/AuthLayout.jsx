import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication=true}) => {

    const navigate = useNavigate()
    const [ loader, setLoader ] = useState(true)
    const authstatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authstatus!==authentication){
            navigate("/login")
        }else if(!authentication && authstatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authstatus, navigate, authentication])
  return (
    loader ? <h1>Loader</h1> : <>{children}</>
  )
}

export default Protected