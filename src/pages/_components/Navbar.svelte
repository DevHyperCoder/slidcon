<script type="ts">
  import { firebaseApp } from "../../firebaseConfig";

  import { getAuth, onAuthStateChanged } from "firebase/auth";

  let isNavCollapsed = true;

  let user: import("firebase/auth").User;
  onAuthStateChanged(getAuth(firebaseApp), (auth) => {
    user = auth;
  });
</script>

<nav
  class="shadow-lg sticky flex items-center justify-between flex-wrap bg-grey-500 p-4"
>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="text-black font-semibold text-xl tracking-tight">SlidCon</span>
  </div>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400"
      on:click={() => (isNavCollapsed = !isNavCollapsed)}
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path
          d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
        /></svg
      >
    </button>
  </div>
  <div
    class={` ${
      isNavCollapsed ? "hidden" : "sm:block"
    }  lg:block w-full block flex-shrink-0 lg:flex lg:items-center lg:align-right lg:w-auto`}
  >
    <div class="text-sm lg:flex-grow">
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
        About
      </a>

      <a
        href={user === null ? "/signin" : "/create"}
        class=" bg-primary font-semibold text-white rounded-md p-3 block mt-4 lg:inline-block lg:mt-0 "
      >
        {user === null ? "Get Started" : "Create"}
      </a>
    </div>
  </div>
</nav>
