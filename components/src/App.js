import Comment from "./Comment";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <p>Are your sure ?</p>
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Sam"
          time="Today at 6am"
          comment="Very quality contents !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Laura"
          time="Yesterday at 10pm"
          comment="Awersome !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Smith"
          time="Yesterday at 6pm"
          comment="Nice job bro"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
