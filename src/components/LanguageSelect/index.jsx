import Select, { components } from 'react-select';
import { useState } from 'react';

import ArrowDown from "../../assets/icons/ArrowDown.jsx"

// import Select from 'react-select';
// import './LanguageSelect.sass'

const options = [
    {
        value: 'uz',
        label: 'UZ'
    },
    {
        value: 'en',
        label: 'EN'
    },
    {
        value: 'ру',
        label: 'РУ'
    }
]

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowDown/>
        </components.DropdownIndicator>
    );
}

function Language() {
    const [currentLanguge, setLanguge] = useState("uz");

    const getValue = () => {
        return currentLanguge ? options.find(c => c.value === currentLanguge) : ''
    }

    const langSelect = (newValue) => {
        setLanguge(newValue.value)
    }

    return (
        <Select
            classNamePrefix="custom-select"
            options={options}
            value={getValue()}
            onChange={langSelect}
            isSearchable={false}
            components={{
                DropdownIndicator
            }}
            // placeholder="ffff"
            styles={{
                control: (base) => ({
                    ...base,
                    border: "none",
                    borderRadius: "50%",
                    boxShadow: "none",
                    fontSize: '1.4rem',
                    fontFamily: "OpenSans-Regular",
                    color: '#929DB2',
                    cursor: 'pointer',
                    background: "#F6F7FA",
                    padding: "0.8rem",
                }),
                valueContainer: (base) => ({
                    ...base,
                    padding: 0,
                }),
                singleValue: (base) => ({
                    ...base,
                    color: '#929DB2',
                }),
                indicatorSeparator: (base) => ({
                    ...base,
                    display: 'none',
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                }),
                menu: (base) => ({
                    ...base,
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#181818',
                    marginTop: 0,
                    padding: '0 5px'
                }),
                option: (base, state) => ({
                    ...base,
                    padding: '0',
                    fontSize: '1.4rem',
                    fontFamily: "OpenSans-Regular",
                })
            }}
        />
    );
}

export default Language;
