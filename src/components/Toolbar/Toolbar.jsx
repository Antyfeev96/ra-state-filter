import React from 'react'

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className="toolbar">
      {filters.map((filter) => {
        const isSelected = selected === filter;
        const className = isSelected ? 'toolbar__item selected' : 'toolbar__item';
        return <div key={filter} className={className} selected={isSelected} onClick={(e) => onSelectFilter(e.target.textContent)}>{filter}</div>;
      })}
    </div>
  )
}
