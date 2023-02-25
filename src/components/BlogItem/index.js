// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachPost} = props
  const {title, description, publishedDate} = eachPost
  return (
    <li className="list-items">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
