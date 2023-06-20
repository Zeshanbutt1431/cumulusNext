import Accordion from "./Accordion";

const Sidenav = () => {
    const filters = [
        { heading: 'Selected', options: [{ label: "Tools", value: "tools" }] },
        { heading: 'Availability', options: [{label:"Show all Items", value:"allItems"},{label: "Out of Stock items", value:"outStock"},{ label:"In Stock items",value:"InStock"}] },
        { heading: 'Pickup In Store', options: [{label:"Available", value:"available"}, {label:"Not Available", value: "notAvailable"}] },
        { heading: 'Price Range', options: [{label: "$0-$10",value:"0to10"},{label: "$11-$50",value:"11t050"} ,{label:'$51-$100',value:"51t0100"}] },
        { heading: 'Brands', options: [{label:"Breta", value:"breta"}, {label:"Glock", value:"glock"}] },
    ];
    return (
        <nav className="Sidenav">
            <h5>Filterd By</h5>
            {filters.map((filter) => (
                <div key={filter.heading}>
                    <Accordion heading={filter.heading} content={
                        <ul>
                            {filter.options.map((option) => (
                                <li key={option}>
                                    <label key={option.value}>
                                        <input
                                            type="checkbox"
                                            value={option.value}
                                        />
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>} />
                </div>
            ))}
        </nav>
    )
}

export default Sidenav