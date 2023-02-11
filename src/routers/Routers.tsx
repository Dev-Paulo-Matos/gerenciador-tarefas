import React, { PropsWithChildren } from "react"
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Authenticated } from "../authentication/Authentication"
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
    return(
    <React.Fragment>
        { Authenticated() ? props.children : <Navigate to="/gerenciador-tarefas/login" /> }
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
                <Route path="/gerenciador-tarefas/app"  element={
                    <ProtectedRoute>
                    </ProtectedRoute>                
                }/>
            </Routes>
        </BrowserRouter>
    )
}