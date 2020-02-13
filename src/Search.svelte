<script>
  export let search;
</script>

<div class="form-group row">
  <label for="search" class="col-sm-2 col-form-label">Buscar</label>
  <div class="col-sm-10">
    <input bind:value={search} type="search" class="form-control" id="search">
  </div>
</div>