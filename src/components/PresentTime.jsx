let PresentTime = () =>{
  let time = new Date();
  return <p className="lead">The current time is: {time.toLocaleDateString()} = {time.toLocaleDateString()} </p>
}
export default PresentTime;