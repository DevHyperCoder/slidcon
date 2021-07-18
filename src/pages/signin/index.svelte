<script>
  import { goto } from "@roxi/routify";
  import SignInProviderButton from "../_components/SignInProviderButton.svelte";

  import {
    signInAnonymously,
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
  } from "firebase/auth";
  import { firebaseApp } from "../../firebaseConfig";
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const auth = getAuth(firebaseApp);

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function signInWithGithub() {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function signInAnonymous() {
    try {
      await signInAnonymously(auth);
    } catch (e) {
      cosnole.error(e.message);
    }
  }
</script>

<h1 class="font-bold text-4xl uppercase mb-10">Sign In</h1>
<SignInProviderButton
  onClick={signInWithGoogle}
  text="Sign In With Google"
  provider="Google"
/>
<SignInProviderButton
  onClick={signInWithGithub}
  text="Sign In With Github"
  provider="GitHub"
/>
<SignInProviderButton
  onClick={signInAnonymous}
  text="Sign in Anonymously"
  provider="Anonymous"
/>
<SignInProviderButton
  onClick={() => {
    $goto("./email");
  }}
  text="Sign In With Email"
  provider="Email"
/>
