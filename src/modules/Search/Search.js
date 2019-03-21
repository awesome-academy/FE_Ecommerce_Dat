import React from 'react';
import cn from 'classnames';
import './Search.scss';

class Search extends React.Component {
    render() {
        return (
            <div className={cn("header-search")}>
                <input className={cn("search-icon")} type="search" />
            </div>
        )
    }
}

export default Search;