import Avatar from "@material-ui/core/Avatar";

export default function PlayerBadge({ player }) {
  return (
    <Avatar
      alt={player.name}
      src={player.photo}
      style={{ width: 80, height: 80, marginRight: "30px", marginLeft: "30px" }}
    />
  );
}
