import { useRouteLoaderData, Link } from "react-router-dom";
import SkiListTiles from "../components/SkiListTiles";

export default function Home () {
    const skiData = useRouteLoaderData("root")

    return (
        <div className="space-y-4 pb-6">
            <div className="relative">
                <img src="./images/ski-slash.jpeg" alt="Mike skiing." className="opacity-75"/>
                <h1 className="text-center text-3xl font-bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">Welcome To Mike's Ski Finder</h1>
                <Link to='/skis'><button className="bg-sky-500 hover:bg-sky-700 rounded-full py-1 px-2.5 text-white absolute bottom-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2">Start Browsing</button></Link>
            </div>
            <SkiListTiles skiData={skiData}/>
        </div>
    )
}