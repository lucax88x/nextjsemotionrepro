const styles = {
  big: {
    fontSize: "50px",
    color: "red",
  },
};

export const Typography = ({ children }) => {
  return <div css={styles.big}>{children}</div>;
};
