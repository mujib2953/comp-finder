import React, { FunctionComponent, useEffect, useState } from "react";

const GameHolder: FunctionComponent = () => {

    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);

    

    return (
        <div>
            Holder
        </div>
    );
}

export default GameHolder;
