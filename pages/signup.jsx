import AboutMain from '../components/about/aboutmain';
import SEO from '../components/seo';
import SignUp from '../components/signup/signupin';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
   <>
      <SEO pageTitle={'About'} />
      <SignUp/>

      </>
    
  );
};

export default index;