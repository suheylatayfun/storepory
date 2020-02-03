import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

import "./../../styles/DetailedStoryCard.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class DetailedStoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      adminStatus: false,
      redirect: false
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/stories/${id}`).then(response => {
      // console.log(response.data);
      this.setState({ story: response.data[0] });
    });
    axios.get("/api/admin").then(response => {
      this.setState({ adminStatus: response.data.isAdmin });
    });
  }

  handleDelete = id => {
    axios.delete(`/api/stories/${id}`).then(response => {
      console.log(response);
      this.setState({ redirect: true });
    });
  };

  render() {
    const { story } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    // console.log(story)
    return (
      <main>
        {/* <div className="header"></div> */}
        <Header/>
        <section id={story.id} className="detailedStory">
          <Link to="/">
            <h1 id="exit">X</h1>
          </Link>
          <h1 id="detailedSTitle">{story.title}</h1>
          <img src={story.image} alt="random" id="detailedSImage" />
          <ul className="avatar-name-container">
            <li>
              <img
                id="avatar"
                alt="avatar"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </li>
            <li>
              <h3 id="username">{story.fullName} </h3>
            </li>
          </ul>

          <p id="detailedSContent">{story.content}</p>
          {this.state.adminStatus ? (
        
              <div className="button-container">
              <Link to={`/story/${story.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => this.handleDelete(story.id)}>
                Delete
              </button>
              </div>
        
          ) : null}
        </section>
        <Footer/>
      </main>
    );
  }
}
export default DetailedStoryCard;
