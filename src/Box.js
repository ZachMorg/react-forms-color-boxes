import React from 'react';

const Box = function({
    id,
    handleRemove,
    width = 100,
    height = 100,
    backgroundColor = 'gray'
}){
    const remove = function(){
        handleRemove(id);
    }

    return(
        <div>
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: backgroundColor
                }}
            />
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;