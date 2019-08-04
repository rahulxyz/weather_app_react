import React from 'react';

function getMessage(statusCode) {
    switch (statusCode) {
        case '400':
            return "Server was unable to process request"
        case '404':
            return "Please try later"
        case '204':
            return "Data Not Available"
        default:  //500
            return "Server Error";
    }
}

const Error = (props) => {
    return <div>
        <div class="border border-light rounded-lg px-2">
            <p class="display-4"><i class="fas fa-exclamation-triangle mr-2"></i>
                <p>{getMessage(props.errorStatusCode)}</p>
            </p>
        </div>
    </div>
}

export default Error;