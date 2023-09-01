import Header from './index/components/Header';
import SectionStarter from './index/components/SectionStarter';
import SectionCources from './index/components/SectionCources';
import SectionPublications from './index/components/SectionPublications';
import Footer from './index/components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <SectionStarter />
            <SectionCources />
            <SectionPublications />
            <Footer />
        </div>
    )
}

export default App;
