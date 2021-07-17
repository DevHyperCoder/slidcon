<script>
  import LoginProviderButton from "./_components/LoginProviderButton.svelte";
</script>

<div class="lg:grid lg:grid-cols-2 px-5 lg:px-0 justify-items-center h-screen">
  <div class=" justify-center h-full items-center flex flex-col w-full">
    <h1 class="font-bold text-4xl uppercase mb-10">Login</h1>
    <LoginProviderButton text="Sign In With Google" provider="Google" />
    <LoginProviderButton text="Sign In With Github" provider="GitHub" />
    <LoginProviderButton text="Sign in Anonymously" provider="Anonymous" />
    <LoginProviderButton text="Sign In With Email" provider="Email" />
  </div>

  <div
    class="hidden justify-center h-full items-center lg:flex bg-primary w-full"
  >
    <div class="text-center">
      <img src="login.png" class="w-3/5 h-3/5 mx-auto" alt="asdf" />
      <p class="font-bold text-5xl mt-10 text-white">SlidCon</p>
    </div>
  </div>
</div>
