import React, { FC } from 'react';
import {render} from 'react-dom';

interface IProps {

}

export const Popup: FC<IProps> = () => {
    return (
        <div>Popup Page 125</div>
    )
}

render(<Popup/>, document.getElementById('popup'))