<script>
  import { onMount } from "svelte";

  let data = {};

  onMount(async function () {
    const res = await fetch(`/api/hello`, {
      method: "GET",
      credentials: "include",
    });
    data = await res.json();
  });
</script>

<pre>{JSON.stringify(data)}</pre>
