import React from 'react';

function InfoBlock() {
    return (
        <div style={{marginRight: '20px'}}>
            <textarea readOnly={true} style={{resize: "none", height: '200px', width: '300px'}}> </textarea>
        </div>
    );
}

export default InfoBlock;