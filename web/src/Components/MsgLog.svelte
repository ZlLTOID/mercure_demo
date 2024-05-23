<script>
  import { tick, createEventDispatcher, onMount } from "svelte";
  import Message from "./Message.svelte";

  export let messages = [];
  let msgLogEl;

  onMount(() => {
    scrollToBottom();
  });

  $: {
    messages.length;
    scrollToBottom();
  }

  export async function scrollToBottom() {
    if (!msgLogEl) return;
    await tick(); //  wait for any new message to appear in the log
    msgLogEl.scroll(0, msgLogEl.scrollHeight + 50);
  }
</script>

<div class="msgLogContent" bind:this={msgLogEl}>
  {#if messages?.length}
    {#each messages as msg}
      <Message {msg} />
    {/each}
  {:else}
    No messages yet.
  {/if}
</div>

<style>
.msgLogContent {
  overflow: auto;
  max-height: 30em;
  text-align: left;
  width: 100%; /* Set width to 60% of the viewport */
  margin: 0 auto; /* Center horizontally */
  padding: 1rem; /* Optional: add padding for better appearance */
  background-color: #2c2c2c; /* Optional: background color for visibility */
  border-radius: 8px; /* Optional: rounded corners */
}
</style>
