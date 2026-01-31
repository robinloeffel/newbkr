<script lang="ts">
  import "$styles/base.scss";
  import type { LayoutProps } from "./$types";
  const { children }: LayoutProps = $props();
</script>

{@render children()}
