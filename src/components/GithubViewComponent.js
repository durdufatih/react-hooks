import Github from "./Github";

function GithubViewComponent() {
  const { isLoading, error, user } = Github("durdufatih");

  if (isLoading) return <div>Loading ...</div>;
  else if (error) return <div>Error</div>;
  else
    return (
      <div>
        <div>Custom Hooks Example</div>
        <div>User is :{user}</div>
      </div>
    );
}

export default GithubViewComponent;
