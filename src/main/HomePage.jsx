import TopBar from "../components/top-bar/top-bar.jsx"
import LeftBar from "../components/left-bar/Left-bar.jsx"
import ContentHome from "../components/content-home/content-home.jsx"

import "../components/top-bar/top-bar.css"
import "../components/content-home/content-home.css"
import "../components/left-bar/left-bar.css"
import './All.css'

export default () =>
    <div className="all-content-home">
        <ContentHome />
        <TopBar />
        <LeftBar />
    </div>