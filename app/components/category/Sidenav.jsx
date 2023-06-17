import Accordion from "./Accordion";

const Sidenav = () => {
    const filters = [
        { heading: 'Selected', options: ['Tools'] },
        { heading: 'Availability', options: ['Show all Items', 'Out of Stock items', 'In Stock items'] },
        { heading: 'Pickup In Store', options: ['Available', 'Not Available'] },
        { heading: 'Price Range', options: ['$0-$10', '$11-$50', '$51-$100',] },
        { heading: 'Brands', options: ['Aim', 'Atn', 'Acc',] },
    ];
    return (
        <nav className="Sidenav">
            <hr />
            <h5>Filterd By</h5>
            <hr />
            {filters.map((filter) => (
                <div key={filter.heading}>
                    <Accordion heading={filter.heading} content={
                    <ul>
                        {filter.options.map((option) => (
                            <li key={option}>{option}</li>
                        ))}
                    </ul>}/>
                </div>
            ))}
            <hr />
        </nav>
    )
}

export default Sidenav