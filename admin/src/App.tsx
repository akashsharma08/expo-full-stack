import { SignedIn, UserButton } from "@clerk/clerk-react";

import { SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  return (
    <div>
      <h1>Home page</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App;
