<script lang="ts">
  export let provider: string;
  export let text: string;
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="border border-black text-xl p-3 w-full lg:w-3/5 my-2 rounded-full shadow-lg flex items-center flex-row gap-4"
  ><img
    class="lg:ml-32 w-6 h-6"
    alt={provider}
    src={`/${provider.toLowerCase()}.png`}
  />{text}</button
>
