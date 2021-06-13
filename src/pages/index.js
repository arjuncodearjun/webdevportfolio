import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from "next/head"

const Home = () => {
  return (
    <Layout>
       <Head>
       <title>Arjun | Web Dev | Portfolio</title>
       <link rel="icon" href="https://media-exp3.licdn.com/dms/image/C4E03AQFe3r2Klnpy1g/profile-displayphoto-shrink_400_400/0/1617175119190?e=1629331200&v=beta&t=TJrCbkFC4gZS_l3KVxFXDNPwMiXKuVCa1H28IOU1Ots" />
      </Head>
     <Section grid> 
        <Hero /> 
         <BgAnimation /> 
      </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  ); 
};

export default Home;
