import _ from 'lodash';
import React from 'react';

const DropdownMenu = ({ category  }) => {
    return (
        <div className={cn("dropdown-menu__item")}>
            <h4 className={cn("dropdown-menu__item-tag")}>{ category.name}</h4>
            <ul className={cn("dropdown-menu__item-list")}>
                {
                    _.map(category.items, (item, index) => {
                        return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
                    })
                }
            </ul>
        </div>
    )
}

export default DropdownMenu;