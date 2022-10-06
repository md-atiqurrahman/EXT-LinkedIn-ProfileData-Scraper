import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';

interface IProps {

}

export const Popup: FC<IProps> = () => {

    return (
        <div>Popup Page 125</div>
    )
}

const container = document.getElementById('popup');
const root = createRoot(container!); 
root.render(<Popup/>);