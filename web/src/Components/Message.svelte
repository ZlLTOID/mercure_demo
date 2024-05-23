<script>
    import { currentUser, login, logout } from "../stores/userStore";

    export let msg;
</script>

<div>
    {#if msg.isDisplayable}
        {#if msg.myMessage === true}
            <div class="msg">
                <div class="myMsgRow">
                    <div class="myMsg">
                        {#if msg.img}
                            <img src={msg.img} alt="imagery" />
                        {:else if msg.message}
                            {msg.message}
                        {:else if msg.binary}
                            Download &nbsp;<a
                                download={msg.filename}
                                href={msg.binary}>{msg.filename}</a
                            >
                        {/if}
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
        {:else}
            <div class="msg">
                <div class="theirMsgRow">
                    <div class="theirMsg">
                        {#if msg.img}
                            <img src={msg.img} alt="imagery" />
                        {:else if msg.message}
                            {msg.message}
                        {:else if msg.binary}
                            Download &nbsp;<a
                                download={msg.filename}
                                href={msg.binary}>{msg.filename}</a
                            >
                        {/if}
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
        {/if}
    {/if}
</div>

<style>
    .msg {
        border-radius: 8px;
        padding: 8px 28px;
    }
    .theirMsgRow {
        display: flex;
        justify-content: flex-start; /* Align to the left */
        align-items: flex-start;
        margin: 8px 0;
    }
    .myMsgRow {
        display: flex;
        justify-content: flex-end; /* Align to the right */
        align-items: flex-end;
        margin: 8px 0;
        color: black;
    }
    .theirMsg {
        background-color: rgb(21, 77, 150);
        padding: 8px;
        border: 1px solid rgb(187, 187, 187);
        border-radius: 8px;
        max-width: 80%;
    }

    .myMsg {
        display: flex;
        align-items: flex-end;
        background-color: rgb(209, 252, 160);
        padding: 8px;
        border: 1px solid rgb(187, 187, 187);
        border-radius: 8px;
        border-top-right-radius: 0;
        max-width: 80%;
    }
    img {
        max-width: 400px;
        max-height: 400px;
    }
</style>
