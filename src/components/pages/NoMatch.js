import notFound from "./404.jpeg";

const NoMatch = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="notFound" />
    </div>
  )
}

export default NoMatch;