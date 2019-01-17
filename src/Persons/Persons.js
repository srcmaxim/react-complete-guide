import React, { Component } from 'react';

import Person from '../Person/Person';

const persons = (props) => {
    const ps = props.persons.map((p) => {
        return (
            <li>
                <Person name={p.name} age={p.age} />
            </li>
        );
    })
    return <ul>{ps}</ul>;
}

export default persons;