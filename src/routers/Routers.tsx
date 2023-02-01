import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
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

export const Routers = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/gerenciador-tarefas/*" element={<HomePage />} />
                <Route path="/gerenciador-tarefas/register" element={<RegisterPage />} />
                <Route path="/gerenciador-tarefas/login" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    )
}