import '@passageidentity/passage-elements/passage-login';

const appID = 'klsgwfaw6pfFTTV0XKrM8UcD';

function Login() {
  return (
      <div>
        <passage-login app-id={appID}></passage-login>
      </div>
  );
}
export default Login;