import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

  const { currentUser } = useContext(AuthContext);

  //TEMPORARY

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg/800px-2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg/800px-2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg/800px-2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg/800px-2011_MuchMusic_Video_Awards_-_Foster_the_People.jpg",
    },

  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories