import React from "react";
import classes from "./Transfers.module.css";
import TransferCheckbox from './TransferCheckbox/TransferCheckbox';
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";

const transfers = [
  'all','0','1','2','3'
];
const transfersLabel = {
  all: 'Все',
  '0': 'Без пересадок',
  '1': '1 пересадка',
  '2': '2 пересадки',
  '3': '3 пересадки'
};
const Transfers = props => {
    return (
    <div className={classes.Transfers}>
      <span>Количество пересадок</span>
        <FormGroup style={{marginTop: '20px'}}>
        {
          transfers.map((key, index) => {
            return (
              <TransferCheckbox
                key={index}
                transferKey={key}
                label={transfersLabel[key] }
                checkedTransfer={props.checkedTransfer.includes(key)}
                onTransferChange={props.onTransferChange}
                onClickOnly={props.onClickOnly}
              />
            )
          })
        }
        </FormGroup>
    </div>
  )
};

export default Transfers;