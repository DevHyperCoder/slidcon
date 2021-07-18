<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { firebaseApp } from "./firebaseConfig";
  import { onAuthStateChanged, getAuth } from "firebase/auth";
  import { userStore } from "./stores/user";

  onAuthStateChanged(getAuth(firebaseApp), (user) => {
    userStore.set(user);
  });
</script>

<Router {routes} />

<style global lang="postcss">
  @import "../assets/global.css";

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
