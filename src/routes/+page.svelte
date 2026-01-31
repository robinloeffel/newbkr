<script lang="ts">
  import { client } from "$utilities/openapi";
  import { onMount } from "svelte";

  onMount(async () => {
    const { data, error } = await client.POST("/tickle");

    // eslint-disable-next-line no-console
    console.log({ data, error });
  });
</script>

<h1>Welcome to NewBKR! 👋🏼</h1>
