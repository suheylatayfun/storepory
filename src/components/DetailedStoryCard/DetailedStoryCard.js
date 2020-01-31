import React from "react";

import "./../../styles/DetailedStoryCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

class DetailedStoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story:{},
      adminStatus: false
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/stories/${id}`).then(response => {
      console.log(response.data)

      // this.setState({ story: [response.data]});
      this.setState({ story: response.data[0]});
      // this.setState({ story: response.data[story.id] });
      
    });
    axios.get("/api/admin").then(response => {
      this.setState({ adminStatus: response.data.isAdmin });
    });
  }
  // getAdminStatus=()=>{

  // }

  render() {
    const { story } = this.state;
    console.log(story)
    return (
      <div key={story.id} className="detailedStory">
        <h2>{story.title}</h2>
        <h3>By {story.name} </h3>
        <img src={story.image} alt="random" className="detailedSImage" />
        <p>{story.content}</p>
        <Link to="/">
          <h1>X</h1>
        </Link>
        {this.state.adminStatus ? (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default DetailedStoryCard;
