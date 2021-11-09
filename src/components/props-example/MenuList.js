import React from 'react';

const MenuList = (props) => {

    const MenuLink = (props)=>{
        return (<a href={props.menu.path}>{props.menu.name}</a>);

    };

    return (
        <div>
            {props.menus.map(m => {
                return (<ul>
                    <li><MenuLink menu = {m}/></li>
                </ul>)

            })
            }
        </div>
    );
};

export default MenuList;