import React from 'react'
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'viwe_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionsValue = sortByOptions[sortByOptions]
            return <li key={sortByOptionsValue}>{sortByOptions}</li>
            
        }) // Object.keys(obj) คือการดึงค่าทั้งหมดของ Obj ออกมา แต่ถ้าจะดึงออกมาในรูปของอาเรย์ ใช้ Object.values(obj)
        //https://www.babelcoder.com/blog/posts/es8 อ้างอิงเพิ่มเติมเกี่ยวกับการดึงมาใช้ด้วย Object.method
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
    
}

export default SearchBar