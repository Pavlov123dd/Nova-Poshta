import React, {Fragment} from 'react';
import './style.sass'
import {useSelector} from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function InfoBlock() {
    const {parcelInformation} = useSelector(state => state.list);

    console.log(parcelInformation)

    return (
        <Box className="container-wrapper">

            {parcelInformation.length > 0 ?

                (parcelInformation.map((item, i) =>
                    item.StatusCode !== '3' ?
                    (<Fragment key={i}>
                            <Typography variant="button" display="block" gutterBottom>
                                Статус Дотавки:
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {item.Status}
                            </Typography>
                            {item.LastAmountTransferGM.length > 0 ? (
                                    <Fragment>
                                        <Typography variant="button" display="block" gutterBottom>
                                            Cума:
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.LastAmountTransferGM}
                                        </Typography>
                                    </Fragment>
                                )
                                : (
                                    <Fragment>
                                        <Typography variant="button" display="block" gutterBottom>
                                            Cума:
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Без повернення грошей
                                        </Typography>
                                    </Fragment>
                                )}

                            <Typography variant="button" display="block" gutterBottom>
                                Відправлено:
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {item.WarehouseSender}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                Отримано:
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {item.WarehouseRecipient}
                            </Typography>

                        </Fragment>
                    ) : <Typography variant="button" display="block" gutterBottom
                                    key={i} style={{color: 'red'}}> Такий номер не знайдений, перевірте введений номер ТТН
                        </Typography>

                )
                ) : null}

        </Box>
    );
}

export default InfoBlock;