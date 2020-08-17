import { Btn } from "../components/TestStory";

const Index = () => (
  <div>
    <style jsx global>{`
      body {
        background-color: black;
      }
    `}</style>
    Hello world <Btn label="test" />
  </div>
);

export default Index;
