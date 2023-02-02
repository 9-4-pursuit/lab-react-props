export default function Progress(props) {
    return (
        <div className="progress">
            <h2>
                Raised <span className="secondary">
                    ${props.amount}
                </span> of 
                <span className="secondary">
                    ${props.target}
                </span>
            </h2>
        </div>);
}
