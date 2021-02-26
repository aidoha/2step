import Footer from "../common/Footer";
import { Wrap, Layout, White } from "./style";
import Header from "../Header";

const MainLayout = ({
  bg,
  children,
  noFooter,
  width,
  padding,
  loading
}) => {
  return (
    <Wrap>
      <Header />
      <White>
        <Layout width={width} padding={padding}>
          {!loading && children}
        </Layout>
      </White>
      {!noFooter && <Footer bg={bg} />}
    </Wrap>
  );
};

export default MainLayout;
