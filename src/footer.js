import Typography from "@material-ui/core/Typography";

const Copyright =() => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a href="https://github.com/kavinsurya" target="_blank" rel="noreferrer">
        Kavinsurya
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export default Copyright;