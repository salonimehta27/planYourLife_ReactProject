import React from 'react'

function RefreshButton() {
    function refreshPage() {
        window.location.reload(false)
    }

    return (
        <div>
            <button onClick={refreshPage}>Refresh</button>
        </div>
    )
}

export default RefreshButton

