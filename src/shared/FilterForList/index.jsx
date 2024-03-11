import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    {
        value: 'teddi',
        label: 'teddi'
    },
    {
        value: 'nanine',
        label: 'Nanine'
    },
    {
        value: 'garv',
        label: 'Garv'
    },
];

export default function Filter({setSearch}) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Dastur nomi"
                styles={{
                    control: (base) => ({
                        ...base,
                        border: "none",
                        boxShadow: "none",
                        fontSize: '1.4rem',
                        fontFamily: "OpenSans-Regular",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        color: "#C0C7D3",
                        cursor: 'pointer',
                        width: '24rem',
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        padding: 0,
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: "#C0C7D3",
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        display: 'none',
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        // padding: 'rem',
                        color:'#929DB2'
                    }),
                    menu: (base) => ({
                        ...base,
                        fontSize: '1.4rem',
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: '#181818',
                        marginTop: 0,
                        padding: '0 5px'
                    }),
                    option: (base,) => ({
                        ...base,
                        padding: '0',
                        fontSize: '1.4rem',
                        fontFamily: "OpenSans-Regular",
                    })
                }}
            />
        </div>
    );
}