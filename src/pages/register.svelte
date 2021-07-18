<script lang="ts">
  let email: string = "",
    password: string = "",
    confirmPassword: string = "",
    error = "";

  let isRegisterButtonDisabled = false;

  import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
  import { firebaseApp } from "../firebaseConfig";

  $: {
    confirmPassword;

    console.log({ password, confirmPassword });
    if (password !== confirmPassword) {
      isRegisterButtonDisabled = true;
      error = "Passwords do not match";
    } else if (
      !(password === "" && confirmPassword === "") &&
      confirmPassword.length < 6
    ) {
      isRegisterButtonDisabled = true;
      error = "Password should be more than 6 characters";
    } else {
      error = "";
      isRegisterButtonDisabled = false;
    }
  }

  $: {
    console.log(error);
  }

  async function register() {
    try {
      await createUserWithEmailAndPassword(
        getAuth(firebaseApp),
        email,
        password
      );
    } catch (e) {
      console.error(e.message);
    }
  }
</script>

<div class="lg:grid lg:grid-cols-2 px-5 lg:px-0 justify-items-center h-screen">
  <div class=" justify-center h-full items-center flex flex-col w-full">
    <h1 class="font-bold text-4xl uppercase mb-10">Register</h1>

    <form class="flex flex-col w-3/5">
      <label class="mb-3 font-bold" for="email">Email</label>
      <input
        type="email"
        on:invalid={() => (error = "Email address is not valid")}
        name="email"
        bind:value={email}
        class="mb-4 border border-grey-500 rounded-xl"
        placeholder="Email"
      />

      <label class="mb-3 font-bold" for="password">Password</label>
      <input
        type="password"
        bind:value={password}
        name="password"
        class="mb-4 border border-grey-500 rounded-xl"
        placeholder="Password"
      />

      <label class="mb-3 font-bold" for="confirm-password"
        >Confirm Password</label
      >
      <input
        type="password"
        bind:value={confirmPassword}
        name="confirm-password"
        class="mb-4 border border-grey-500 rounded-xl"
        placeholder="Confirm Password"
      />

      <button
        type="button"
        on:click={register}
        disabled={isRegisterButtonDisabled}
        class={`bg-primary rounded-full p-2 text-white mb-3 font-bold disabled:bg-grey-500`}
        >Register</button
      >

      <p>
        Already have a account ? <a
          class="text-primary font-bold"
          href="/signin/email">Login</a
        >
      </p>
    </form>
  </div>

  <div
    class="hidden justify-center h-full items-center lg:flex bg-primary w-full"
  >
    <div class="text-center">
      <img src="/login.png" class="w-3/5 h-3/5 mx-auto" alt="asdf" />
      <p class="font-bold text-5xl mt-10 text-white">SlidCon</p>
    </div>
  </div>
</div>
