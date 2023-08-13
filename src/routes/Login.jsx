import '@passageidentity/passage-elements/passage-login';

function Login() {
  return (
      <div>
        <passage-login app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-login>
      </div>
  );
}
export default Login;