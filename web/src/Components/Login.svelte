<script>
  import { currentUser, login, logout } from "../stores/userStore";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let error = "";

  $: user = $currentUser;

  function handleLogin() {
    if (!login(email, password)) {
      error = "Invalid credentials";
    } else {
      error = "";
    }
  }

  function handleLogout() {
    logout();
  }
</script>

<div class="login">
  {#if $currentUser}
    <p>Welcome, {$currentUser.name}!</p>
    <button on:click={handleLogout}>Logout</button>
  {:else}
    <form on:submit|preventDefault={handleLogin}>
      <input type="email" bind:value={email} placeholder="Email" required />
      <input
        type="password"
        bind:value={password}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    {#if error}
      <p>{error}</p>
    {/if}
  {/if}
</div>

<style>
  .login {
    
  }
</style>
