import UV from "./components/UV";

function App() {
  const projectTitle = import.meta.env.VITE_PROJECT_NAME;
  document.title = projectTitle;

  return (
    <>
      <main className="container mx-auto flex min-h-screen grow flex-col items-center justify-center">
        <div className="flex">
          <UV />
        </div>
      </main>
    </>
  );
}

export default App;
