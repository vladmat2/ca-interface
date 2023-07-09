import '@passageidentity/passage-elements/passage-register';

const appID = 'klsgwfaw6pfFTTV0XKrM8UcD';

function Register() {
  return (
      <div>
        <passage-register app-id={appID}></passage-register>
      </div>
  );
}
export default Register;