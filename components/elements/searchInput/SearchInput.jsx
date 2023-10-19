import { Button } from ".."
import { Search } from "iconoir-react"

const SearchInput = () => {
  return (
    <div className='search-input'>
      <div className="search-input__wrapper">
        <input type="text" placeholder="Search article or news..."/>
        <Button size="md-input" variant="input">Search <Search/></Button>
      </div>
    </div>
  )
}

export default SearchInput