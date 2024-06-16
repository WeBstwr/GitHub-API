import "./profile.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { LuGitFork } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import profImg from "../../assets/wp1.jpg";
import useProfileStore from "../../store/profileStore";
import { useEffect } from "react";

const GitSocials = ({ icon, label }) => {
  return (
    <div className="git-socials">
      <div className="git-socials-icon-wrapper">{icon}</div>
      {label}
    </div>
  );
};
const Profile = () => {
  const {
    userProfile,
    repositories,
    followers,
    following,
    loading,
    fetchProfileData,
  } = useProfileStore();
  useEffect(() => {
    fetchProfileData("github");
  }, [fetchProfileData]);
  if (loading) {
    return (
      <div>
        {" "}
        <h2>Loading Profile Data</h2>{" "}
      </div>
    );
  }
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image">
            <img src={userProfile.avatar_url} alt="profile" />
          </div>
          <div className="title">
            <h2>{userProfile.name}</h2>
            <p className="github">{userProfile.login}</p>
            <p>{userProfile.bio}</p>
          </div>
          <button onClick={() => window.open(userProfile.html_url, _blank)}>
            view on github
          </button>

          <div className="git-social">
            <GitSocials
              icon={<MdOutlineLocationOn />}
              label={userProfile.location}
            />
            <GitSocials
              icon={<RiGitRepositoryFill />}
              label={`${repositories.length} repositories`}
            />
            <GitSocials
              icon={<HiUserGroup />}
              label={`${followers.length} followers`}
            />
            <GitSocials
              icon={<HiUserGroup />}
              label={`${following.length} following`}
            />
          </div>
        </div>
        <div className="main-repo-container">
          <div className="repo-heading">
            <h2>repositories({repositories.length})</h2>
          </div>

          <div className="repositories-container">
            {repositories.map((repo) => (
              <div key={repo.id} className="repos">
                <div className="repo-title">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>
                <div className="repo-rating">
                  <GitSocials
                    icon={<LuGitFork />}
                    label={`${repo.forks_count} forks`}
                  />
                  <GitSocials
                    icon={<FaStar />}
                    label={`${repo.stargazers_count} stars`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-follower-container">
        <div className="repo-heading">
          <h2>followers({followers.length})</h2>
        </div>

        <div className="followers-container">
          <div className="follower">
            <img src={followers.followers_url} alt="follower profile" />
            <h3>{followers.name}</h3>
            <button>viewUser</button>
          </div>
        </div>
      </div>
      <div className="main-follower-container">
        <div className="repo-heading">
          <h2>following({following.length})</h2>
        </div>

        <div className="followers-container">
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
