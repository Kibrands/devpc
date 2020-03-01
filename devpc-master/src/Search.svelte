<script>
  export let search;
</script>

<style>
  #search-label {
    z-index: -1;
  }
</style>

<div class="form-group row" id="searchDiv">
  <label id="search-label" for="search" class="col-sm-2 col-form-label">Buscar</label>
  <div class="col-sm-10">
    <input bind:value={search} type="search" class="form-control" id="search">
  </div>
</div>