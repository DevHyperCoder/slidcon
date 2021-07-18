<script lang="ts">
  let email: string, password: string;

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { firebaseApp } from "../../firebaseConfig";

  async function signInWithEmail() {
    console.log("called");
    try {
      await signInWithEmailAndPassword(getAuth(firebaseApp), email, password);
    } catch (e) {
      console.error(e.message);
    }
  }
</script>

<h1 class="font-bold text-4xl uppercase mb-10">Sign In With Email</h1>

<form class="flex flex-col w-3/5">
  <label class="mb-3 font-bold" for="email">Email</label>
  <input
    type="email"
    bind:value={email}
    name="email"
    class="mb-4 border border-grey-500 rounded-xl"
    placeholder="Email"
  />

  <label class="mb-3 font-bold" for="password">Password</label>
  <input
    type="password"
    bind:value={password}
    name="password"
    class=" border border-grey-500 rounded-xl"
    placeholder="Password"
  />

  <button type="button" class="text-primary text-right font-bold mt-3 mb-3"
    >Forgot Password ?</button
  >

  <button
    type="button"
    on:click={signInWithEmail}
    class="bg-primary rounded-full p-2 text-white mb-3 font-bold"
    >Sign In</button
  >

  <p>
    Not registered yet ? <a class="text-primary font-bold" href="/register"
      >Create an account</a
    >
  </p>
</form>
