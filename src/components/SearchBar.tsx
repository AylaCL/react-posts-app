interface SearchBarProps {
    searchTerm: string;
    onChange: (searchTerm: string) => void;
}

export function SearchBar({searchTerm, onChange}: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={e => onChange(e.target.value)}
        />
    )
}