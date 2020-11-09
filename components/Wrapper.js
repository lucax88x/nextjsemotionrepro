import { Typography } from "./Typography";

export const Wrapper = (props) => {
  const { condition } = props;

  return condition === true ? (
    <div>
      I should see this without any style, but I am getting Typography class
    </div>
  ) : (
    <Typography>I should NOT see this</Typography>
  );
};
