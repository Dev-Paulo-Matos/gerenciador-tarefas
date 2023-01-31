import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/core/header/Header"
import Main from "../components/core/main/Main"
import { SectionContato } from "../components/sections/contato/Section-Contato"
import { SectionMain } from "../components/sections/main/Section-Main"
import Register from "../components/user/register/Register"

export const HomePage = () => {
    return(
        <React.Fragment>
            <Header />
            <Main />
            <SectionMain />
            <SectionContato />
        </React.Fragment>
    )
}

const RegisterPage = () => {
    return (
    <React.Fragment>
        <Header />
        <Register />
    </React.Fragment>
    )
}

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path="/*" element={<HomePage />} />
                <Route path="/login" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}