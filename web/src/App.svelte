<script>
  import { onMount, onDestroy, tick } from "svelte";
  import { ULID } from "./utils";
  import MsgLog from "./Components/MsgLog.svelte";
  import messageStore from "./stores/MessageStore";
  import Login from "./Components/Login.svelte";
  import { currentUser, login, logout } from "./stores/userStore";

  const port = 8000;

  let now = new Date().toISOString().substring(11, 16);
  let dayName = new Date().toISOString().substring(0, 10);

  let messages = [];
  messageStore.subscribe((data) => {
    messages = data;
  });
  let myMsg = "";

  async function sendRequest() {
    const response = await fetch(`http://localhost:${port}/send-message`, {
      method: "POST",
      body: JSON.stringify({
        user: $currentUser,
        message: myMsg,
      }),
    });

    const json = await response;
    console.log(json.status);
  }

  function sendMessage() {
    sendRequest();

    let message = {
      message: myMsg,
      isDisplayable: true,
      strDate: now,
      from: $currentUser.name,
      myMessage: true,
      time: new Date().getTime(),
    };

    updateStore(message);
    console.log(message);

    myMsg = "";
  }

  function updateStore(message) {
    messageStore.update((currentMessages) => {
      return [...currentMessages, message];
    });
  }

  const endpoint = "localhost";

  const url = new URL("https://" + endpoint + "/.well-known/mercure");

  url.searchParams.append("topic", "https://example.com/conversation/1");
  const eventSource = new EventSource(url);

  eventSource.onmessage = (e) => onMercureMessage(JSON.parse(e.data));

  function onMercureMessage(data) {
    console.log(data.user.name);
    let message = {
      message: data.message,
      isDisplayable: true,
      strDate: now,
      from: data.user,
      myMessage: false,
      time: new Date().getTime(),
    };

    console.log(message);

    console.log(data.user);
    if ($currentUser.name != data.user.name) {
      updateStore(message);
    }

    myMsg = "";
  }
</script>

<Login />
<MsgLog {messages} />
<input bind:value={myMsg} on:change={sendMessage} />
