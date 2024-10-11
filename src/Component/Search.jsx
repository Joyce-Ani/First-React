import "../CSS/style.css"
function Search(){
    return (
        <div className="search">
            <input className="box1" type="text" placeholder="   Search..." autoComplete="off"/>
            <img src="./Images/search.png" alt="search bar" />
        </div>
    );
}

export default Search;