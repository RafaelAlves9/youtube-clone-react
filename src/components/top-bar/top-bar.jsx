import Search from "./components-top-bar/search"
import Opicion from "./components-top-bar/opicion-menu"
import YtMenu from "./components-top-bar/youtube-menu"

import "./top-bar.css"
import "./components-top-bar/search.css"
import "./components-top-bar/opicion-menu.css"
import "./components-top-bar/youtube-menu.css"

export default () =>
    <div className="top-bar">
        <div className="content-top">
            <YtMenu/>
            <Search/>
            <Opicion/>
        </div>
    </div>