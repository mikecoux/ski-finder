import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";

export default function Home () {
    return (
        <div className="m-8 space-y-4">
            <h1 className="text-center text-lg font-bold">Welcome To Mike's Ski Finder</h1>
            <p>Here you can browse a selection of skis personally ridden or researched by a Y&#252;n.</p>
            <p>You may be asking, <i>"What is a Y&#252;n?"</i></p>
            <p>The Y&#252;ns are a group of Colorado-based skiers who aspire to develop all disciplines of the sport at a high level. Dropping 50' cliffs at Wolf Creek, straightlining couloirs at Silverton, skiing off 14ers... you name it, and the Y&#252;ns have probably attempted it. This range of experience gives the Y&#252;ns a unique perspective on many different types of skis, so this guide should serve you well as you build your quiver.</p><br />
            <NavButton linkTo={'/skis'} buttonText={'Start Browsing'} />
        </div>
    )
}