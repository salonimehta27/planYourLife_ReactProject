import NewsContainer from "./NewsContainer"
import { useState } from 'react'

function Today() {
    const [news, setNews] = useState([])
    return (
        <div>
            <NewsContainer news={news} setNews={setNews} />
        </div>
    )
}

export default Today
