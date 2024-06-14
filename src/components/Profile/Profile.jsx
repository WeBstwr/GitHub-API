import "./profile.css";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { LuGitFork } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import profImg from "../../assets/wp1.jpg";

const GitIcon = ({ icon }) => {
  return (
    <div className="git-icon">
      <div className="git-icon-wrapper">{icon}</div>
    </div>
  );
};

const GitSocials = ({ icon, label }) => {
  return (
    <div className="git-socials">
      <div className="git-socials-icon-wrapper">{icon}</div>
      {label}
    </div>
  );
};
const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-icon">
            <GitIcon icon={<FaGithubSquare />} />
          </div>
          <div className="title">
            <h2>GitHub</h2>
            <p className="github">github</p>
            <p>How people build software.</p>
          </div>
          <button>view on github</button>

          <div className="git-social">
            <GitSocials
              icon={<MdOutlineLocationOn />}
              label={"San Francisco, CA"}
            />
            <GitSocials
              icon={<RiGitRepositoryFill />}
              label={"493 repositories"}
            />
            <GitSocials icon={<HiUserGroup />} label={"39518 followers"} />
            <GitSocials icon={<HiUserGroup />} label={"0 following"} />
          </div>
        </div>
        <div className="main-repo-container">
          <div className="repo-heading">
            <h2>repositories(30)</h2>
          </div>

          <div className="repositories-container">
            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>

            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>

            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>

            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>

            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>

            <div className="repos">
              <div className="repo-title">
                <h3>github</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ad!
                </p>
              </div>
              <div className="repo-rating">
                <GitSocials icon={<LuGitFork />} label={"2363 forks"} />
                <GitSocials icon={<FaStar />} label={"819 stars"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-follower-container">
        <div className="repo-heading">
          <h2>followeres(30)</h2>
        </div>

        <div className="followers-container">
          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>

          <div className="follower">
            <img src={profImg} alt="" />
            <h3>username</h3>
            <button>viewUser</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
