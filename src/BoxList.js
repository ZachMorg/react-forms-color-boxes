import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = function(){
    const [boxes, setBoxes] = useState([]);
    const addBox = function(box){
        setBoxes(boxes => [...boxes, box]);
    };
    const removeBox = function(id){
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxHTML = boxes.map(box=>(
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.color}
            handleRemove={removeBox}/>
    ));

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxHTML}
        </div>
    );
}

export default BoxList;