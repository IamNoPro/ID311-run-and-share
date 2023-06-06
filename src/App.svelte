<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import NaverMap from "./components/NaverMap.svelte";
  import Geolocation from "./Geolocation.svelte";


  // const socket = io(backendHost);

  // navigator.geolocation.watchPosition(position => {
  //   socket.emit("geolocation.change", position);
  // });

</script>

<main>
    <NaverMap/>
<!--    <Camera/>-->
<!-- <Geolocation/> -->
<!--    <button on:click={() => socket.emit("geolocation.change")}>qwer</button>-->

</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }

    .read-the-docs {
        color: #888;
    }
</style>
