import AboutMain from '../components/about/aboutmain';
import LoginPage from '../components/login/loginpage';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'login'} />
      <LoginPage/>
    </Wrapper>
  );
};

export default index;