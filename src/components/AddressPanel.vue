<template>
  <div>
    <div class="address_panel ">
      <div class="address_details">
        <h1>指図</h1>
        <p>
          <span>New York, NY 10012</span>
          <br>
          <span>Something Something</span>
        </p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

  .address_details {
    text-align: center;
    /* font-family: "Vollkorn"; */
    font-weight: 400;
    line-height: 2.3;
    color: #fffbcc;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100%;
    margin-bottom: 100%;
    display: block;
  }

  .address_panel {
    /* display: flex; */
    /* vertical-align: center; */
    position: absolute;
    background-color: rgba(0,0,0,0.84);
    flex: 0 0 50%;
    max-width: 50%;
    height: 100vh;
    width: 50vh;
    z-index: 10;
  }

    @media (max-width: 576px) {
      .address_panel {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .address_panel {
        width: 20vh;
      }
    }

</style>
