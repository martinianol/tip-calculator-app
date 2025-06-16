import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center flex-1 gap-10">
        <Header />
        <Main />
      </div>
      <Footer />
    </PageContainer>
  );
}

export default App;
