import LoginHeader from "../components/admin/LoginHeader";
import LoginFeilds from "../components/admin/LoginFeilds";
import LoginFooter from "../components/admin/LoginFooter";

const Login = () => {
  return (
    <section className="w-full min-h-[100vh] relative bg-gray overflow-hidden flex flex-col justify-between pt-[0rem] px-[0rem] tracking-[normal]">
      <LoginHeader />
      <LoginFeilds />
      <LoginFooter />
    </section>
  );
};

export default Login;