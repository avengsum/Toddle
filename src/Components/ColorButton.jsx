const ColorButton = ({ color, isSelected, onClick }) => {
    return(
        <label
            className={`color-option relative rounded-full p-2 cursor-pointer ${isSelected ? 'bg-gray-300' : ''}`}
            style={{ backgroundColor: color }}
        >
            <input
                type="radio"
                value={color}
                checked={isSelected}
                onChange={onClick}
                className="hidden"
            />
            {isSelected && (
                <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"></span>
            )}
        </label> 
    )
}

export default ColorButton