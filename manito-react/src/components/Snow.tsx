import "./snow.css"

export default function Snow({ ...props }) {
  return (
    <>
      <div className="snow-wrap background-container" {...props}>
        <div className="snow"></div>
      </div>
    </>
  )
}
