import { randomBytes } from "crypto"
import React, { Fragment, PropsWithChildren } from "react"
import { BrowserRouter, Route, Routes, RedirectFunction, redirect, Navigate, useNavigate } from "react-router-dom"
import { Header } from "../components/core/header/Header"
import Main from "../components/core/main/Main"
import { SectionContato } from "../components/sections/contato/Section-Contato"
import { SectionMain } from "../components/sections/main/Section-Main"
import Login from "../components/user/login/Login"
import Register from "../components/user/register/Register"

export const HomePage = () => {
    return(
        <React.Fragment>
            <Main />
            <SectionMain />
            <SectionContato />
        </React.Fragment>
    )
}

const RegisterPage = () => {
    return (
    <React.Fragment>
        <Register />
    </React.Fragment>
    )
}

const LoginPage = () => {
    return (
    <React.Fragment>
        <Login />
    </React.Fragment>
    )
}

const ProtectedRoute = (props: PropsWithChildren) => {
    const navigate= useNavigate()
    if(true){
        navigate('/login')
    }

    return(
    <React.Fragment>
        { false ? props.children : <Navigate to="/gerenciador-tarefas/login" /> }
    </React.Fragment>
    )
}

export const Routers = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/gerenciador-tarefas/*" element={<HomePage />} />
                <Route path="/gerenciador-tarefas/register" element={<RegisterPage />} />
                <Route path="/gerenciador-tarefas/login" element={<LoginPage />}/>
                <Route path="/gerenciador-tarefas/app" element={
                    <ProtectedRoute>
                        123
                    </ProtectedRoute>                
                }/>
            </Routes>
        </BrowserRouter>
    )
}