import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
import axios from 'axios';
const API_KEY = `ac356e08f41d089bde14be73130c16e0eaf431df86778ce010f73665a5bb7b37`
class SearchBar extends Component {
    state = { 
        value:'',
        searchResult:[]
     }

    handleChange = (e) =>{
         this.setState({
           value:e.target.value
         })
     }
    handleSubmit = (e) =>{
     e.preventDefault()
     const searchValue = this.state.value
     axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=15&orientation=landscape&query=${searchValue}}`).then(res => {
             this.setState({
                 
                 searchResult: res.data.results
             })     
 })
    }
    render() { 
        return ( 
            <div className="searchbardiv">
            <form onSubmit={this.handleSubmit} className="search-container">
            <input
            className="field-container"
            type='text'
            value={this.state.value}
            placeholder="Search Images..."
            onChange={this.handleChange}/>   
            <button className="btn-warning" type="submit"><i class="fa fa-search"></i></button>
            </form>
             <SearchResult results={this.state.searchResult}/>
            </div>
         );
    }
}
 
export default SearchBar;