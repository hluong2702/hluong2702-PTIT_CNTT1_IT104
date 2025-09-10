import { useParams } from "react-router-dom";

const Team = () => {
  const { teamId } = useParams();

  return (
    <div>
      <h3>Chi tiết Team {teamId}</h3>
      <p>Thông tin cụ thể về team {teamId}...</p>
    </div>
  );
};

export default Team;