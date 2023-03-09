import React,{Fragment} from 'react';
import {useSelector} from "react-redux";

function InfoBlock() {
    const {parcelInformation} = useSelector(state => state.list);


    return (
        <div style={{
            marginRight: '20px',
            minHeight: '300px',
            width: '300px',
            border: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
            padding:'5px'
        }}>
            {parcelInformation.map((item, i) =>

                 ( <Fragment key={i}>
                        <p> Статус Дотавки: {item.Status}</p>
                         {item.LastAmountTransferGM.length>0 ? (<p> Cума: {item.LastAmountTransferGM}</p>): (<p> Cума: Без повернення грошей</p>)}
                        <p> Відправлено: {item.WarehouseSender}</p>
                        <p> Отримано: {item.WarehouseRecipient}</p>
                </Fragment>
                )

            )}

        </div>
    );
}

export default InfoBlock;