export default function Progress(props) {
  return (
    <div className="Progress">
    <h2> Raised <span className="secondary"> ${props.theTotal}</span> of <span className="secondary"> ${props.target} </span></h2>
    </div>
  );
}
