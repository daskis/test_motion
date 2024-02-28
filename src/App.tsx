import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {SecondPage} from "./pages/SecondPage/SecondPage.tsx";
import PagesProvider from "./utils/providers/PagesProvider.tsx";

function App() {

    return (
        <BrowserRouter>
            <PagesProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/second" element={<SecondPage />} />
                </Routes>
            </PagesProvider>
        </BrowserRouter>
    )
}

export default App
