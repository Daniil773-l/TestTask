import './SearchFilter.scss'

interface Props {
    search: string
    onSearch: (value: string) => void
    filter: string
    onFilter: (value: string) => void
    cityList: string[]
}

const SearchFilter = ({ search, onSearch, filter, onFilter, cityList }: Props) => {
    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Поиск по имени или email"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
            <select value={filter} onChange={(e) => onFilter(e.target.value)}>
                <option value="">Все города</option>
                {cityList.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    )
}

export default SearchFilter
