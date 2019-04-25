import React, { useState } from "react";
import commentFetcher from "../util/commentFetcher";

const ReplayIDForm = () => {
  const [replayID, setReplayID] = useState("377499328");

  const processForm = (e: any) => {
    e.preventDefault();
    const comments = commentFetcher(replayID);
  };

  return (
    <form onSubmit={processForm}>
      <input
        type="text"
        name="replayID"
        value={replayID}
        onChange={e => setReplayID(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ReplayIDForm;
