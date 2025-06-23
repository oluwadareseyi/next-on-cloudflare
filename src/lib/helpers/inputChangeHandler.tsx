export const inputChangeHandler = (
  e: any,
  setState: any,
  isSimple?: boolean
) => {
  if (isSimple) {
    setState(e?.target?.value);
  } else {
    setState((prevState: any) => {
      return { ...prevState, [e?.target?.name]: e.target?.value };
    });
  }
};
