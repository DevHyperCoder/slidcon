<script>
  import { goto } from "@roxi/routify";
  import SignInProviderButton from "../_components/SignInProviderButton.svelte";
</script>

<h1 class="font-bold text-4xl uppercase mb-10">Sign In</h1>
<SignInProviderButton text="Sign In With Google" provider="Google" />
<SignInProviderButton text="Sign In With Github" provider="GitHub" />
<SignInProviderButton text="Sign in Anonymously" provider="Anonymous" />
<SignInProviderButton
  onClick={() => {
    $goto("./email");
  }}
  text="Sign In With Email"
  provider="Email"
/>
