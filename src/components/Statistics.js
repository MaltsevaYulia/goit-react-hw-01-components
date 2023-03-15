import PropTypes from 'prop-types';

export const Statistics=({data})=>{
    return (
        <>
        <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {data.map(({id, label,percentage})=>{
                return (
                <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>)
            })}

        </ul>
      </section></>)  
    
}

Statistics.propTypes={
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired)
    
}