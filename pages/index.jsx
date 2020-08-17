import { Btn } from "../components/TestStory";
import { TestStateComponent } from "../components/TestStateComponent";

const Index = () => (
  <div>
    <style jsx global>{`
      body {
        background-color: black;
      }
    `}</style>
    Hello world <Btn label="test" />
    <TestStateComponent />
  </div>
);

export default Index;
