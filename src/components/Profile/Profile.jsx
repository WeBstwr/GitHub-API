import "./profile.css";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

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
        <GitSocials icon={<RiGitRepositoryFill />} label={"493 repositories"} />
        <GitSocials icon={<HiUserGroup />} label={"39518 followers"} />
        <GitSocials icon={<HiUserGroup />} label={"0 following"} />
      </div>
    </div>
  );
};

export default Profile;
