import React from 'react';

function EmailForm () {
    return (
        <div>
            <div>
            <p>For booking or questions, please fill out the form below!</p>
        </div>
        <form action="get" method="get">
            <input type="email"/>
        </form>
        </div>
    )
}

export default EmailForm;