import LoginHeader from "../components/admin/LoginHeader";
import ForgetFeilds from "../components/admin/ForgetFeilds";
import LoginFooter from "../components/admin/LoginFooter";

const ForgetPassword = () => {
  return (
    <section className="w-full relative min-h-[100vh] bg-gray overflow-hidden flex flex-col justify-between pt-[0rem] px-[0rem] tracking-[normal]">
      <LoginHeader />
      <ForgetFeilds />
      <LoginFooter />
    </section>
  );
};

export default ForgetPassword;