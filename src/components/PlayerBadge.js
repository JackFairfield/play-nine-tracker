import Avatar from "@material-ui/core/Avatar";

export default function PlayerBadge({ player }) {
  return (
    <Avatar
      alt={player.name}
      src={player.photo}
      style={{ width: 56, height: 56, marginRight: "30px", marginLeft: "30px" }}
    />
  );
}
