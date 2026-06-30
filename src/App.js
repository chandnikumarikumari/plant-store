import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import TrendingPlants from "./components/TrendingPlants";
import TopSelling from "./components/TopSelling";
import CustomerReviews from "./components/CustomerReviews";
import O2Plants from "./components/O2Plants";
import Footer from "./components/Footer";

function App() {
    const [cartCount, setCartCount] = useState(3);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleAdd = () => setCartCount(c => c + 1);

    return ( <
        div className = "bg-flora-bg font-inter" >
        <
        Navbar cartCount = { cartCount }
        /> <
        HeroBanner / >
        <
        TrendingPlants onAdd = { handleAdd }
        /> <
        TopSelling onAdd = { handleAdd }
        /> <
        CustomerReviews / >
        <
        O2Plants / >
        <
        Footer / >

        { /* Back to top */ } {
            showTop && ( <
                button onClick = {
                    () => window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className = "fixed bottom-7 right-7 bg-flora-green hover:bg-flora-glow text-white border-none rounded-full w-11 h-11 flex items-center justify-center text-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 z-50" > ↑
                <
                /button>
            )
        } <
        /div>
    );
}
export default App;